import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PortfolioCard from "../components/portfolioCard"

export default function Portfolio() {
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
    <Layout>
      <SEO
        keywords={[`Aron`, `Naylor`, `web developer`, `frontend`]}
        title="Home"
      />
      <div className="flex flex-wrap w-full h-auto md:px-2 lg:-mx-4">
        <div className="w-full md:px-2 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
          <PortfolioCard
            src={data.file.childImageSharp.fluid}
            alt={"testing"}
            title={"Test Card"}
            date={"16/07/2020"}
            description={"How does this card look?"}
            skill={["NodeJS", "Bootstrap", "HTML5", "CSS3"]}
          />
        </div>
        <div className="w-full md:px-2 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
          <PortfolioCard
            src={data.file.childImageSharp.fluid}
            alt={"testing"}
            title={"Test Card"}
            date={"16/07/2020"}
            description={"How does this card look?"}
            skill={["React", "Javascript", "Tailwind", "MaterialUI"]}
          />
        </div>
        <div className="w-full md:px-2 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
          <PortfolioCard
            src={data.file.childImageSharp.fluid}
            alt={"testing"}
            title={"Test Card"}
            date={"16/07/2020"}
            description={"How does this card look?"}
            skill={["GraphQL", "Apollo", "Python", "Sass"]}
          />
        </div>
      </div>
    </Layout>
  )
}
