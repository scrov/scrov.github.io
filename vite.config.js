import { defineConfig } from "vite";

export default defineConfig({
  root: ".",
  publicDir: "public",
  server: {
    port: 8020,
    host: "0.0.0.0"
  },
  build: {
    outDir: "dist",
    emptyOutDir: false
  }
});
