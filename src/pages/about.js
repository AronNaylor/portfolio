import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SkillCard from "../components/skillCard"
import FeatureCard from "../components/featureCard"

export default function About() {
  const skillCardClass =
    "flex flex-col sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 h-auto items-center"
  const featureCardClass = "sm:w-full md:w-full lg:w-1/2 xl:w-1/2 h-auto p-2"

  return (
    <Layout>
      <SEO
        keywords={[`Aron`, `Naylor`, `web developer`, `frontend`]}
        title="About"
      />
      <div className="w-full h-auto pb-2">
        <h1 className="text-center text-2xl underline font-semibold">
          About me
        </h1>
      </div>
      <div className="flex flex-col flex-wrap w-full h-full py-2">
        <p>
          I'm Aron, a Frontend Developer from the UK. I enjoy building with the
          popular MERN (MongoDB, ExpressJS, React, NodeJS) stack. I have a
          thirst for knowledge and always keep update with new frameworks,
          libraries and technologies.
        </p>
        <br />
        <p>
          I have experience building client-facing websites, progressive web
          applications, mobile apps and machine learning algorithms.
        </p>

        <div className="w-full h-auto pb-2">
          <h2 className="text-center text-xl underline font-semibold">
            Skills
          </h2>
        </div>
        <div className="flex flex-row flex-wrap w-full h-full">
          <div className={skillCardClass}>
            <SkillCard icon={"javascript"} />
            <SkillCard icon={"react"} />
            <SkillCard icon={"gatsby"} />
            <SkillCard icon={"ionic"} />
            <SkillCard icon={"jquery"} />
          </div>
          <div className={skillCardClass}>
            <SkillCard icon={"nodejs"} />
            <SkillCard icon={"mongodb"} />
            <SkillCard icon={"express"} />
            <SkillCard icon={"mocha"} />
            <SkillCard icon={"jest"} />
          </div>
          <div className={skillCardClass}>
            <SkillCard icon={"html"} />
            <SkillCard icon={"css"} />
            <SkillCard icon={"sass"} />
            <SkillCard icon={"bootstrap"} />
            <SkillCard icon={"tailwind"} />
          </div>
          <div className={skillCardClass}>
            <SkillCard icon={"python"} />
            <SkillCard icon={"graphql"} />
            <SkillCard icon={"apollo"} />
            <SkillCard icon={"git"} />
            <SkillCard icon={"npm"} />
          </div>
        </div>
      </div>
      <div className="w-full h-auto pb-5">
        <h2 className="text-center text-xl underline font-semibold">
          Services
        </h2>
      </div>
      <div className="flex flex-wrap w-full h-auto">
        <div className={featureCardClass}>
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
        <div className={featureCardClass}>
          <FeatureCard
            features={[
              "Mobile applications",
              "Built using the Ionic framework",
            ]}
            image="https://img.icons8.com/color/96/000000/android.png"
          />
        </div>
        <div className={featureCardClass}>
          <FeatureCard
            features={["RESTful API design", "GraphQL data fetching"]}
            image="https://img.icons8.com/color/96/000000/api-settings.png"
          />
        </div>
        <div className={featureCardClass}>
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
