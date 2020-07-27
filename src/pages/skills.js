import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SkillCard from "../components/skillCard"

export default function Skills() {
  const skills = [
    "Javascript",
    "React",
    "NodeJS",
    "Python",
    "GatsbyJS",
    "MongoDB",
    "ExpressJS",
    "HTML5",
    "CSS3",
    "Ionic",
    "jQuery",
    "Mocha",
    "Jest",
    "Sass",
    "Bootstrap",
    "Tailwind",
    "D3",
    "GraphQL",
    "Apollo",
    "Git",
    "NPM",
    "Netlify",
    "Heroku",
  ]

  return (
    <Layout>
      <SEO
        keywords={[`Aron`, `Naylor`, `web developer`, `frontend`]}
        title="Skills"
      />
      <div className="w-full h-auto pb-2">
        <h1 className="text-center text-2xl underline font-semibold">Skills</h1>
      </div>
      <div className="flex flex-col max-w-full h-full items-center">
        <div className="flex flex-row flex-wrap w-full h-full justify-center xl:px-10 lg:px-10 md:px--2 sm:px-0 xs:px-0">
          {skills.map(skill => (
            <SkillCard icon={skill} name={skill} />
          ))}
        </div>
      </div>
    </Layout>
  )
}
