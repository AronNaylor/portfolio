import React from "react"

export default function FeatureCard(props) {
  return (
    <div className="flex flex-row w-full h-auto bg-gray-200 p-2 rounded-lg">
      <span className="w-1/3">
        <img src={props.image} />
      </span>
      <span className="w-2/3 text-center self-center font-bold">
        <ul>
          {props.features.map(feature => (
            <li>{feature}</li>
          ))}
        </ul>
      </span>
    </div>
  )
}
