const assert = require("assert");
const cjsConfig = require("../index.cjs");

async function runTests() {
  console.log("Testing @sebastienrousseau/vitest-config...");

  assert(cjsConfig && typeof cjsConfig === "object", "CJS config must be an object");
  assert.strictEqual(cjsConfig.test.globals, true);

  console.log("✅ vitest-config validation tests passed!");
}

runTests().catch((err) => {
  console.error("❌ Test failed:", err);
  process.exit(1);
});
