/**
 * @fileoverview @silverage/the-read-time rule
 * @author yuhongda
 */
'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../lib/rules/steps'),
  RuleTester = require('eslint').RuleTester

const parserOptions = {
  ecmaVersion: 2018,
  sourceType: 'module',
  ecmaFeatures: {
    jsx: true
  }
}

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({ parserOptions })
ruleTester.run('steps', rule, {
  valid: [
    {
      code: "<TheReadTime steps={[{ icon: '🍱', minutes: 15 },{ icon: '🍔', minutes: 5 },{ icon: '🍣', minutes: 1 }]} />"
    }
  ],

  invalid: [
    {
      code: "<TheReadTime steps={[{ icon: '🍣', minutes: 1 },{ icon: '🍔', minutes: 5 },{ icon: '🍱', minutes: 15 }]} />",
      errors: [{ message: 'Steps needs to be descending order by minutes' }]
    }
  ]
})
