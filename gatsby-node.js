const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/PostTemplate.js`)
  const psPostTemplate = path.resolve(`src/templates/probSolvingTemplate.js`)
  const dlPostTemplate = path.resolve(`src/templates/devlogTemplate.js`)
  const stockPostTemplate = path.resolve(`src/templates/stockTemplate.js`)
  const uiuxTemplate = path.resolve(`src/templates/uiuxTemplate.js`)

  const { data: postData, errors: postErrors } = await graphql(`
    query LatestPostQuery {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { fileAbsolutePath: { regex: "/(dailypost)/" } }
      ) {
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

  const { data: psData, errors: psErrors } = await graphql(`
    query probSolvingPostQuery {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { fileAbsolutePath: { regex: "/(probsolving)/" } }
      ) {
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

  const { data: devlogData, errors: devlogErrors } = await graphql(`
    query devlogPostQuery {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { fileAbsolutePath: { regex: "/(devlog)/" } }
      ) {
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

  const { data: stockData, errors: stockErrors } = await graphql(`
    query stockPostQuery {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { fileAbsolutePath: { regex: "/(stock)/" } }
      ) {
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

  const { data: uiuxData, errors: uiuxErrors } = await graphql(`
    query uiuxPostQuery {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { fileAbsolutePath: { regex: "/(uiux)/" } }
      ) {
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

  if (postErrors) {
    throw postErrors
  }

  if (psErrors) {
    throw psErrors
  }

  if (devlogErrors) {
    throw devlogErrors
  }

  if (stockErrors) {
    throw stockErrors
  }

  if (uiuxErrors) {
    throw uiuxErrors
  }

  postData.allMarkdownRemark.edges.forEach(({ node }) => {
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

  psData.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `${node.frontmatter.path}`,
      context: {
        html: node.html,
        title: node.frontmatter.title,
        date: node.frontmatter.date,
      },
      component: psPostTemplate,
    })
  })

  devlogData.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `${node.frontmatter.path}`,
      context: {
        html: node.html,
        title: node.frontmatter.title,
        date: node.frontmatter.date,
      },
      component: dlPostTemplate,
    })
  })

  stockData.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `${node.frontmatter.path}`,
      context: {
        html: node.html,
        title: node.frontmatter.title,
        date: node.frontmatter.date,
      },
      component: stockPostTemplate,
    })
  })

  uiuxData.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `${node.frontmatter.path}`,
      context: {
        html: node.html,
        title: node.frontmatter.title,
        date: node.frontmatter.date,
      },
      component: uiuxTemplate,
    })
  })
}
