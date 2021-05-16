import * as React from "react"
import Layout from "../components/Layout"
import PersonalActivety from "../components/Organisms/PersonalActivety"
import SEO from "../components/SEO"
import PageTitle from "../components/Atoms/Typography/PageTitle"

const LeisurePage: React.FC = () => {
  return (
    <Layout>
      <SEO title="個人的な活動" />
      <title>個人的な活動</title>
      <PageTitle name="個人的な活動" />
      <PersonalActivety />
    </Layout>
  )
}

export default LeisurePage
