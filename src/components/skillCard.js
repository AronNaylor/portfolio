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

export default function SkillCard(props) {
  const icon = props.icon

  if (icon === "react") {
    return (
      <div className="flex flex-row w-48 h-auto p-4 bg-gray-200 rounded-lg m-5">
        <span className="pr-5">
          <Icon icon={reactIcon} width="48" height="48" />
        </span>
        <p className="font-bold text-center text-xl pt-2">ReactJS</p>
      </div>
    )
  } else if (icon === "javascript") {
    return (
      <div className="flex flex-row w-48 h-auto p-4 bg-gray-200 rounded-lg m-5">
        <span className="pr-5">
          <Icon icon={javascriptIcon} width="48" height="48" />
        </span>
        <p className="font-bold text-center text-xl pt-2">Javascript</p>
      </div>
    )
  } else if (icon === "nodejs") {
    return (
      <div className="flex flex-row w-48 h-auto p-4 bg-gray-200 rounded-lg m-5">
        <span className="pr-5">
          <Icon icon={nodejsIcon} width="48" height="48" />
        </span>
        <p className="font-bold text-center text-xl pt-2">NodeJS</p>
      </div>
    )
  } else if (icon === "html") {
    return (
      <div className="flex flex-row w-48 h-auto p-4 bg-gray-200 rounded-lg m-5">
        <span className="pr-5">
          <Icon icon={html5} width="48" height="48" />
        </span>
        <p className="font-bold text-center text-xl pt-2">HTML5</p>
      </div>
    )
  } else if (icon === "css") {
    return (
      <div className="flex flex-row w-48 h-auto p-4 bg-gray-200 rounded-lg m-5">
        <span className="pr-5">
          <Icon icon={css3} width="48" height="48" />
        </span>
        <p className="font-bold text-center text-xl pt-2">CSS3</p>
      </div>
    )
  } else if (icon === "python") {
    return (
      <div className="flex flex-row w-48 h-auto p-4 bg-gray-200 rounded-lg m-5">
        <span className="pr-5">
          <Icon icon={pythonIcon} width="48" height="48" />
        </span>
        <p className="font-bold text-center text-xl pt-2">Python</p>
      </div>
    )
  } else if (icon === "graphql") {
    return (
      <div className="flex flex-row w-48 h-auto p-4 bg-gray-200 rounded-lg m-5">
        <span className="pr-5">
          <Icon icon={graphqlIcon} width="48" height="48" />
        </span>
        <p className="font-bold text-center text-xl pt-2">GraphQL</p>
      </div>
    )
  } else if (icon === "npm") {
    return (
      <div className="flex flex-row w-48 h-auto p-4 bg-gray-200 rounded-lg m-5">
        <span className="pr-5">
          <Icon icon={npmIcon} width="48" height="48" />
        </span>
        <p className="font-bold text-center text-xl pt-2">NPM</p>
      </div>
    )
  } else if (icon === "bootstrap") {
    return (
      <div className="flex flex-row w-48 h-auto p-4 bg-gray-200 rounded-lg m-5">
        <span className="pr-5">
          <Icon icon={bootstrapIcon} width="48" height="48" />
        </span>
        <p className="font-bold text-center text-xl pt-2">Bootstrap</p>
      </div>
    )
  } else if (icon === "git") {
    return (
      <div className="flex flex-row w-48 h-auto p-4 bg-gray-200 rounded-lg m-5">
        <span className="pr-5">
          <Icon icon={gitIcon} width="48" height="48" />
        </span>
        <p className="font-bold text-center text-xl pt-2">Git</p>
      </div>
    )
  } else if (icon === "apollo") {
    return (
      <div className="flex flex-row w-48 h-auto p-4 bg-gray-200 rounded-lg m-5">
        <span className="pr-5">
          <Icon icon={apollostackIcon} width="48" height="48" />
        </span>
        <p className="font-bold text-center text-xl pt-2">Apollo</p>
      </div>
    )
  } else if (icon === "gatsby") {
    return (
      <div className="flex flex-row w-48 h-auto p-4 bg-gray-200 rounded-lg m-5">
        <span className="pr-5">
          <Icon icon={gatsbyIcon} width="48" height="48" />
        </span>
        <p className="font-bold text-center text-xl pt-2">Apollo</p>
      </div>
    )
  } else if (icon === "jest") {
    return (
      <div className="flex flex-row w-48 h-auto p-4 bg-gray-200 rounded-lg m-5">
        <span className="pr-5">
          <Icon icon={jestIcon} width="48" height="48" />
        </span>
        <p className="font-bold text-center text-xl pt-2">Jest</p>
      </div>
    )
  } else if (icon === "mocha") {
    return (
      <div className="flex flex-row w-48 h-auto p-4 bg-gray-200 rounded-lg m-5">
        <span className="pr-5">
          <Icon icon={mochaIcon} width="48" height="48" />
        </span>
        <p className="font-bold text-center text-xl pt-2">MochaJS</p>
      </div>
    )
  } else if (icon === "ionic") {
    return (
      <div className="flex flex-row w-48 h-auto p-4 bg-gray-200 rounded-lg m-5">
        <span className="pr-5">
          <Icon icon={ionicIcon} width="48" height="48" />
        </span>
        <p className="font-bold text-center text-xl pt-2">Ionic</p>
      </div>
    )
  } else if (icon === "tailwind") {
    return (
      <div className="flex flex-row w-48 h-auto p-4 bg-gray-200 rounded-lg m-5">
        <span className="pr-5">
          <Icon icon={tailwindcssIcon} width="48" height="48" />
        </span>
        <p className="font-bold text-center text-xl pt-2">Tailwind</p>
      </div>
    )
  } else if (icon === "mongodb") {
    return (
      <div className="flex flex-row w-48 h-auto p-4 bg-gray-200 rounded-lg m-5">
        <span className="pr-5">
          <Icon icon={mongodbIcon} width="48" height="48" />
        </span>
        <p className="font-bold text-center text-xl pt-2">MongoDB</p>
      </div>
    )
  } else if (icon === "express") {
    return (
      <div className="flex flex-row w-48 h-auto p-4 bg-gray-200 rounded-lg m-5">
        <span className="pr-5">
          <Icon icon={expressIcon} width="48" height="48" />
        </span>
        <p className="font-bold text-center text-xl pt-2">ExpressJS</p>
      </div>
    )
  } else if (icon === "sass") {
    return (
      <div className="flex flex-row w-48 h-auto p-4 bg-gray-200 rounded-lg m-5">
        <span className="pr-5">
          <Icon icon={sassIcon} width="48" height="48" />
        </span>
        <p className="font-bold text-center text-xl pt-2">Sass</p>
      </div>
    )
  } else if (icon === "jquery") {
    return (
      <div className="flex flex-row w-48 h-auto p-4 bg-gray-200 rounded-lg m-5">
        <span className="pr-5">
          <Icon icon={jqueryIcon} width="48" height="48" />
        </span>
        <p className="font-bold text-center text-xl pt-2">jQuery</p>
      </div>
    )
  } else if (icon === "materialui") {
    return (
      <div className="flex flex-row w-48 h-auto p-4 bg-gray-200 rounded-lg m-5">
        <span className="pr-5">
          <Icon icon={materialUi} width="48" height="48" />
        </span>
        <p className="font-bold text-center text-xl pt-2">MaterialUI</p>
      </div>
    )
  } else {
    return <h1>Error</h1>
  }
}
