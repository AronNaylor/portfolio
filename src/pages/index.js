import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FeatureCard from "../components/featureCard"
import webImage from "../images/index/web.jpg"
import appImage from "../images/index/app.jpg"

function IndexPage() {
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
        <div className="w-full md:px-2 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2">
          <FeatureCard
            src={webImage}
            alt={"Web development image"}
            title={"Web Development"}
            features={[
              "Responsive, Mobile-first web development.",
              "Accessible, elegant and secure websites.",
              "End-user focused, client-facing.. always.",
            ]}
          />
        </div>
        <div className="w-full md:px-2 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2">
          <FeatureCard
            src={appImage}
            alt={"Mobile app image"}
            title={"App Development"}
            features={[
              "Progressive Web Applications.",
              "Built using the Ionic Framework.",
              "Modern, stylish, functional.",
            ]}
          />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
