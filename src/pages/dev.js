import React from "react"
import Layout from "../components/layout"
import HorizontalCard from "../components/horizontalCard"

export default function dev() {
  return (
    <Layout>
      <h1>DEV PAGE</h1>
      <div className="w-full h-auto">
        <HorizontalCard />
      </div>
    </Layout>
  )
}
