import PropTypes from "prop-types"
import React from "react"

import Header from "./header"

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />

      <main className="flex-1 w-10/12 max-w-full px-4 py-8 mx-auto md:px-8 md:py-16">
        {children}
      </main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
