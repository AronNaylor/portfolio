import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SkillCard from "../components/skillCard"

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`Aron`, `Naylor`, `web developer`, `frontend`]}
        title="About"
      />
      <h1>Home</h1>
    </Layout>
  )
}

export default IndexPage
