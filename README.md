# hapi-cors-headers

[![Greenkeeper badge](https://badges.greenkeeper.io/gr2m/hapi-cors-headers.svg)](https://greenkeeper.io/)

> hapi extension to enable CORS

[![NPM version](https://badge.fury.io/js/hapi-cors-headers.svg)](https://www.npmjs.com/package/hapi-cors-headers)
[![Build Status](https://travis-ci.org/gr2m/hapi-cors-headers.svg?branch=master)](https://travis-ci.org/gr2m/hapi-cors-headers)
[![Coverage Status](https://coveralls.io/repos/gr2m/hapi-cors-headers/badge.svg?branch=master)](https://coveralls.io/r/gr2m/hapi-cors-headers?branch=master)
[![Dependency Status](https://david-dm.org/gr2m/hapi-cors-headers.svg)](https://david-dm.org/gr2m/hapi-cors-headers)

Enables [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS) on
all server response, securely from all origins, with `access-control-allow-credentials: true`.

## Example

```js
var Hapi = require('hapi')
var corsHeaders = require('hapi-cors-headers')

var server = new Hapi.Server()
// setup routes etc ...

server.ext('onPreResponse', corsHeaders)
```

## Install

```bash
npm install --save hapi-cors-headers
```

## Test

[![devDependency Status](https://david-dm.org/gr2m/hapi-cors-headers/dev-status.svg)](https://david-dm.org/gr2m/hapi-cors-headers#info=devDependencies)

```bash
npm test
```
