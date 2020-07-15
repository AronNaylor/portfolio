import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FeatureCard from "../components/featureCard"

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`Aron`, `Naylor`, `web developer`, `frontend`]}
        title="About"
      />
      <div className="text-center w-full xl:px-10 lg:px-10 md:px--2 sm:px-0 xs:px-0">
        <p>
          I'm Aron, a Frontend Developer from the UK. I enjoy building with the
          popular MERN (MongoDB, ExpressJS, React, NodeJS) stack. I have a
          thirst for knowledge and always keep up-to-date with new frameworks,
          libraries and technologies.
        </p>
        <br />
        <p>
          I have experience building client-facing websites, progressive web
          applications, mobile apps and machine learning algorithms.
        </p>
        <br />
        <p>
          I can design and develop RESTful API's and Microservices utilising
          MongoDB, ExpressJS and NodeJS.
        </p>
      </div>
      <div className="w-full h-auto py-5">
        <h2 className="text-center text-xl underline font-semibold">
          Services
        </h2>
      </div>
      {/*Container*/}
      <div className="flex flex-row flex-wrap w-full h-auto justify-center -py-2">
        <div className="flex xl:w-1/2 lg:w-1/2 md:w-full sm:w-full xs:w-full h-auto justify-center py-2">
          <FeatureCard
            features={[
              "Modern Website Design",
              "Progressive Web Applications",
              "Content Management Systems",
              "JAMstack",
            ]}
            image={"https://img.icons8.com/color/96/000000/monitor.png"}
          />
        </div>
        <div className="flex xl:w-1/2 lg:w-1/2 md:w-full sm:w-full xs:w-full h-auto justify-center py-2">
          <FeatureCard
            features={[
              "Mobile applications",
              "Built using the Ionic framework",
            ]}
            image="https://img.icons8.com/color/96/000000/android.png"
          />
        </div>
      </div>
      {/*Container*/}
      <div className="flex flex-row flex-wrap w-full h-auto justify-center -py-2">
        <div className="flex xl:w-1/2 lg:w-1/2 md:w-full sm:w-full xs:w-full h-auto justify-center py-2">
          <FeatureCard
            features={["RESTful API design", "GraphQL data fetching"]}
            image="https://img.icons8.com/color/96/000000/api-settings.png"
          />
        </div>
        <div className="flex xl:w-1/2 lg:w-1/2 md:w-full sm:w-full xs:w-full h-auto justify-center py-2">
          <FeatureCard
            features={[
              "Applied Machine Learning",
              "Classification and Regression",
              "Weka Machine Learning Platform",
            ]}
            image="https://img.icons8.com/color/96/000000/artificial-intelligence.png"
          />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
