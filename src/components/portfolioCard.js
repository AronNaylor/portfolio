import React from "react"
import Img from "gatsby-image"
import SkillChip from "./skills/skillChip"

export default function PortfolioCard(props) {
  return (
    <div className="w-full border-2 border-gray-500 shadow-xl overflow-hidden">
      <Img fluid={props.src} alt={props.alt} fadeIn={true} />
      <div className="flex items-center justify-between leading-tight p-2 -mt-2 md:p-4">
        <h1 className="text-lg">{props.title}</h1>
        <p className="text-grey-darker text-sm">{props.date}</p>
      </div>
      <div className="flex items-center -mt-2 md:p-4">
        <p className="text-grey-darker text-sm">{props.description}</p>
      </div>
      <div className="flex flex-row flex-wrap p-2 -mt-2 md:p-4">
        {props.skill.map(icon => (
          <SkillChip name={icon} />
        ))}
      </div>
    </div>
  )
}
