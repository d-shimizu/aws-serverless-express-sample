#!/usr/bin/env node
'use strict'

const modifyFiles = require('./utils').modifyFiles
const packageJson = require('../package.json')
const config = packageJson.config

modifyFiles(['./simple-proxy-api.yaml', './package.json', './cloudformation.yaml'], [{
  regexp: new RegExp(config.accountId, 'g'),
  replacement: '208991981080'
}, {
  regexp: new RegExp(config.region, 'g'),
  replacement: 'ap-northeast-1'
}, {
  regexp: new RegExp(config.s3BucketName, 'g'),
  replacement: 'ase-dev-208991981080'
}, {
  regexp: new RegExp(config.functionName, 'g'),
  replacement: 'AwsServerlessExpressFunctionDev'
}, {
  regexp: new RegExp(config.cloudFormationStackName, 'g'),
  replacement: 'AwsServerlessExpressStackDev'
}, {
  regexp: new RegExp(config.apiGatewayName, 'g'),
  replacement: 'AwsServerlessExpressApiDev'
}
])

