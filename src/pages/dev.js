import React from "react"
import Layout from "../components/layout"
import HorizontalCard from "../components/horizontalCard"

export default function dev() {
  return (
    <Layout>
      <h1>DEV PAGE</h1>
      <div className="flex flex-wrap w-full h-auto">
        <div className="flex justify-center w-full md:px-2 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2">
          <HorizontalCard />
        </div>
        <div className="flex justify-center w-full md:px-2 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2">
          <HorizontalCard />
        </div>
      </div>
    </Layout>
  )
}
