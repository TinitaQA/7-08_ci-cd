const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://qamid.tmweb.ru",
    retries: 0,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  projectId: "xz65ro",
  viewportWidth: 1000,
  viewportHeight: 660,
  pageLoadTimeout: 80000,
});
