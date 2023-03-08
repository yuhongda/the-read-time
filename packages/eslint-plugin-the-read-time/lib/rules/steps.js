/**
 * @fileoverview @silverage/the-read-time rule
 * @author yuhongda
 */
'use strict'

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const messages = {
  invalidSteps: 'Steps needs to be descending order by minutes'
}

/**
 * @type {import('eslint').Rule.RuleModule}
 */
module.exports = {
  meta: {
    type: 'suggestion', // `problem`, `suggestion`, or `layout`
    docs: {
      description: '`steps` needs to be descending order by minutes',
      category: 'Fill me in',
      recommended: false,
      url: `https://github.com/yuhongda/eslint-plugin-the-read-time/tree/main/docs/rules/steps.md` // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [] // Add a schema if the rule has options
  },

  create(context) {
    return {
      JSXElement: (node) => {
        if (node.openingElement.name.name === 'TheReadTime') {
          const stepsProp = node.openingElement.attributes.find(
            (item) => item.name.name === 'steps'
          )
          if (stepsProp) {
            const minutes = stepsProp.value.expression.elements.map((item) => {
              const { properties } = item
              if (properties) {
                const minutesProp = properties.find((p) => p.key.name === 'minutes')
                if (minutesProp) {
                  return minutesProp.value.value || 0
                }
              }
              return 0
            })

            const originValue = minutes.join('')
            const sortedValue = minutes.sort((a, b) => b - a).join('')
            if (originValue !== sortedValue) {
              context.report({
                node,
                message: messages.invalidSteps
              })
            }
          }
        }
      }
    }
  }
}
