#!/usr/bin/env node
'use strict'
/* eslint-disable no-console,no-empty */
const qw = require('@perl/qw')
const initIt = require('.')

initIt(process.cwd(), `${__dirname}/template`, {
  github: 'iarna',
  namespaces: qw`iarna perl fanfic`
})
console.log('* project initialized')
