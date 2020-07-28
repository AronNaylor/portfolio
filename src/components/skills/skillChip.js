import React from "react"
import { Icon } from "@iconify/react"
import { iconTable } from "../../utils/iconLookupTable"

export default function SkillChip(props) {
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
