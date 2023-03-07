/**
 * @fileoverview eslint plugin for @silverage/the-read-time
 * @author yuhongda
 */
'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

// const requireIndex = require('requireindex')

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports = {
  rules: {
    steps: require('./rules/steps.js')
  }
}
