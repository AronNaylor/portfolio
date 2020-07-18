import React, { useState } from "react"

export default function SkillLayout({ children }) {
  return (
    <div className="flex flex-row w-48 h-auto p-4 rounded shadow-lg hover:shadow-2xl border border-gray-500 m-5">
      {children}
    </div>
  )
}
