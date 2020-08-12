import React from "react"
import Img from "gatsby-image"

export default function FeatureCard(props) {
  return (
    <div className="w-full bg-white shadow-md rounded border-2 border-gray-200 sm:flex">
      <div className="h-48 sm:h-auto sm:w-48 md-h-full md:w-64 flex-none bg-cover bg-center text-center overflow-hidden">
        <Img fluid={props.src} alt={props.alt} fadeIn={true} />
      </div>
      <div className="flex flex-col center p-2 md:p-4">
        <h2 className="mb-2 font-bold">{props.title}</h2>
        <ul className="list-disc pl-4">
          {props.features.map(el => (
            <li className="text-sm">{el}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
