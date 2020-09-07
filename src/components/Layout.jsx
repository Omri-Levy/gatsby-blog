import React from "react"
import Footer from "./Footer.jsx"
import Header from "./Header.jsx"
import layoutStyle from "../../static/scss/layout.module.scss"

const Layout = ({ children }) => {
  return (
    <div className={layoutStyle.container}>
      <div className={layoutStyle.content}>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
