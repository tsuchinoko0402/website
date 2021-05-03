import * as React from "react"
import Layout from "../components/Layout"
import PersonalActivety from "../components/PersonalActivety"
import SEO from "../components/SEO"

const LeisurePage: React.FC = () => {
  return (
    <Layout>
      <SEO title="個人的な活動" />
      <title>個人的な活動</title>
      <PersonalActivety />
    </Layout>
  )
}

export default LeisurePage
