import React from "react"

export default function FeatureCard(props) {
  return (
    <div className="flex flex-row flex-wrap w-2/3 h-auto bg-gray-200 p-2 rounded-lg">
      <div className="flex xl:w-1/3 lg:w-1/3 md:w-1/3 sm:w-full xs:w-full">
        <img src={props.image} />
      </div>
      <div className="flex xl:w-2/3 lg:w-2/3 md:w-2/3 sm:w-full xs:w-full text-center self-center justify-center font-bold">
        <ul>
          {props.features.map(feature => (
            <li>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
