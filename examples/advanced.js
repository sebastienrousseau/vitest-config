// SPDX-FileCopyrightText: 2026 Sebastien Rousseau <sebastian.rousseau@gmail.com>
// SPDX-License-Identifier: Apache-2.0 OR MIT

/**
 * Advanced custom Vitest configuration
 */
const base = require("../index.cjs");
const custom = {
  ...base,
  test: { ...base.test, environment: "jsdom" },
};
console.log("Custom browser environment:", custom.test.environment);
