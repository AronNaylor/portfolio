import React from "react"
import SkillChip from './skills/skillChip'

export default function PortfolioCard(props) {
  return (
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 border-2 border-red-300 overflow-hidden">
      <img src={props.src} alt={props.alt} className="block h-auto w-full" />
      <div className="flex items-center justify-between leading-tight p-2 md:p-4">
        <h1 className="text-lg">{props.title}</h1>
        <p className="text-grey-darker text-sm">{props.date}</p>
      </div>
      <div className="flex items-center p-2 -mt-2 md:p-4">
        <p className="text-grey-darker text-sm">
          {props.description}
        </p>
      </div>
      <div className="flex flex-row flex-wrap p-2 -mt-2 md:p-4">
          {props.skill.map(icon => <SkillChip name={icon} />)}
      </div>
    </div>
  )
}
