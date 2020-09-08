import { Link } from "gatsby"
import React from "react"
import Head from "../components/Head.jsx"
import Layout from "../components/Layout.jsx"
import aboutMeStyle from "../../static/scss/aboutMe.module.scss"

const AboutMe = () => {
  return (
    <Layout>
      <Head title='About me' />
      <h1>About Me:</h1>
      <br />
      <p>
        My name is Omri Levy, I am 24 years old from Tel-Aviv
        I've spent the last year and a half learning
        how to program on my own.
      </p>
      <br />
      <Link className={aboutMeStyle.link} to={"/contactMe"}>Contact Me</Link>
    </Layout>
  )
}

export default AboutMe
