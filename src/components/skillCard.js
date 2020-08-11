import React from "react"
import { Icon } from "@iconify/react"
import { iconTable } from "../utils/iconLookupTable"

export default function SkillCard(props) {
  return (
    <div className="flex flex-row w-48 h-auto p-4 rounded border-b-2 border-blue-500 m-5">
      <Icon icon={iconTable[props.icon]} width="48" height="48" />
      <p className="font-bold text-center text-xl pt-2 pl-5">{props.name}</p>
    </div>
  )
}
