/**
 * Modern Vitest CommonJS Configuration
 */
module.exports = {
  test: {
    globals: true,
    environment: "node",
    include: ["test/**/*.{test,spec}.{js,ts,mjs,cjs}", "__tests__/**/*.{test,spec}.{js,ts,mjs,cjs}"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      thresholds: {
        lines: 100,
        functions: 100,
        branches: 100,
        statements: 100,
      },
    },
  },
};
