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
      <a href='https://www.freepik.com/vectors/background'>
        Background vector created by pikisuperstar - www.freepik.com
      </a>
    </footer>
  )
}

export default Footer
