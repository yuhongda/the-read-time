import type { ReactNode } from 'react'
import React from 'react'

const extractTextFromReactNode = (node: ReactNode): string => {
  if (node === null || node === undefined) {
    return ''
  }

  if (typeof node === 'string') {
    return node
  }

  if (typeof node === 'number') {
    return `${node}`
  }

  if (typeof node === 'boolean') {
    return ''
  }

  if (Array.isArray(node)) {
    return node.map((n) => extractTextFromReactNode(n)).join('')
  }

  if (React.isValidElement(node) && node.hasOwnProperty('props')) {
    if (node.props.hasOwnProperty('children')) {
      return extractTextFromReactNode(node.props.children)
    }
    if (
      node.props.hasOwnProperty('dangerouslySetInnerHTML') &&
      node.props.dangerouslySetInnerHTML.hasOwnProperty('__html')
    ) {
      return extractTextFromReactNode(node.props.dangerouslySetInnerHTML.__html)
    }
  }

  return ''
}

export default extractTextFromReactNode
