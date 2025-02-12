# Helmet Security Headers Library

Helps secure applications by setting HTTP response headers.
Inspired by [`helmet`](https://github.com/helmetjs/helmet) and [`http-helmet`](https://github.com/mcansh/http-helmet).

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

If you want to share the resource across origins, you can enable the resourceSharing option.

```ts
helmet(headers, { resourceSharing: true });
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
import { generalSecurity } from "@nichtsam/helmet/rules/general/index";
import { contentSecurity } from "@nichtsam/helmet/rules/content/index";
import { resourceSharingSecurity } from "@nichtsam/helmet/rules/resourceSharing/index";

const headers = new Headers();
// on root level
generalSecurity(headers);
// after the content-type is set
contentSecurity(headers);
// if you want to share across origins
resourceSharingSecurity(headers, { strategy: "cross-origin" });
```

> [!NOTE]  
> The `generalSecurity` function includes `resourceSharingSecurity(headers, { strategy: "same-origin" })` by default.
> So you only need to call `resourceSharingSecurity` if you want to share resources across origins or customize the strategy.
