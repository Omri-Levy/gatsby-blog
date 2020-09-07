import React from "react"
import Head from "../components/Head.jsx"
import Layout from "../components/Layout.jsx"

const ContactMe = () => {
  return (
    <Layout>
      <Head title='Contact Me' />
      <h1>Contact Me:</h1>
      <ul>
        <li>Phone number: ############</li>
        <li>Address: ##### # - ###-####</li>
        <li>Links:
          <ul>
            <li>Github</li>
            <li>LinkedIn</li>
            <li>
              <a target='_blank' rel='noreferrer'
                 href='https://www.facebook.com/'>
                Facebook
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </Layout>
  )
}

export default ContactMe
