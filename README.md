# Serverless Lambda Error

[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)

Normally, throwing unhandled `new Error` inside AWS Lambda environment tied to API Gateway results in `500 - Internal Server Error`.

This module solves that problem by wrapping your `Error` into API Gateway compatible response format.

## Installation

```bash
npm install serverless-lambda-throw --save
```

## Usage

```js
const LambdaError = require('serverless-lambda-throw');

module.exports.hello = (event, context, callback) => {
  LambdaError(callback); // registers error handler

  throw new Error('Uncaught error thrown!'); // Responds with 400 and wrapped error into API Gateway compatible format
};
```

