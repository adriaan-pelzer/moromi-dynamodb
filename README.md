# moromi-dynamodb
aws dynamodb plugin for moromi

## Installation
```
  yarn add moromi-dynamodb
```

## Usage

### params:
* method: _the sdk method name (as per [AWS SDK for node.js docs](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html))_
* params: _the sdk method parameters (as per [AWS SDK for node.js docs](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html))_

## Example
To update a numerical attribute called `active_time` in an item identified by primary key `email` in a table called `users`:
```js
{
  name: 'update user active_time',
  type: require('moromi-dynamodb'),
  params: {
    method: 'updateItem',
    params: {
      ExpressionAttributeNames: { '#AT': 'active_time' },
      ExpressionAttributeValues: { ':at': `${new Date().valueOf()}` },
      Key: { email: { S: 'tester@example.com' } },
      ReturnValues: 'NONE',
      TableName: 'users',
      UpdateExpression: 'SET #AT = :at'
    }
  }
}
```
