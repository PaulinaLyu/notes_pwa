import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "prompt",
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.png"],
      manifest: {
        name: "Notes React PWA",
        short_name: "NotesPWA",
        lang: "en",
        icons: [
          {
            src: "icon/android-chrome-192x192.png",
            type: "image/png",
            sizes: "192x192",
            purpose: "monochrome",
          },
          {
            src: "icon/android-chrome-512x512.png",
            type: "image/png",
            sizes: "512x512",
            purpose: "maskable any",
          },
        ],
        display: "standalone",
        background_color: "#fff",
        theme_color: "#fff",
        orientation: "portrait-primary",
        scope: "/",
        start_url: ".",
      },
    }),
  ],
});
