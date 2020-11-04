import React from "react"
import { graphql } from "gatsby"

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export default ({ data }) => {
  return (
    <div>
      <div>{data.allContentfulBlogPost.edges[0].node.title}</div>
      <div>{documentToReactComponents(data.allContentfulBlogPost.edges[0].node.content.content.json)}</div>
    </div>
  )
}

export const query = graphql`
  query {
    allContentfulBlogPost {
      edges {
        node {
          title
          publicationDate
          content {
            content
          }
        }
      }
    }
  }
`
