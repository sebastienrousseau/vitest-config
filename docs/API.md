# `@sebastienrousseau/vitest-config` API Specification

Comprehensive schema, property definitions, and exported options reference for `@sebastienrousseau/vitest-config`.

---

## Description

Shareable Vitest configuration preset enforcing globals, node environments, and 100% coverage gates.

---

## Programmatic Entrypoints

| Specifier | Module Type | Target Runtime | Path |
| :--- | :--- | :--- | :--- |
| `.` (default) | Dual (CJS/ESM) | Node.js >= 18 | `index.cjs` / `index.mjs` |
| `@sebastienrousseau/vitest-config` | Dual (CJS/ESM) | Node.js >= 18 | `index.cjs` / `index.mjs` |
| `index.d.ts` | TypeScript | TypeScript >= 5.0 | Type declarations |

---

## Feature & Property Reference

### 1. Test Globals

- **Description**: Activates global test primitives (describe, it, expect) (`globals: true`)
- **Scope**: Production & Development
- **Status**: Stable & Active

### 2. Environment Preset

- **Description**: Configures headless Node execution environment (`environment: 'node'`)
- **Scope**: Production & Development
- **Status**: Stable & Active

### 3. Test Discovery

- **Description**: Discovers tests in src, test, and **tests** directories
- **Scope**: Production & Development
- **Status**: Stable & Active

### 4. Strict 100% Coverage Thresholds

- **Description**: Mandates 100% lines, functions, branches, and statements
- **Scope**: Production & Development
- **Status**: Stable & Active

