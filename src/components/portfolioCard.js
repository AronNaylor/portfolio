import React from "react"
import Img from "gatsby-image"
import SkillChip from "./skills/skillChip"

export default function PortfolioCard(props) {
  return (
    <a href={props.link} target="_blank" rel="noreferrer">
      <div className="w-full bg-white shadow-md rounded border-2 border-gray-200 hover:shadow-2xl overflow-hidden min-h-full">
        <Img fluid={props.src} alt={props.alt} fadeIn={true} />
        <div className="px-2">
          <div className="flex items-center flex-wrap justify-between leading-tight p-2 mt-2">
            <h1 className="text-lg font-semibold">{props.title}</h1>
            <p className="text-grey-darker">{props.date}</p>
          </div>
          <div className="flex items-center -mt-2 p-2">
            <p className="text-grey-darker">{props.description}</p>
          </div>
          <div className="flex flex-row flex-wrap p-1 -mt-2">
            {props.skill.map(icon => (
              <SkillChip name={icon} key={icon} />
            ))}
          </div>
        </div>
      </div>
    </a>
  )
}
