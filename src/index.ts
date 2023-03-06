import type {State, Element} from 'hast-util-to-mdast/lib/types'

const definitionListHastToMdast = {
    dl: function (state: State, node: Element) {return handler(state, node, 'defList')},
    dt: function (state: State, node: Element) {return handler(state, node, 'defListTerm')},
    dd: function (state: State, node: Element) {return handler(state, node, 'defListDescription')}
}

function handler(state: State, node: Element, mdast: string) {
    const children = state.all(node)
    if (children.length > 0) {
      const result = {type: mdast, children} as any
      state.patch(node, result)
      return result
    }
}

export {definitionListHastToMdast}