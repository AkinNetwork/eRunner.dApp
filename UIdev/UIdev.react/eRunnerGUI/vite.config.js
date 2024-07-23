import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Bind to all network interfaces
    port: 3000, // Specify the port, adjust if needed
    strictPort: true, // Prevent Vite from using a different port if the specified port is already in use
    // Optionally, you can add other configurations here
  },
});
