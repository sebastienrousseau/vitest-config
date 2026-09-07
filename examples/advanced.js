/**
 * Advanced custom Vitest configuration
 */
const base = require("../index.cjs");
const custom = {
  ...base,
  test: { ...base.test, environment: "jsdom" }
};
console.log("Custom browser environment:", custom.test.environment);
