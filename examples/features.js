// SPDX-FileCopyrightText: 2026 Sebastien Rousseau <sebastian.rousseau@gmail.com>
// SPDX-License-Identifier: Apache-2.0 OR MIT

/**
 * 100% Feature Showcase for @sebastienrousseau/vitest-config
 */
const config = require("../index.cjs");
const assert = require("assert");

console.log("=== 100% Feature Showcase: @sebastienrousseau/vitest-config ===");
assert(config.test && typeof config.test === "object");
assert.strictEqual(config.test.globals, true);
assert.strictEqual(config.test.environment, "node");
assert.strictEqual(config.test.coverage.thresholds.lines, 100);
assert.strictEqual(config.test.coverage.thresholds.branches, 100);
assert.strictEqual(config.test.coverage.thresholds.functions, 100);
assert.strictEqual(config.test.coverage.thresholds.statements, 100);

console.log("  ✓ Globals enabled: true");
console.log("  ✓ Environment: node");
console.log("  ✓ Coverage thresholds: 100% across all metrics");
console.log("✅ 100% of vitest-config settings and features validated.");
