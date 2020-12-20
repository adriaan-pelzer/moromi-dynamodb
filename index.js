const aws = require('aws-sdk');

module.exports = ({
  region = 'us-east-1', method, params
}) => Promise.resolve(new aws.DynamoDB({ region }))
  .then(dynamo => dynamo[method](params).promise());
