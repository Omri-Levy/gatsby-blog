import React from "react"
import Head from "../components/Head.jsx"
import Layout from "../components/Layout.jsx"
import contactMeStyle from "../../static/scss/contactMe.module.scss"

const ContactMe = () => {
  return (
    <Layout>
      <Head title='Contact Me' />
      <h1>Contact Me:</h1>
      <ul className={contactMeStyle.list}>
        <li className={contactMeStyle.item}>Phone number: 0526256647</li>
        <li className={contactMeStyle.item}>Email: omri.levy0197@gmail.com</li>
        <br />
        <li className={contactMeStyle.item}>Links:
          <br />
          <a className={contactMeStyle.link} target='_blank' rel='noreferrer'
             href='https://github.com/Omri-Levy'>
            Github
          </a>
          <br />
          <a className={contactMeStyle.link} target='_blank' rel='noreferrer'
             href='https://www.linkedin.com/in/omri-levy-798b901b1/'>
            LinkedIn
          </a>
          <br />
          <a className={contactMeStyle.link} target='_blank' rel='noreferrer'
             href='https://www.facebook.com/omri.levy.10420'>
            Facebook
          </a>
        </li>
      </ul>
    </Layout>
  )
}

export default ContactMe
