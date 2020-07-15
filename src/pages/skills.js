import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SkillCard from "../components/skillCard"

export default function Skills() {
  const skillCardClass =
    "flex flex-col sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 h-auto items-center"

  return (
    <Layout>
      <SEO
        keywords={[`Aron`, `Naylor`, `web developer`, `frontend`]}
        title="About"
      />
      <div className="w-full h-auto pb-2">
        <h1 className="text-center text-2xl underline font-semibold">Skills</h1>
      </div>
      <div className="flex flex-col max-w-full h-full py-2 items-center">
        <div className="flex flex-row flex-wrap w-full h-full justify-center xl:px-10 lg:px-10 md:px--2 sm:px-0 xs:px-0">
            <SkillCard icon={"javascript"} />
            <SkillCard icon={"react"} />
            <SkillCard icon={"nodejs"} />
            <SkillCard icon={"python"} />
            <SkillCard icon={"gatsby"} />
            <SkillCard icon={"mongodb"} />
            <SkillCard icon={"express"} />
            <SkillCard icon={"html"} />
            <SkillCard icon={"css"} />
            <SkillCard icon={"ionic"} />
            <SkillCard icon={"jquery"} />
            <SkillCard icon={"mocha"} />
            <SkillCard icon={"jest"} />
            <SkillCard icon={"sass"} />
            <SkillCard icon={"bootstrap"} />
            <SkillCard icon={"tailwind"} />
            <SkillCard icon={"graphql"} />
            <SkillCard icon={"apollo"} />
            <SkillCard icon={"git"} />
            <SkillCard icon={"npm"} />
        </div>
      </div>
    </Layout>
  )
}
