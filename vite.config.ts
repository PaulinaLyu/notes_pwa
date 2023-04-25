import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      outDir: "dist",
      manifest: {
        name: "Notes React PWA",
        short_name: "NotesPWA",
        description: "description",
        start_url: "/index.html",
        display: "standalone",
        background_color: "#fff",
        theme_color: "#fff",
        orientation: "portrait-primary",
        icons: [
          {
            src: "icon/android-chrome-192x192.png",
            size: "192x192",
            type: "image/png",
            purpose: "maskable any",
          },
          {
            src: "icon/android-chrome-512x512.png",
            size: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
