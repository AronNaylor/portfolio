import React, { useState, useEffect } from "react"
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
import d3Icon from '@iconify/icons-logos/d3';


export default function SkillChip(props) {
  const iconTable = {
    React: reactIcon,
    Javascript: javascriptIcon,
    NodeJS: nodejsIcon,
    HTML5: html5,
    CSS3: css3,
    Python: pythonIcon,
    GraphQL: graphqlIcon,
    NPM: npmIcon,
    Bootstrap: bootstrapIcon,
    Jest: jestIcon,
    Mocha: mochaIcon,
    Ionic: ionicIcon,
    Tailwind: tailwindcssIcon,
    Sass: sassIcon,
    MaterialUI: materialUi,
    MongoDB: mongodbIcon,
    ExpressJS: expressIcon,
    jQuery: jqueryIcon,
    Git: gitIcon,
    Apollo: apollostackIcon,
    GatsbyJS: gatsbyIcon,
    D3: d3Icon
  }

  return (
    <div className="flex justify-center items-center m-1 font-medium py-1 px-2 rounded text-gray-900 border border-gray-300">
      <div className="pr-1">
        <Icon icon={iconTable[props.name]} width="18" height="18" />
      </div>
      <div className="text-xs font-semibold leading-none max-w-full flex-initial pr-1">
        {props.name}
      </div>
    </div>
  )
}
