import * as React from "react"
import { Link } from "gatsby"


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
      <footer>
        <div className="main-footer"><small>
        <Link to="/about">About</Link> • <Link to="/rss.xml">RSS</Link> • <a href="https://www.linkedin.com/company/the-learning-feed/" target="_blank" rel="noreferrer">LinkedIn</a> • <a href="https://twitter.com/TheLearnFeed" target="_blank" rel="noreferrer">Twitter</a>
        </small></div>
      </footer>
    </div>
  )
}

export default Layout
