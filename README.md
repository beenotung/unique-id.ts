# unique-id.ts

TypeScript library for generating unique IDs using customizable character sets.

[![npm Package Version](https://img.shields.io/npm/v/unique-id.ts)](https://www.npmjs.com/package/unique-id.ts)
[![Minified Package Size](https://img.shields.io/bundlephobia/min/unique-id.ts)](https://bundlephobia.com/package/unique-id.ts)
[![Minified and Gzipped Package Size](https://img.shields.io/bundlephobia/minzip/unique-id.ts)](https://bundlephobia.com/package/unique-id.ts)

## Features

- TypeScript support
- Isomorphic package: works in Node.js and browsers
- 6 built-in charsets: base10, base26, base32, base36, base58, base64
- Collision-free ID generation with automatic length increase

## Installation

```bash
npm install unique-id.ts
```

You can also install `unique-id.ts` with [pnpm](https://pnpm.io/), [yarn](https://yarnpkg.com/), or [slnpm](https://github.com/beenotung/slnpm)

## Usage Example

```typescript
import { createUniqueSequence, charset_values } from 'unique-id.ts'

const id = createUniqueSequence({
  charset: charset_values.base58_bitcoin,
  min_length: 8,
})

console.log(id.next()) // e.g. "k3Xa9m2Q"
console.log(id.next()) // e.g. "p7BmN4rx"
```

## Built-in Charsets

| Name                | Charset                         |
| ------------------- | ------------------------------- |
| base10_digits       | 0-9                             |
| base26_letters      | A-Z                             |
| base32_crockford    | 0-9, A-Z (exclude I,L,O,U)      |
| base36_alphanumeric | 0-9, A-Z                        |
| base58_bitcoin      | 0-9, A-Z, a-z (exclude 0,O,I,l) |
| base64_url          | 0-9, A-Z, a-z + `-_`            |

## API

```typescript
export let charset_values: {
  base10_digits: string
  base26_letters: string
  base32_crockford: string
  base36_alphanumeric: string
  base58_bitcoin: string
  base64_url: string
}

export function createUniqueSequence(options: {
  charset: string // character set to use for ID generation
  min_length: number // minimum length of generated IDs
}): {
  next: () => string // returns a unique ID string
  charset: string // the charset being used
  min_length: number // current minimum length
  used_set: Set<string> // set of all generated IDs
}
```
