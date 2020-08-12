import React from "react"
import SkillCard from "./skillCard"

function SkillParentCard(props) {
  return (
    <div className="w-full md:w-1/2 flex flex-col bg-white shadow-md rounded border-2 border-gray-200 py-4 mb-4">
      <div className="w-full flex flex-row justify-center items-center">
        <h1 className="font-bold text-xl pt-2 pl-5 underline">{props.title}</h1>
      </div>
      <div className="w-full flex flex-row flex-wrap justify-center items-center">
        {props.skills.map(skill => (
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
            <SkillCard icon={skill} name={skill} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillParentCard
