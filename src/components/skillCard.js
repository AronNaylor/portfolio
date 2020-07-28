import React from "react"
import { Icon } from "@iconify/react"
import { iconTable } from "../utils/iconLookupTable"
import SkillLayout from "./skills/skillLayout"

export default function SkillCard(props) {
  return (
    <SkillLayout>
      <Icon icon={iconTable[props.icon]} width="48" height="48" />
      <p className="font-bold text-center text-xl pt-2 pl-5">{props.name}</p>
    </SkillLayout>
  )
}
