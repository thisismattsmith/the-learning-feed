import React from "react"
import { siteMetadata } from "../../gatsby-config"
import Greeting from "./greeting"

const leftSidebar = () => (
    
  <div className="universalSidebar">
  <div className="sidebar-wrapper">
            <small><Greeting/></small>   
  </div>
  </div>
)


export default leftSidebar

