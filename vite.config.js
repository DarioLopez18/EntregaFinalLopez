import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import reactRefresh from "@vitejs/plugin-react-refresh";
import env from 'vite-plugin-env-compatible'

export default defineConfig({
  plugins: [
    react(),
    reactRefresh(),
    env(".env")
  ],
});

