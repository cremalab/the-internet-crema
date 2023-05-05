import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173",
    video: false,
    viewportWidth: 1440,
    viewportHeight: 900,
    experimentalRunAllSpecs: true,
    requestTimeout: 30000,
    defaultCommandTimeout: 30000,
  },
});
