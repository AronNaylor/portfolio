import React from "react"
import { graphql, useStaticQuery } from "gatsby"

export default function Footer() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          date
          author
        }
      }
    }
  `)

  return (
    <footer className="flex flex-row justify-center pb-5 bg-blue-700 text-white">
      <p className="font-semibold">
        {data.site.siteMetadata.author} &copy; {data.site.siteMetadata.date}{" "}
      </p>
    </footer>
  )
}
