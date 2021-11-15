import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`
  
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="What is The Learning Feed?" />
      <h1>What is The Learning Feed?</h1>
      <p>
        
        </p>
        <br></br>
        <p>The Learning Feed is created and maintained by <a href="https://www.linkedin.com/in/thisismattsmith/" target="_blank">Matt Smith</a>. You can connect with him on <a href="https://www.linkedin.com/in/thisismattsmith/">LinkedIn</a>, <a href="https://twitter.com/MattSmithTweets">Twitter</a>, <a href="https://www.polywork.com/mattsmith">Polywork</a> or <a href="https://medium.com/@thisismattsmith">Medium</a>.
          </p>
          
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
