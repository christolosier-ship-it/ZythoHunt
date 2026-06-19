import { defineConfig } from "vite";

const port = Number(process.env.PORT || 5173);

export default defineConfig({
  base: process.env.BASE_PATH || "/",
  publicDir: "public",
  build: {
    outDir: "dist",
    emptyOutDir: true
  },
  server: {
    host: "0.0.0.0",
    port,
    strictPort: true
  },
  preview: {
    host: "0.0.0.0",
    port
  }
});
