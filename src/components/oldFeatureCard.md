import React from "react"

export default function FeatureCard(props) {
return (

<div className="flex flex-wrap sm:w-full md:w-2/3 lg:w-2/3 xl:w-2/3 p-2 rounded-lg shadow-lg border-r-4 border-b-4 border-gray-500">
<div className="flex w-full sm:w-1/3 justify-center">
<img src={props.image} />
</div>
<div className="flex w-full sm:w-2/3 justify-center items-center text-center">
<ul>
{props.features.map(feature => (
<li>{feature}</li>
))}
</ul>
</div>
</div>
)
}
