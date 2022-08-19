import type { H } from 'hast-util-to-mdast';
import type { Node } from 'hast-util-to-mdast/lib';
declare const definitionListHastToMdast: {
    dl: (h: H, node: Node) => import("mdast").Content;
    dt: (h: H, node: Node) => import("mdast").Content;
    dd: (h: H, node: Node) => import("mdast").Content;
};
export { definitionListHastToMdast };
