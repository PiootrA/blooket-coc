import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        "@styles": "/src/styles",
        "@components": "/src/components",
        "@pages": "/src/pages",
        "@context": "/src/context",
      }
    },
    css: {
        modules: {
          scopeBehaviour: "local",
          localsConvention: "dashesOnly",
          generateScopedName: "blooket_[local]___[hash:base64:5]",
        },
      },
    build: {
        target: "es2022",
        rollupOptions: {
            output: {
                manualChunks: (id) => {
                    if (id.includes("node_modules")) return "vendor";
                    else return "main";
                },
                chunkFileNames: "[name].[hash].js",
                entryFileNames: "[name].[hash].js",
                assetFileNames: "[name].[hash].[ext]"
            },
        },
        chunkSizeWarningLimit: 1000,
        manifest: true
    },
});
