import React from "react"
import { Link } from "gatsby"
import { siteMetadata } from "../../gatsby-config"
import Greeting from "./greeting"

const Sidebar = () => (
    
    <header>
  <div className="universalSidebar">
  <div className="sidebar-wrapper">
  <br />
            <Link to="/about" className="sidebar-link">About</Link>
            <Link to="/contact" className="sidebar-link">Contact</Link>
            <Link to="/rss.xml" className="sidebar-link">RSS feed</Link>
            <br></br>
            <p>View by:
            <br></br>
            <Link to="/rss.xml" className="sidebar-link">Topics</Link>
            <Link to="/rss.xml" className="sidebar-link">People</Link> 
            </p>
  </div>
  </div>
    </header>
)


export default Sidebar
