
import React from 'react'
import { graphql } from "gatsby"
export default ({data}) => {
  return (
    <div>
    <div>{data.allContentfulBlogPost.edges[0].node.title}</div>
    <div>{data.allContentfulBlogPost.edges[0].node.publicationDate}</div>
    <div>{data.allContentfulBlogPost.edges[0].node.content.content}</div>
  </div>
  )
}




export const query = graphql`

query{
  allContentfulBlogPost {
    edges {
      node {
        title
        publicationDate
        content{
          content
        }
      }
      
    }
  }
}





`