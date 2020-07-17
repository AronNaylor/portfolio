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
  const featureCardContainer =
    "flex justify-center w-full my-2 md:px-2 lg:my-4 lg:px-4 lg:w-full xl:w-1/2"

  return (
    <Layout>
      <SEO
        keywords={[`Aron`, `Naylor`, `web developer`, `frontend`]}
        title="About"
      />
      <div className="text-center w-full xl:px-10 lg:px-10 md:px--2 sm:px-0">
        <p className="text-lg">
          I'm Aron, a Frontend Developer from the UK. I enjoy building with the
          popular MERN (MongoDB, ExpressJS, React, NodeJS) stack. I have a
          thirst for knowledge and always keep up-to-date with new frameworks,
          libraries and technologies.
        </p>
        <br />
        <p className="text-lg">
          I have experience building client-facing websites, progressive web
          applications, mobile apps and machine learning algorithms.
        </p>
        <br />
        <p className="text-lg">
          I can design and develop RESTful API's and Microservices utilising
          MongoDB, ExpressJS and NodeJS.
        </p>
      </div>
      <div className="w-full h-auto py-5">
        <h2 className="text-center text-2xl underline font-semibold">
          Services
        </h2>
      </div>
      <div className="flex flex-wrap w-full h-auto md:px-2 lg:-mx-4">
        <div className={featureCardContainer}>
          <FeatureCard
            src={images[1]}
            alt={"Web development image"}
            title={"Web Development"}
            features={[
              "Responsive, Mobile-first web development.",
              "Fast, accessible, elegant and secure websites.",
              "Built with the end user in mind.",
            ]}
          />
        </div>
        <div className={featureCardContainer}>
          <FeatureCard
            src={images[0]}
            alt={"Mobile app image"}
            title={"App Development"}
            features={[
              "Progressive Web Applications.",
              "Built using the Ionic Framework.",
              "Modern, stylish, functional.",
            ]}
          />
        </div>
        <div className={featureCardContainer}>
          <FeatureCard
            src={images[2]}
            alt={"API Image"}
            title={"API Development"}
            features={[
              "REST APIs design and querying.",
              "GraphQL and Apollo for declarative data fetching.",
              "Database integration with MongoDB.",
            ]}
          />
        </div>
        <div className={featureCardContainer}>
          <FeatureCard
            src={images[3]}
            alt={"Machine learning image"}
            title={"Applied Machine Learning"}
            features={[
              "Classification and Regression models with Python.",
              "Applied data analysis using Weka.",
            ]}
          />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
