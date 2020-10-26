import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import SkillParentCard from "../components/SkillParentCard"

export default function Skills() {
  return (
    <Layout>
      <SEO
        keywords={[`Aron`, `Naylor`, `web developer`, `frontend`]}
        title="Skills"
      />
      <div className="w-full h-auto pb-2">
        <h1 className="text-center text-3xl underline font-bold">Skills</h1>
      </div>
      <div className="flex flex-col max-w-full h-full items-center">
        <div className="flex flex-col flex-wrap items-center w-full h-full justify-center xl:px-10 lg:px-10 md:px--2 sm:px-0 xs:px-0">
          <SkillParentCard title={"Cloud"} skills={["AWS", "Heroku"]} />
          <SkillParentCard
            title={"Languages"}
            skills={["Javascript", "Typescript", "Python", "HTML5", "CSS3"]}
          />
          <SkillParentCard
            title={"Frontend Libraries & Frameworks"}
            skills={[
              "React",
              "GatsbyJS",
              "NextJS",
              "Sass",
              "Bootstrap",
              "Tailwind",
            ]}
          />
          <SkillParentCard
            title={"Backend Libraries & Frameworks"}
            skills={["NodeJS", "ExpressJS"]}
          />
          <SkillParentCard
            title={"Tools"}
            skills={["Ansible", "Mocha", "Jest", "Git", "NPM"]}
          />
          <SkillParentCard
            title={"Databases & APIs"}
            skills={["MongoDB", "GraphQL", "Apollo"]}
          />
        </div>
      </div>
    </Layout>
  )
}
