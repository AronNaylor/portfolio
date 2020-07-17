import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PortfolioCard from "../components/portfolioCard"

export default function Portfolio() {
  const data = useStaticQuery(graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "portfolio" } }) {
      edges {
        node {
          base
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
  `)

  const images = data.allFile.edges.map(image => image.node.childImageSharp.fluid);

  return (
    <Layout>
      <SEO
        keywords={[`Aron`, `Naylor`, `web developer`, `frontend`]}
        title="Home"
      />
      <div className="flex flex-wrap w-full h-auto md:px-2 lg:-mx-4">
        <div className="w-full md:px-2 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
          <PortfolioCard
            src={images[2]}
            alt={"React Pomodoro Clock"}
            title={"React Pomodoro Clock"}
            date={"03/04/2020"}
            description={"A simple pomdoro timer build using React."}
            skill={["React", "Bootstrap", "Javascript", "CSS3"]}
          />
        </div>
        <div className="w-full md:px-2 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
          <PortfolioCard
            src={images[0]}
            alt={"React Speed Typing Game"}
            title={"React Speed Typing Game"}
            date={"30/03/2020"}
            description={"A Simple speed typing game."}
            skill={["React", "Javascript", "CSS3"]}
          />
        </div>
        <div className="w-full md:px-2 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
          <PortfolioCard
            src={images[1]}
            alt={"jQuery Drumkit"}
            title={"jQuery Drumkit"}
            date={"30/04/2020"}
            description={"jQuery Drumkit"}
            skill={["React", "jQuery", "Javascript", "CSS3"]}
          />
        </div>
      </div>
    </Layout>
  )
}
