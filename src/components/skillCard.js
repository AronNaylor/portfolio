import React from "react"
import { Icon } from "@iconify/react"
import javascriptIcon from "@iconify/icons-logos/javascript"
import reactIcon from "@iconify/icons-logos/react"
import nodejsIcon from "@iconify/icons-logos/nodejs"
import html5 from "@iconify/icons-logos/html-5"
import css3 from "@iconify/icons-logos/css-3"
import pythonIcon from "@iconify/icons-logos/python"
import graphqlIcon from "@iconify/icons-logos/graphql"
import npmIcon from "@iconify/icons-logos/npm"
import bootstrapIcon from "@iconify/icons-logos/bootstrap"
import jestIcon from "@iconify/icons-logos/jest"
import mochaIcon from "@iconify/icons-logos/mocha"
import ionicIcon from "@iconify/icons-logos/ionic"
import tailwindcssIcon from "@iconify/icons-logos/tailwindcss-icon"
import sassIcon from "@iconify/icons-logos/sass"
import materialUi from "@iconify/icons-logos/material-ui"
import mongodbIcon from "@iconify/icons-logos/mongodb"
import expressIcon from "@iconify/icons-logos/express"
import jqueryIcon from "@iconify/icons-logos/jquery"
import gitIcon from "@iconify/icons-logos/git-icon"
import apollostackIcon from "@iconify/icons-logos/apollostack"
import gatsbyIcon from "@iconify/icons-logos/gatsby"
import SkillLayout from "./skills/skillLayout"

export default function SkillCard(props) {
  const icon = props.icon

  switch (icon) {
    case "react":
      return (
        <SkillLayout>
          <Icon icon={reactIcon} width="48" height="48" />
          <p className="font-bold text-center text-xl pt-2 pl-5">ReactJS</p>
        </SkillLayout>
      )
      break
    case "javascript":
      return (
        <SkillLayout>
          <Icon icon={javascriptIcon} width="48" height="48" />
          <p className="font-bold text-center text-xl pt-2 pl-5">Javascript</p>
        </SkillLayout>
      )
      break
    case "nodejs":
      return (
        <SkillLayout>
          <Icon icon={nodejsIcon} width="48" height="48" />
          <p className="font-bold text-center text-xl pt-2 pl-5">NodeJS</p>
        </SkillLayout>
      )
      break
    case "html":
      return (
        <SkillLayout>
          <Icon icon={html5} width="48" height="48" />
          <p className="font-bold text-center text-xl pt-2 pl-5">HTML5</p>
        </SkillLayout>
      )
      break
    case "css":
      return (
        <SkillLayout>
          <Icon icon={css3} width="48" height="48" />
          <p className="font-bold text-center text-xl pt-2 pl-5">CSS3</p>
        </SkillLayout>
      )
      break
    case "python":
      return (
        <SkillLayout>
          <Icon icon={pythonIcon} width="48" height="48" />
          <p className="font-bold text-center text-xl pt-2 pl-5">Python</p>
        </SkillLayout>
      )
      break
    case "graphql":
      return (
        <SkillLayout>
          <Icon icon={graphqlIcon} width="48" height="48" />
          <p className="font-bold text-center text-xl pt-2 pl-5">GraphQL</p>
        </SkillLayout>
      )
      break
    case "npm":
      return (
        <SkillLayout>
          <Icon icon={npmIcon} width="48" height="48" />
          <p className="font-bold text-center text-xl pt-2 pl-5">NPM</p>
        </SkillLayout>
      )
      break
    case "bootstrap":
      return (
        <SkillLayout>
          <Icon icon={bootstrapIcon} width="48" height="48" />
          <p className="font-bold text-center text-xl pt-2 pl-5">Bootstrap</p>
        </SkillLayout>
      )
      break
    case "git":
      return (
        <SkillLayout>
          <Icon icon={gitIcon} width="48" height="48" />
          <p className="font-bold text-center text-xl pt-2 pl-5">Git</p>
        </SkillLayout>
      )
      break
    case "apollo":
      return (
        <SkillLayout>
          <Icon icon={apollostackIcon} width="48" height="48" />
          <p className="font-bold text-center text-xl pt-2 pl-5">Apollo</p>
        </SkillLayout>
      )
      break
    case "gatsby":
      return (
        <SkillLayout>
          <Icon icon={gatsbyIcon} width="48" height="48" />
          <p className="font-bold text-center text-xl pt-2 pl-5">GatsbyJS</p>
        </SkillLayout>
      )
      break
    case "jest":
      return (
        <SkillLayout>
          <Icon icon={jestIcon} width="48" height="48" />
          <p className="font-bold text-center text-xl pt-2 pl-5">Jest</p>
        </SkillLayout>
      )
      break
    case "mocha":
      return (
        <SkillLayout>
          <Icon icon={mochaIcon} width="48" height="48" />
          <p className="font-bold text-center text-xl pt-2 pl-5">Mocha</p>
        </SkillLayout>
      )
      break
    case "ionic":
      return (
        <SkillLayout>
          <Icon icon={ionicIcon} width="48" height="48" />
          <p className="font-bold text-center text-xl pt-2 pl-5">Ionic</p>
        </SkillLayout>
      )
      break
    case "tailwind":
      return (
        <SkillLayout>
          <Icon icon={tailwindcssIcon} width="48" height="48" />
          <p className="font-bold text-center text-xl pt-2 pl-5">Tailwind</p>
        </SkillLayout>
      )
      break
    case "mongodb":
      return (
        <SkillLayout>
          <Icon icon={mongodbIcon} width="48" height="48" />
          <p className="font-bold text-center text-xl pt-2 pl-5">MongoDB</p>
        </SkillLayout>
      )
      break
    case "express":
      return (
        <SkillLayout>
          <Icon icon={expressIcon} width="48" height="48" />
          <p className="font-bold text-center text-xl pt-2 pl-5">ExpressJS</p>
        </SkillLayout>
      )
      break
    case "sass":
      return (
        <SkillLayout>
          <Icon icon={sassIcon} width="48" height="48" />
          <p className="font-bold text-center text-xl pt-2 pl-5">Sass</p>
        </SkillLayout>
      )
      break
    case "jquery":
      return (
        <SkillLayout>
          <Icon icon={jqueryIcon} width="48" height="48" />
          <p className="font-bold text-center text-xl pt-2 pl-5">jQuery</p>
        </SkillLayout>
      )
      break
    case "materialui":
      return (
        <SkillLayout>
          <Icon icon={materialUi} width="48" height="48" />
          <p className="font-bold text-center text-xl pt-2 pl-5">MaterialUI</p>
        </SkillLayout>
      )
      break
    default:
      return <h1>Error</h1>
      break
  }
}
