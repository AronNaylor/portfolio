import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SkillCard from "../components/skillCard"

export default function About() {
  return (
    <Layout>
      <SEO
        keywords={[`Aron`, `Naylor`, `web developer`, `frontend`]}
        title="About"
      />
      <h1 className="text-center text-3xl">About me</h1>
      <div className="flex flex-col w-full h-full">
        <p>
          I'm Aron, a Frontend Developer from the UK. I enjoy building with the
          popular MERN (MongoDB, ExpressJS, React, NodeJS) stack. I have a
          thirst for knowledge and always keep update with new frameworks,
          libraries and technologies.
        </p>
        <p>
          I have experience building client-facing websites, progressive web
          applications, mobile apps and machine learning algorithms.
        </p>

        <h2 className="text-center text-xl">Skills</h2>
        <div className="flex flex-row w-full h-full">
          <div className="flex flex-col w-1/4 h-auto items-center">
            <SkillCard icon={"react"} />

            <SkillCard icon={"html"} />
          </div>
          <div className="flex flex-col w-1/4 h-auto items-center">
            <SkillCard icon={"javascript"} />
            <SkillCard icon={"css"} />
          </div>
          <div className="flex flex-col w-1/4 h-auto items-center">
            <SkillCard icon={"nodejs"} />

            <SkillCard icon={"graphql"} />
          </div>
          <div className="flex flex-col w-1/4 h-auto items-center">
            <SkillCard icon={"python"} />
            <SkillCard icon={"npm"} />
          </div>
        </div>
      </div>
    </Layout>
  )
}
