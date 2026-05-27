import { defineConfig } from "vite";
// Trigger rebuild
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
    allowedHosts: [".modal.host"],
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        /**
         * Split vendor dependencies into cacheable chunks.
         * Re-deploys of app code won't bust browser cache for unchanged libs.
         * Combined with React.lazy() route splitting, this significantly
         * reduces the JS that must be parsed on initial page load.
         */
        manualChunks: (id: string) => {
          // React core runtime — rarely changes
          if (
            id.includes("node_modules/react/") ||
            id.includes("node_modules/react-dom/")
          ) {
            return "react-vendor";
          }
          // React Router — rarely changes
          if (id.includes("node_modules/react-router")) {
            return "router-vendor";
          }
          // All Radix UI primitives — large, rarely changes
          if (id.includes("node_modules/@radix-ui")) {
            return "radix-vendor";
          }
          // Everything else in node_modules
          if (id.includes("node_modules")) {
            return "vendor";
          }
          // App code falls through to per-route chunks (handled by React.lazy)
        },
      },
    },
  },
});
