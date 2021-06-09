import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>More infos follow soonish!</p>
    <h1>Contact</h1>
    <p>
      Alexis Michaltsis
      <br />
      Phone: +49 30 62933291
      <br />
      E-Mail: <a href="mailto:info@destacks.com">info@destacks.com</a>
      <br />
      GitHub: <a href="https://github.com/4lm">github.com/4lm</a>
      <br />
      Twitter: <a href="https://twitter.com/4lmic">twitter.com/4lmic</a>
      <br />
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/imprint/">Impressum (Imprint)</Link>
  </Layout>
)

export default IndexPage
