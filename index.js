const definitionListHastToMdast = {
    dl: function (state, node) { return handler(state, node, 'defList'); },
    dt: function (state, node) { return handler(state, node, 'defListTerm'); },
    dd: function (state, node) { return handler(state, node, 'defListDescription'); }
};
function handler(state, node, mdast) {
    const children = state.all(node);
    if (children.length > 0) {
        const result = { type: mdast, children };
        state.patch(node, result);
        return result;
    }
}
export { definitionListHastToMdast };
