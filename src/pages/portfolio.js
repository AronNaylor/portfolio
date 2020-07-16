import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PortfolioCard from "../components/portfolioCard"
import testImg from "../images/image01.jpg"

export default function Portfolio() {
  return (
    <Layout>
      <SEO
        keywords={[`Aron`, `Naylor`, `web developer`, `frontend`]}
        title="Home"
      />
      <div className="flex flex-wrap w-full h-auto">
        <PortfolioCard
          src={testImg}
          alt={"testing"}
          title={"Test Card"}
          date={"16/07/2020"}
          description={"How does this card look?"}
          skill={["React", "Javascript"]}
        />
        <PortfolioCard
          src={testImg}
          alt={"testing"}
          title={"Test Card"}
          date={"16/07/2020"}
          description={"How does this card look?"}
          skill={["NodeJS", "Bootstrap", "HTML5", "CSS3"]}
        />
        <PortfolioCard
          src={testImg}
          alt={"testing"}
          title={"Test Card"}
          date={"16/07/2020"}
          description={"How does this card look?"}
          skill={["Python", "GraphQL", "GatsbyJS"]}
        />
      </div>
    </Layout>
  )
}
