import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Head from "../components/Head.jsx"
import Layout from "../components/Layout.jsx"
import "../../static/scss/index.scss"

const Home = () => {
  const data = useStaticQuery(graphql`
      query {
          site {
              siteMetadata {
                  title
              }
          }
      }
  `)

  return (
    <Layout>
      <Head title={data.site.siteMetadata.title} />
      <h1>Hello from index</h1>
    </Layout>
  )
}

export default Home
