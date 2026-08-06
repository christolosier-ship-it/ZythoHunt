export function createCollectionAssetPaths(basePath) {
  const normalizedBasePath = String(basePath || "")
    .replace(/^\/+/, "")
    .replace(/\/+$/, "");

  if (!normalizedBasePath) {
    throw new Error("A collection asset basePath is required.");
  }

  const normalizeFileName = (fileName) =>
    fileName ? String(fileName).replace(/^\/+/, "") : null;

  const assetPath = (fileName) => {
    const normalizedFileName = normalizeFileName(fileName);
    return normalizedFileName ? `${normalizedBasePath}/${normalizedFileName}` : null;
  };

  const thumbPath = (fileName) => {
    const normalizedFileName = normalizeFileName(fileName);
    return normalizedFileName ? `${normalizedBasePath}/thumb/${normalizedFileName}` : null;
  };

  return Object.freeze({ assetPath, thumbPath });
}
