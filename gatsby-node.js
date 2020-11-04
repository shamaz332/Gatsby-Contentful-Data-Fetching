//we will create dynamic page here
const path = require("path")

exports.createPages = async (graphql, actions) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        allContentfulService {
          nodes {
            title
          }
        }
      }
    `
  )
  console.log(result)

  result.date.allContentfulService.nodes.forEach(data => {
    createPage({
      path: `/products/${(data, title)}`,
      component: path.resolve("./src/templates/helo.js"),
      context: {
        data: data,
      },
    })
  })
}
