import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PortfolioCard from "../components/portfolioCard"
import heat from "../images/portfolio/heat.png"

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

  const images = data.allFile.edges.map(
    image => image.node.childImageSharp.fluid
  )

  const hangman = images.filter(img =>
    img.src.search(/placeholder/) !== -1 ? img : null
  )
  const choropleth = images.filter(img =>
    img.src.search(/choropleth/) !== -1 ? img : null
  )
  const heat = images.filter(img =>
    img.src.search(/heat/) !== -1 ? img : null
  )
  const markdown = images.filter(img =>
    img.src.search(/markdown/) !== -1 ? img : null
  )
  const pomodoro = images.filter(img =>
    img.src.search(/pomodoro/) !== -1 ? img : null
  )
  const typing = images.filter(img =>
    img.src.search(/typing/) !== -1 ? img : null
  )

  const cardContainerStyles =
    "w-full md:px-2 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 my-2"

  return (
    <Layout>
      <SEO
        keywords={[`Aron`, `Naylor`, `web developer`, `frontend`]}
        title="Portfolio"
      />
      <div className="flex flex-wrap w-full h-auto md:px-2 lg:-mx-4">
        <div className={cardContainerStyles}>
          <PortfolioCard
            src={hangman}
            alt={"Python Hangman"}
            title={"Python Hangman Game"}
            date={"6/06/2020"}
            description={"A simple game of hangman using Python."}
            skill={["Python"]}
            link={"https://repl.it/@AronNaylor/PyHangman"}
          />
        </div>
        <div className={cardContainerStyles}>
          <PortfolioCard
            src={choropleth}
            alt={"D3.js Choropleth Map"}
            title={"Choropleth Map"}
            date={"25/05/2020"}
            description={
              "An interactive Choropleth data visualization map built with D3.js."
            }
            skill={["D3", "Javascript", "CSS3"]}
            link={"https://codepen.io/AronNaylor/full/GRpNwBY"}
          />
        </div>
        <div className={cardContainerStyles}>
          <PortfolioCard
            src={heat}
            alt={"D3.js Heat Map"}
            title={"Heat Map"}
            date={"24/05/2020"}
            description={
              "An interactive heat visualization map built with D3.js."
            }
            skill={["D3", "Javascript", "CSS3"]}
            link={"https://codepen.io/AronNaylor/full/oNjzLmQ"}
          />
        </div>
        <div className={cardContainerStyles}>
          <PortfolioCard
            src={markdown}
            alt={"Markdown Previewer"}
            title={"Markdown Previewer"}
            date={"03/04/2020"}
            description={"A markdown previewer application built using React."}
            skill={["React", "Javascript", "CSS3"]}
            link={
              "https://codesandbox.io/s/github/AronNaylor/React-Markdown-Previewer"
            }
          />
        </div>
        <div className={cardContainerStyles}>
          <PortfolioCard
            src={pomodoro}
            alt={"React Pomodoro Clock"}
            title={"React Pomodoro Clock"}
            date={"03/04/2020"}
            description={"A simple pomdoro timer build using React."}
            skill={["React", "Bootstrap", "Javascript", "CSS3"]}
            link={
              "https://codesandbox.io/s/github/AronNaylor/FreeCodeCamp_Pomodoro_Timer"
            }
          />
        </div>

        <div className={cardContainerStyles}>
          <PortfolioCard
            src={typing}
            alt={"React Speed Typing Game"}
            title={"React Speed Typing Game"}
            date={"30/03/2020"}
            description={"A Simple speed typing game."}
            skill={["React", "Javascript", "CSS3"]}
            link={
              "https://codesandbox.io/s/github/AronNaylor/Speed-typing-game"
            }
          />
        </div>
      </div>
    </Layout>
  )
}
