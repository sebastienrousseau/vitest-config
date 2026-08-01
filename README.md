<!-- SPDX-License-Identifier: ISC -->

<p align="center">
  <img src="./vitest-config.svg" alt="vitest-config logo" width="128" />
</p>

<h1 align="center">@sebastienrousseau/vitest-config</h1>

<p align="center">
  Shareable Vitest testing configuration adhering to modern ESM-first 2026 standards.
</p>

<p align="center">
  <a href="https://github.com/sebastienrousseau/vitest-config/actions"><img src="https://img.shields.io/github/actions/workflow/status/sebastienrousseau/vitest-config/ci.yml?branch=main&style=for-the-badge&logo=github" alt="Build Status" /></a>
  <a href="https://www.npmjs.com/package/@sebastienrousseau/vitest-config"><img src="https://img.shields.io/npm/v/@sebastienrousseau%2Fvitest-config?style=for-the-badge&color=fc8d62&logo=npm" alt="npm package" /></a>
  <a href="https://scorecard.dev/viewer/?uri=github.com/sebastienrousseau/vitest-config"><img src="https://img.shields.io/ossf-scorecard/github.com/sebastienrousseau/vitest-config?style=for-the-badge&label=OpenSSF%20Scorecard&logo=openssf" alt="OpenSSF Scorecard" /></a>
  <a href="https://github.com/sebastienrousseau/vitest-config/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-ISC-blue?style=for-the-badge" alt="License" /></a>
</p>

---

## Contents

**Getting Started**
- [Installation](#installation) — Package manager commands
- [Quick Start](#quick-start) — Configure in under a minute

**Features & Rule Showcase**
- [ESM Test Environment & V8 Coverage](#esm-test-environment-v8-coverage) — Code comparison
- [Module Compatibility](#module-compatibility) — Dual CJS/ESM & TypeScript declarations

**Governance & Quality**
- [Development & Testing](#development--testing) — Local validation
- [Security & Compliance](#security--compliance) — SLSA attestation & vulnerability policy
- [Author & License](#author--license) — Open source license

---

## Installation

Install using your preferred package manager:

```bash
# npm
npm install --save-dev @sebastienrousseau/vitest-config

# pnpm
pnpm add -D @sebastienrousseau/vitest-config

# yarn
yarn add -D @sebastienrousseau/vitest-config

# bun
bun add -d @sebastienrousseau/vitest-config
```

---

## Quick Start

### In `package.json`

```json
{
  "vitest": "@sebastienrousseau/vitest-config"
}
```

### In CommonJS Configuration

```js
module.exports = require("@sebastienrousseau/vitest-config");
```

### In ES Module Configuration

```js
import config from "@sebastienrousseau/vitest-config";
export default config;
```

---

## ESM Test Environment & V8 Coverage

High-performance Vitest configuration with V8 coverage provider and 100% threshold enforcement.

### Before (Unstandardized)

```javascript
// Custom vitest setup
export default { test: {} };
```

### After (@sebastienrousseau/vitest-config Enforced)

```javascript
import config from "@sebastienrousseau/vitest-config";
export default config;
```

---

## Module Compatibility

This package exports dual module entrypoints via `package.json` `exports`:

```json
"exports": {
  ".": {
    "types": "./index.d.ts",
    "import": "./index.mjs",
    "require": "./index.cjs"
  }
}
```

Full TypeScript definitions (`index.d.ts`) are included for rich IDE autocomplete and inline JSDoc tooltips.

---

## Development & Testing

```bash
# Clone repository
git clone https://github.com/sebastienrousseau/vitest-config.git
cd vitest-config

# Run validation tests
npm test
```

---

## Security & Compliance

- **SLSA Level 3 Provenance**: Builds are cryptographically signed with keyless provenance via GitHub Actions.
- **Automated Security Audit**: Monitored continuously with CodeQL and Dependabot.
- **Commit Signatures**: All commits are SSH/GPG signed.
- See [SECURITY.md](SECURITY.md) for vulnerability reporting procedures.

---

## Author & License

Developed and maintained by **[Sebastien Rousseau](https://github.com/sebastienrousseau)**.

Released under the [ISC License](LICENSE).
