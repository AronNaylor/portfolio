import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FeatureCard from "../components/featureCard"

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
  const web = images.filter(img => (img.src.search(/web/) !== -1 ? img : null))
  const app = images.filter(img => (img.src.search(/app/) !== -1 ? img : null))
  const api = images.filter(img => (img.src.search(/api/) !== -1 ? img : null))
  const ml = images.filter(img => (img.src.search(/ml/) !== -1 ? img : null))

  const featureCardContainer =
    "flex justify-center w-full my-2 md:px-2 lg:my-4 lg:px-4 lg:w-full xl:w-1/2"

  return (
    <Layout>
      <SEO
        keywords={[`Aron`, `Naylor`, `web developer`, `frontend`]}
        title="Home"
      />
      <div className="text-center xl:px-10 lg:px-10 md:px--2 sm:px-0">
        <p className="text-lg">I'm <b>Aron</b>, a Frontend developer from the UK.
        I served in the Parachute Regiment for 8 years before leaving to to become a developer.
        I enjoy building with the MERN Software Stack (MongoDB, ExpressJS, ReactJS, NodeJs).</p>
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
              src={web}
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
              src={app}
              alt={"Mobile app image"}
              title={"App Development"}
              features={[
                "Progressive Web Applications.",
                "Built using the Ionic Framework.",
                "Modern, stylish and functional across devices.",
              ]}
            />
          </div>
          <div className={featureCardContainer}>
            <FeatureCard
              src={api}
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
              src={ml}
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
