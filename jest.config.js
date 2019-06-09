const merge = require('merge')
const tsJest = require('ts-jest/jest-preset')
const jestPuppeteer = require('jest-puppeteer/jest-preset')

module.exports = merge(tsJest, jestPuppeteer, {
  testMatch: ['**/__tests__/**/*.tsx']
})
