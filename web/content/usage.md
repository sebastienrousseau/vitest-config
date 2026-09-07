---
title: "Usage — @sebastienrousseau/vitest-config"
description: "How to use and configure @sebastienrousseau/vitest-config."
layout: "doc"
---

# Usage

`@sebastienrousseau/vitest-config` can be consumed across all standard module formats.

## CommonJS

```javascript
module.exports = require("@sebastienrousseau/vitest-config");
```

## ES Modules

```javascript
import config from "@sebastienrousseau/vitest-config";
export default config;
```

## In `package.json`

```json
{
  "vitest": "@sebastienrousseau/vitest-config"
}
```
