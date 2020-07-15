import React, { useState } from "react"

export default function SkillLayout({ children }) {
  return (
    <div className="flex flex-row w-48 h-auto p-4 bg-gray-200 rounded-lg m-5">
      {children}
    </div>
  )
}
