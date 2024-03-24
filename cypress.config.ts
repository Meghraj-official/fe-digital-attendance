import { defineConfig } from "cypress"

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      console.log("setupNodeEvents", on, config)
      // implement node event listeners here
    },
  },
})
