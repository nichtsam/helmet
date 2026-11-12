<a href="https://www.npmjs.com/package/@nichtsam/helmet">
  <img alt="NPM Downloads" src="https://img.shields.io/npm/dm/%40nichtsam%2Fhelmet">
</a>

# Helmet Security Headers Library

Helps secure applications by setting HTTP response headers.
Inspired by [`helmet`](https://github.com/helmetjs/helmet) and [`http-helmet`](https://github.com/mcansh/http-helmet).

**Traditional Helmet applies every header globally.  
This library applies headers only where they make sense.**

## Why?

[`helmet`](https://github.com/helmetjs/helmet) applies security headers globally without considering the specific content type of each response. While this approach works for many cases, it can lead to unnecessary or misapplied headers. For example, Content Security Policy (CSP) should be specific to the response’s content type, and `X-Download-Options` only matters for document responses, whereas headers like `X-Content-Type-Options` and `Strict-Transport-Security` are universally applicable.

To improve clarity and control, I categorized security headers into three groups:
1. General – Applies to all resources, ensuring broad security coverage.
2. Content – Applies based on the response’s content type.
3. Resource Sharing – Related to cross-origin policies.

This approach ensures that security headers are applied in a structured manner, improving maintainability and reducing unnecessary overhead. Additionally, this package is designed to work seamlessly with both the Web Fetch API’s `Headers` and `http.ServerResponse`, making it more flexible across different environments.

## Overview

This package provides a flexible and modular way for managing security headers in a structured manner.

- Provides security headers with sensible defaults (inspired by Express Helmet).
- Content-specific options available as needed.
- Resource Sharing Security Headers.

## Installation

```sh
npm install @nichtsam/helmet
```

## Usage

This is the most basic usage, which applies security headers for general purpose, best practices for protecting any type of resource.

```ts
import { helmet } from "@nichtsam/helmet";
const headers = new Headers();
helmet(headers);
```

There are options to enable more detailed security headers, such as for html webpage contents.

```ts
helmet(headers, {
  content: { contentSecurityPolicy: {} },
});
```

Resources are only shared within the same origin by default. To share them across origins, set the resourceSharing strategy.

```ts
helmet(headers, { resourceSharing: { strategy: "cross-origin" } });
```

> [!IMPORTANT]  
> This only sets the headers for enhanced security.
> You are responsible for setting the correct CORS headers.
> https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#the_http_request_headers

### For `node-http`

The package provides a simple wrapper to make it smoother to use on `http.ServerResponse`.
For example in an express app:

```ts
import { helmet } from "@nichtsam/helmet/node-http";

const app = express();
app.use((req, res, next) => {
  helmet(res);
  next();
});
```

### Granular Interface

The main `helmet` function integrates all the security rules, you can find them all individually under `@nichtsam/helmet/rules`.
They're categorized under `general`, `content` and `resourceSharing`, just like the options in the integrated `helmet` function.
This allows for a layered application approach to better suit individual routes.

For example:

```ts
import { generalSecurity } from "@nichtsam/helmet/general";
import { contentSecurity } from "@nichtsam/helmet/content";
import { resourceSharingSecurity } from "@nichtsam/helmet/resourceSharing";

const headers = new Headers();
// on root level
generalSecurity(headers);
// after the content-type is set
contentSecurity(headers);
// "same-origin" by default, pass a strategy to share across origins
resourceSharingSecurity(headers);
```
