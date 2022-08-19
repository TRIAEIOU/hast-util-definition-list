import { all } from 'hast-util-to-mdast';
const definitionListHastToMdast = {
    dl: function (h, node) { return h(node, 'defList', all(h, node)); },
    dt: function (h, node) { return h(node, 'defListTerm', all(h, node)); },
    dd: function (h, node) { return h(node, 'defListDescription', all(h, node)); }
};
export { definitionListHastToMdast };
