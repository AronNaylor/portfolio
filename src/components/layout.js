import PropTypes from "prop-types"
import React from "react"
import Helmet from "react-helmet"
import favicon from "../images/favicon.ico"
import Header from "./header"
import Footer from "./Footer"

function Layout({ children }) {
  return (
    <>
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>
      <div className="flex flex-col min-h-screen w-full bg-gray-100">
        <Header />

        <main className="w-10/12 max-w-full px-4 py-8 mx-auto md:px-8 md:py-16 flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
