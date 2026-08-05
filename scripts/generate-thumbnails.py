#!/usr/bin/env python3
"""Generate every carousel thumbnail from its full-size WebP source."""

from __future__ import annotations

import argparse
import io
import sys
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
COLLECTIONS_ROOT = ROOT / "public" / "assets" / "collections"
TARGET_SIZE = (360, 504)
WEBP_QUALITY = 75
WEBP_METHOD = 6


def iter_assets():
    for collection_dir in sorted(COLLECTIONS_ROOT.iterdir()):
        if not collection_dir.is_dir():
            continue
        thumb_dir = collection_dir / "thumb"
        for source in sorted(collection_dir.glob("*.webp")):
            yield source, thumb_dir / source.name


def render_thumbnail(source: Path) -> bytes:
    with Image.open(source) as image:
        width, height = image.size
        if width * 7 != height * 5:
            raise ValueError(
                f"{source.relative_to(ROOT)} has ratio {width}:{height}; expected 5:7"
            )
        thumbnail = image.convert("RGBA").resize(TARGET_SIZE, Image.Resampling.LANCZOS)
        output = io.BytesIO()
        thumbnail.save(
            output,
            "WEBP",
            quality=WEBP_QUALITY,
            method=WEBP_METHOD,
            exact=True,
        )
        return output.getvalue()


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--check",
        action="store_true",
        help="fail when a thumbnail is missing or differs from the generated result",
    )
    args = parser.parse_args()

    assets = list(iter_assets())
    if not assets:
        print("No collection WebP assets found.", file=sys.stderr)
        return 1

    changed = []
    errors = []
    for source, target in assets:
        try:
            expected = render_thumbnail(source)
        except Exception as error:  # noqa: BLE001 - report every broken asset together
            errors.append(str(error))
            continue

        current = target.read_bytes() if target.exists() else None
        if current == expected:
            continue

        changed.append(target.relative_to(ROOT))
        if not args.check:
            target.parent.mkdir(parents=True, exist_ok=True)
            target.write_bytes(expected)

    if errors:
        print("Thumbnail generation errors:", file=sys.stderr)
        for error in errors:
            print(f"- {error}", file=sys.stderr)
        return 1

    if args.check and changed:
        print("Out-of-date carousel thumbnails:", file=sys.stderr)
        for path in changed:
            print(f"- {path}", file=sys.stderr)
        print("Run: python scripts/generate-thumbnails.py", file=sys.stderr)
        return 1

    action = "Validated" if args.check else "Generated"
    print(f"{action} {len(assets)} thumbnails; {len(changed)} file(s) updated.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
