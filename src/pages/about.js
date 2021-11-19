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
        THe goal of this site is to present you with interesting ideas about Learning and Development.

        </p>
        <br />
        You can get in touch via <a href="mailto:hello@thelearningfeed.com">email</a>, <a href="https://www.linkedin.com/company/the-learning-feed/" target="_blank" rel="noreferrer">LinkedIn</a>, <a href="https://twitter.com/TheLearnFeed" target="_blank" rel="noreferrer">Twitter</a>
        <br />
        <br />
        
      <h3>FAQs</h3>
      <h5>Who made this?</h5>
      <p>The Learning Feed is created and maintained by <a href="https://www.linkedin.com/in/thisismattsmith/" target="_blank" rel="noreferrer">Matt Smith</a>. 
      </p>
      <br />
      <p>You can connect with him on <a href="https://www.linkedin.com/in/thisismattsmith/" target="_blank" rel="noreferrer">LinkedIn</a>, <a href="https://twitter.com/MattSmithTweets">Twitter</a>, <a href="https://www.polywork.com/mattsmith">Polywork</a> and <a href="https://medium.com/@thisismattsmith">Medium</a>.
        </p>
      <h5>Can I suggest content for the learning feed?</h5>
      <p>Yes! If you see something interesting just tag the learning feed. 
        <ul>
        <li>Twitter: tag <a href="https://twitter.com/MattSmithTweets" target="_blank" rel="noreferrer">@TheLearnFeed</a> as a reply to any interesting tweets (or send a DM).</li>
        <li>LinkedIn: tag <a href="https://www.linkedin.com/company/the-learning-feed/" target="_blank" rel="noreferrer">The Learning Feed company page</a> for anything interesting on LinkedIn</li>
        <li>Anything else can be shared by email to <a href="mailto:hello@thelearningfeed.com">hello@thelearningfeed.com</a></li>
        </ul>
        </p>
      <p>Please, please, please no spam or boring self promotional content.</p>
      <h5>I want to visit this site regularly but I keep forgetting to check it. Is there any other way I can keep track of your posts?</h5>
      <p>Yes, you can add this site as your home page, add the feed to an RSS reader and follow the LinkedIn and Twitter accounts.</p>
      <h5>How can I get my content featured on The Learning Feed?</h5>
      <p>Make something interesting about Learning and Development! If it's good it will eventually end up here. 
      <br />
      It would be especially wonderful to feature ideas from real world case studies but there seems to be a global shortage. Maybe you could write some? 😉</p>
      <h5>Why are some articles, books, videos and podcasts referenced multiple times?</h5>
      <p>Each post discusses a single idea from a source. Some sources are so good they have multiple great ideas.</p>
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
