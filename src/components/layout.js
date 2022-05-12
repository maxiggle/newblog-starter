import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header
  if (isRootPath) {
    header = <h1 className="main-heading">The Blog</h1>
  } else {
    header = (
      <Link className="header-link-home" to="/">
        Go Home
      </Link>
    )
  }

  return (
    <div data-is-root-path={isRootPath} className="main-content">
      <div className="wrapper global-header">
        <div className="content-wrapper body">
          <div className="main-header">
            <div id="div"> 
            {header}
            </div>
           
            </div>
          <div className="main-nav-bar nav-design">
            <ul className="flatten-nav">
              <li>
                <Link to="/firstpost">First Post</Link>
              </li>
              <li>
                <Link to="/secondpost">Second Post</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="global-wrapper"></hr>

      <main className="p-2px pb-100px center-content">{children}</main>
      <div>
        <hr className="global-wrapper"></hr>
        <footer className=" p-2px footer">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby </a>
          {` and  `}
          <a href="https://contentrain.io/">Contentrain</a>
        </footer>
      </div>
    </div>
  )
}

export default Layout
