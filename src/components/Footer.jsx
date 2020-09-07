import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import footerStyle from "../../static/scss/footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
      query {
          site {
              siteMetadata {
                  author
              }
          }
      }
  `)

  return (
    <footer className={footerStyle.footer}>
      <p>Created by {data.site.siteMetadata.author}, &copy; 2020</p>
    </footer>
  )
}

export default Footer
