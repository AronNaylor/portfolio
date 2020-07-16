import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Layout from "./layout"

export default function HorizontalCard() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "image02.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="w-2/3 sm:w-full h-48 sm:h-auto border border-gray-500 flex flex-row">
      <div className="w-1/2 h-full bg-red-200 self-end">
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="testing"
          //style={{height: '100%'}}
          //imgStyle={{objectFit: 'contain', objectPosition: 'left'}}
          fadeIn={true}
        />
      </div>
      <div className="w-1/2">
        <p>Modern Web Development</p>
        <p>Progressive Web Apps</p>
        <p>Mobile-first design</p>
      </div>
    </div>
  )
}
