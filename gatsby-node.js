const { createRemoteFileNode } = require("gatsby-source-filesystem");

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type DevArticles implements Node {
      id: ID!
      article: Article
      featuredImg: File @link(from: "featuredImg___NODE")
    }

    type Article {
      url: String
      title: String
      tags: [String]
      description: String
      cover_image: String
      social_image: String
      published_at(
        difference: String
        formatString: String
        fromNow: Boolean
        locale: String
      ): Date
      positive_reactions_count: Int
    }
  `);
};

exports.onCreateNode = async ({
  node,
  actions: { createNode },
  store,
  cache,
  createNodeId,
}) => {
  if (
    node.internal.type === "DevArticles" &&
    (node.article.cover_image !== null || node.article.social_image !== null)
  ) {
    let fileNode = await createRemoteFileNode({
      url: node.article.cover_image || node.article.social_image,
      parentNodeId: node.id,
      createNode,
      createNodeId,
      cache,
      store,
    });

    if (fileNode) {
      node.featuredImg___NODE = fileNode.id;
    }
  }
};
