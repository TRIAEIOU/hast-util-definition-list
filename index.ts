import {all} from 'hast-util-to-mdast';
import type {H} from 'hast-util-to-mdast';
import type {Node} from 'hast-util-to-mdast/lib';

const definitionListHastToMdast = {
    dl: function (h: H, node: Node) { return h(node, 'defList', all(h, node)); },
    dt: function (h: H, node: Node) { return h(node, 'defListTerm', all(h, node)); },
    dd: function (h: H, node: Node) { return h(node, 'defListDescription', all(h, node)); }
};

export {definitionListHastToMdast};