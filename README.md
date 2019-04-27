# hapi-cors-headers

> hapi extension to enable CORS

[![Build Status](https://travis-ci.org/gr2m/hapi-cors-headers.svg?branch=master)](https://travis-ci.org/gr2m/hapi-cors-headers)
[![Coverage Status](https://coveralls.io/repos/gr2m/hapi-cors-headers/badge.svg?branch=master)](https://coveralls.io/r/gr2m/hapi-cors-headers?branch=master)
[![Greenkeeper badge](https://badges.greenkeeper.io/gr2m/hapi-cors-headers.svg)](https://greenkeeper.io/)

Enables [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS) on
all server response, securely from all origins, with `access-control-allow-credentials: true`.

## Example

### Hapi v17
```js
const Hapi = require('hapi');
const corsHeaders = require('hapi-cors-headers');

const server = Hapi.Server({ port: 3000 });

const provision = async () => {
    await server.register(corsHeaders);
    ...
    await server.start();
};

provision();
```

### Hapi v16

```js
const Hapi = require('hapi');
const corsHeaders = require('hapi-cors-headers');

const server = new Hapi.Server();
// setup routes etc ...

server.ext('onPreResponse', corsHeaders);
```

## Install

### Hapi v17

```bash
npm install --save hapi-cors-headers@^2.x.x
```

### Hapi v16

```bash
npm install --save hapi-cors-headers@^1.x.x
```

## Test

[![devDependency Status](https://david-dm.org/gr2m/hapi-cors-headers/dev-status.svg)](https://david-dm.org/gr2m/hapi-cors-headers#info=devDependencies)

```bash
npm test
```

## License

[MIT](LICENSE.md)
