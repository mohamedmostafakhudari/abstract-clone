import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/abstract-clone/",
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
    },
  },
});
