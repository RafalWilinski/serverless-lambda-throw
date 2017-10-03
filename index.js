'use strict';

const handle = (callback, options) => {
  process.on('unhandledException', (error) => {
    callback(null, {
      statusCode: (options && options.code) ? options.code : 400,
      body: JSON.stringify({
        error,
        extraData: options.extraData,
      })
    });
  });
}

module.exports = handle;
