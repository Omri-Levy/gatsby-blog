import { Link } from "gatsby"
import React from "react"
import Head from "../components/Head.jsx"
import Layout from "../components/Layout.jsx"

const AboutMe = () => {
  return (
    <Layout>
      <Head title='About me' />
      <h1>About Me:</h1>
      <p>
        My name is #### ####, ## year old from ###-####
      </p>
      <p>
        I've spent the last year and a half learning -
      </p>
      <p>
        how to program on my own.
      </p>
      <Link to={"/contact"}>Contact Me</Link>
    </Layout>
  )
}

export default AboutMe
