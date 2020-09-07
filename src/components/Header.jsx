import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"
import headerStyle from "../../static/scss/header.module.scss"

const Header = () => {
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
    <header className={headerStyle.header}>
      <h1>
        <Link to={"/"} className={headerStyle.title}>
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={headerStyle.navList}>
          <li className={headerStyle.navItem}>
            <Link className={headerStyle.navLink} to={"/"}
                  activeClassName={headerStyle.activeNavLink}>
              Home
            </Link>
          </li>
          <li className={headerStyle.navItem}>
            <Link className={headerStyle.navLink} to={"/blog"}
                  activeClassName={headerStyle.activeNavLink}>
              Blog
            </Link>
          </li>
          <li className={headerStyle.navItem}>
            <Link className={headerStyle.navLink} to={"/aboutMe"}
                  activeClassName={headerStyle.activeNavLink}>
              About Me
            </Link>
          </li>
          <li className={headerStyle.navItem}>
            <Link className={headerStyle.navLink} to={"/contactMe"}
                  activeClassName={headerStyle.activeNavLink}>
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
