import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Layout from "./layout"
import { Icon } from "@iconify/react"
import javascriptIcon from "@iconify/icons-logos/javascript"
import reactIcon from "@iconify/icons-logos/react"
import nodejsIcon from "@iconify/icons-logos/nodejs"
import html5 from "@iconify/icons-logos/html-5"
import css3 from "@iconify/icons-logos/css-3"

export default function HorizontalCard() {
  const iconContainer = "flex flex-row w-full h-auto";
  const iconLabel = "text-md pl-3 pt-1";

  return (
    <div className="w-2/3 h-auto border-2">
      <div className={iconContainer}>
        <Icon icon={javascriptIcon} width={48} height={48} />
        <h1 className="text-xl font-bold pl-3 pt-2">Javascript</h1>
      </div>
      <hr />
      <div className="w-full h-auto flex flex-wrap">
        <div className="w-1/2 h-full">
          <div className={iconContainer}>
            <Icon icon={reactIcon} width={32} height={32} />
            <p className={iconLabel}>ReactJS</p>
          </div>
          <div className={iconContainer}>
            <Icon icon={nodejsIcon} width={32} height={32} />
            <p className={iconLabel}>NodeJS</p>
          </div>
        </div>

        <div className="w-1/2 h-full">
          <div className={iconContainer}>
            <Icon icon={reactIcon} width={32} height={32} />
            <p className={iconLabel}>ReactJS</p>
          </div>
          <div className={iconContainer}>
            <Icon icon={nodejsIcon} width={32} height={32} />
            <p className={iconLabel}>NodeJS</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}
