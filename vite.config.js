import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        billetterie: resolve(__dirname, "billetterie.html"),
        cgv: resolve(__dirname, "cgv.html"),
        confidentialite: resolve(__dirname, "confidentialite.html"),
        infosSociete: resolve(__dirname, "infos-societe.html"),
        mentionsLegales: resolve(__dirname, "mentions-legales.html"),
        confirmation: resolve(__dirname, "confirmation.html"),
      },
    },
  },
});
