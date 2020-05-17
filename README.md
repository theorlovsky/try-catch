# try-catch

[![Travis Build Status](https://travis-ci.org/theorlovsky/try-catch.svg?branch=master)](https://travis-ci.org/theorlovsky/try-catch)
[![Coverage Status](https://coveralls.io/repos/github/theorlovsky/try-catch/badge.svg?branch=master)](https://coveralls.io/github/theorlovsky/try-catch?branch=master)
[![Dependencies](https://david-dm.org/theorlovsky/try-catch.svg)](https://david-dm.org/theorlovsky/try-catch#info=dependencies)
[![Known Vulnerabilities](https://snyk.io/test/github/theorlovsky/try-catch/badge.svg)](https://snyk.io/test/github/theorlovsky/try-catch)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

## About

Use try-catch statements in a more convenient way with this package.

## Installation

```shell script
yarn add @orlovsky/try-catch
```
or
```shell script
npm i @orlovsky/try-catch
```

## Usage

```typescript
import { tryCatch } from '@orlovsky/try-catch';

// ...

const [error, result] = tryCatch(() => someFnThatMayThrow());

if (error) {
  // do something with error
  return;
}

// do something with result
```

### Additional info

Inspired by [try-catch][inspired-by].\
Created with [typescript-library-starter][typescript-library-starter].

[typescript-library-starter]: https://github.com/alexjoverm/typescript-library-starter
[inspired-by]: https://github.com/coderaiser/try-catch
