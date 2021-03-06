import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FeatureCard from "../components/featureCard"
import { getImage } from "../utils/getImage"

function IndexPage() {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "index" } }) {
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

  const images = data.allFile.edges.map(item => item.node.childImageSharp.fluid)

  const featureCardContainer =
    "flex justify-center w-full my-2 md:px-2 lg:my-4 lg:px-4 lg:w-full xl:w-1/2"

  return (
    <Layout>
      <SEO
        keywords={[`Aron`, `Naylor`, `web developer`, `frontend`]}
        title="Home"
      />
      <div className="w-full flex justify-center mb-2 lg:-mt-5">
        <Img
          fluid={getImage(images, "profile")}
          style={{ height: "12rem", width: "12rem" }}
          className="rounded-full shadow-2xl"
        />
      </div>
      <div className="w-full h-auto flex flex-col justify-center items-center">
        <div className="w-full h-auto py-5">
          <h2 className="text-center text-2xl underline font-semibold">
            Services
          </h2>
        </div>
        <div className="flex flex-wrap w-full h-auto md:px-2 lg:-mx-4">
          <div className={featureCardContainer}>
            <FeatureCard
              src={getImage(images, "web")}
              alt={"Web development image"}
              title={"Web Development"}
              features={[
                "Responsive, Mobile-first web development.",
                "Fast, accessible and secure websites.",
                "Built with the end user in mind.",
              ]}
            />
          </div>
          <div className={featureCardContainer}>
            <FeatureCard
              src={getImage(images, "app")}
              alt={"Mobile app image"}
              title={"App Development"}
              features={[
                "Progressive Web Applications.",
                "Built using the Ionic Framework.",
                "Modern, responsive and functional across devices.",
              ]}
            />
          </div>
          <div className={featureCardContainer}>
            <FeatureCard
              src={getImage(images, "api")}
              alt={"API Image"}
              title={"API Development"}
              features={[
                "Design, develop and deploy REST API's.",
                "GraphQL and Apollo for declarative data fetching.",
                "Database integration with MongoDB.",
              ]}
            />
          </div>
          <div className={featureCardContainer}>
            <FeatureCard
              src={getImage(images, "ml")}
              alt={"Machine learning image"}
              title={"Applied Machine Learning"}
              features={[
                "Classification and Regression models built with Python.",
                "Applied data analysis using Weka.",
              ]}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
