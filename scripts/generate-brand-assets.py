#!/usr/bin/env python3
"""Generate all PWA and social branding assets from the canonical ZythoHunt logo."""

from __future__ import annotations

from pathlib import Path
from typing import Iterable

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "public" / "logo.png"
OUTPUT_DIR = ROOT / "public" / "brand" / "generated"
BRAND_BG = (18, 9, 4, 255)


def load_logo() -> Image.Image:
    if not SOURCE.exists():
        raise FileNotFoundError(f"Canonical logo missing: {SOURCE}")
    with Image.open(SOURCE) as image:
        return image.convert("RGBA")


def contain(image: Image.Image, size: tuple[int, int]) -> Image.Image:
    return ImageOps.contain(image, size, method=Image.Resampling.LANCZOS)


def place_center(canvas: Image.Image, image: Image.Image) -> None:
    x = (canvas.width - image.width) // 2
    y = (canvas.height - image.height) // 2
    canvas.alpha_composite(image, (x, y))


def save_square_icon(
    logo: Image.Image,
    filename: str,
    size: int,
    *,
    background: tuple[int, int, int, int] | None = None,
    content_ratio: float = 1.0,
) -> None:
    canvas = Image.new("RGBA", (size, size), background or (0, 0, 0, 0))
    max_content = max(1, round(size * content_ratio))
    resized = contain(logo, (max_content, max_content))
    place_center(canvas, resized)
    target = OUTPUT_DIR / filename
    canvas.save(target, format="PNG", optimize=True)
    verify_size(target, (size, size))


def save_social_preview(logo: Image.Image) -> None:
    size = (1200, 630)
    canvas = Image.new("RGBA", size, BRAND_BG)
    resized = contain(logo, (500, 500))
    place_center(canvas, resized)
    target = OUTPUT_DIR / "share-1200x630-v2.png"
    canvas.convert("RGB").save(target, format="PNG", optimize=True)
    verify_size(target, size)


def verify_size(path: Path, expected: tuple[int, int]) -> None:
    with Image.open(path) as image:
        if image.size != expected:
            raise RuntimeError(f"Unexpected dimensions for {path}: {image.size}, expected {expected}")


def expected_outputs() -> Iterable[Path]:
    for filename in (
        "icon-32-v2.png",
        "icon-48-v2.png",
        "apple-touch-icon-180-v2.png",
        "icon-192-v2.png",
        "icon-512-v2.png",
        "icon-maskable-512-v2.png",
        "share-1200x630-v2.png",
    ):
        yield OUTPUT_DIR / filename


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    logo = load_logo()

    save_square_icon(logo, "icon-32-v2.png", 32)
    save_square_icon(logo, "icon-48-v2.png", 48)
    save_square_icon(logo, "apple-touch-icon-180-v2.png", 180, background=BRAND_BG, content_ratio=0.92)
    save_square_icon(logo, "icon-192-v2.png", 192)
    save_square_icon(logo, "icon-512-v2.png", 512)
    save_square_icon(logo, "icon-maskable-512-v2.png", 512, background=BRAND_BG, content_ratio=0.72)
    save_social_preview(logo)

    missing = [str(path) for path in expected_outputs() if not path.exists()]
    if missing:
        raise RuntimeError(f"Brand asset generation incomplete: {', '.join(missing)}")

    print(f"Generated {len(tuple(expected_outputs()))} brand assets from {SOURCE.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
