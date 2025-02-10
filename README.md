# Helmet Security Headers Library

Helps to secure apps by setting HTTP response headers.
Inspired by [`helmet`](https://github.com/helmetjs/helmet) and [`http-helmet`](https://github.com/mcansh/http-helmet)

## Overview

This package provides a flexible and modular way for managing security headers in a structured way.

- **General security headers**
- **HTML-specific headers** (e.g., `Content-Security-Policy`, `X-Download-Options`)
- **CORS-related configurations**

## Features

- Returns security headers with sensible defaults (inspired by Express Helmet)
- **HTML-specific options** are only applied when `html: true` is set
- **Cross-Origin-Resource-Policy** defaults to `'same-origin'`, but switches to `'cross-origin'` if `cors: true`

## Installation

```sh
npm install @nichtsam/helmet
```

## Usage

```ts
import helmet from "@nichtsam/helmet";

const headers = new Headers();

// general
helmet(headers);
// with html
helmet(headers, { html: true });
// non html with cors
helmet(headers, { cors: true });
// customize rules
helmet(headers, {
  options: {
    crossOriginEmbedderPolicy: false,
    contentSecurityPolicy: {},
  },
});
```
