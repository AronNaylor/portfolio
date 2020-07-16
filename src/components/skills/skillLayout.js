import React, { useState } from "react"

export default function SkillLayout({ children }) {
  return (
    <div className="flex flex-row w-48 h-auto p-4 rounded-lg shadow-lg hover:shadow-2xl border-r-4 border-b-4 border-gray-500 m-5">
      {children}
    </div>
  )
}
