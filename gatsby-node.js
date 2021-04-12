/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

exports.onCreateNode = ({ node, getNode, actions }) => {

    const { createNodeField } = actions

    if (node.internal.type !== 'MarkdownRemark') {
        return;
    }

    const fileNode = getNode(node.parent);

    createNodeField({
        node,
        name: 'sourceName',
        value: fileNode.sourceInstanceName,
    });
};