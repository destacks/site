import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Contact</h1>
    <p style={{ maxWidth: "250px", marginBottom: "2rem" }}>
      <table>
        <tr>
          <td>Phone:</td>
          <td style={{ textAlign: "right" }}>+49 30 62933291</td>
        </tr>
        <tr>
          <td>Email:</td>
          <td style={{ textAlign: "right" }}>
            <a href="mailto:info@destacks.com">info@destacks.com</a>
          </td>
        </tr>
        <tr>
          <td>GitHub:</td>
          <td style={{ textAlign: "right" }}>
            <a href="https://github.com/destacks">github.com/destacks</a>
          </td>
        </tr>
      </table>
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/imprint/">Impressum (Imprint)</Link>
  </Layout>
)

export default IndexPage
