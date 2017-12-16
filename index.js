const pkg = require('./package.json');

const register = (server, {
  maxAge = 60 * 10, // 10 minutes
}) => {
  server.ext({
    type: 'onPreResponse',
    method: (request, h) => {
      if (!request.headers.origin) {
        return h.continue;
      }

      // depending on whether we have a boom or not,
      // headers need to be set differently.
      const response = request.response.isBoom ? request.response.output : request.response;

      response.headers['access-control-allow-origin'] = request.headers.origin;
      response.headers['access-control-allow-credentials'] = 'true';
      if (request.method !== 'options') {
        return h.continue;
      }

      response.statusCode = 200;
      response.headers['access-control-expose-headers'] = 'content-type, content-length, etag';
      response.headers['access-control-max-age'] = maxAge;
      // dynamically set allowed headers & method
      if (request.headers['access-control-request-headers']) {
        response.headers['access-control-allow-headers'] = request.headers['access-control-request-headers'];
      }
      if (request.headers['access-control-request-method']) {
        response.headers['access-control-allow-methods'] = request.headers['access-control-request-method'];
      }

      return h.continue;
    },
  });
};

module.exports = { register, pkg };
