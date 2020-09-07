import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Head from "../components/Head.jsx"
import Layout from "../components/Layout.jsx"
import blogStyle from "../../static/scss/blog.module.scss"

const Blog = () => {
  const data = useStaticQuery(graphql`
      query {
          allContentfulBlogPost(
              sort: {
                  fields: publishedDate,
                  order: DESC
              }
          ) {
              edges {
                  node {
                      title
                      slug
                      publishedDate(formatString: "MMMM Do, YYYY")
                  }
              }
          }
      }
  `)

  return (
    <Layout>
      <Head title='Blog' />
      <h1>Blog</h1>
      <ol className={blogStyle.posts}>
        {data.allContentfulBlogPost.edges.map(post => (
          <li className={blogStyle.post}>
            <Link to={`/blog/${post.node.slug}`}>
              <h2>{post.node.title}</h2>
              <p>{post.node.publishedDate}</p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default Blog
