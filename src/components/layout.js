import * as React from "react"
import { Link } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"


const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      
      <header className="global-header">{header}</header>
      
      <main>{children}</main>
      <footer><small>
      
      <br></br>
        Created and maintained by <a href="http://thisismattsmith.com">Matt Smith</a>. This site contains affiliate links to help cover hosting and other costs. Read the Affiliate policy for more information. 
        </small>
      </footer>
    </div>
  )
}

export default Layout
