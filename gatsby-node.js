const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/PostTemplate.js`)
  const { data, errors } = await graphql(`
    query LatestPostQuery {
      allMarkdownRemark(sort: { fields: id, order: DESC }) {
        edges {
          node {
            excerpt(pruneLength: 200, truncate: true)
            id
            frontmatter {
              title
              path
              date
            }
            html
          }
        }
      }
    }
  `)

  if (errors) {
    throw errors
  }

  data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `${node.frontmatter.path}`,
      context: {
        html: node.html,
        title: node.frontmatter.title,
        date: node.frontmatter.date,
      },
      component: blogPostTemplate,
    })
  })
}

/*
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}
*/
