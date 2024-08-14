const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'czyox2',
  e2e: {
    projectId: "czyox2",
    setupNodeEvents(on, config) {
      
    },
  },
});
