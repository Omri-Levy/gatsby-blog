import React from "react"
import { graphql } from "gatsby"
import Head from "../components/Head.jsx"
import Layout from "../components/Layout.jsx"
import { documentToReactComponents }
  from "@contentful/rich-text-react-renderer"

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost (slug: {eq: $slug}) {
            title
            publishedDate(formatString: "MMMM Do, YYYY")
            body {
                json
            }
        }
    }
`

const Blog = (props) => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const url = node.data.target.fields.file["en-US"].url
        const alt = node.data.target.fields.title["en-US"]
        return <img src={url} alt={alt} />
      }
    }
  }

  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      {documentToReactComponents(props.data.contentfulBlogPost.body.json,
        options)}
    </Layout>
  )
}

export default Blog
