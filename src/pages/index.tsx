import * as React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import ProfileCard from "../components/Organisms/ProfileCard"
import TopImage from "../components/Atoms/Image/TopImage"
import { Box } from "@material-ui/core"

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Top" />
      <title>Top</title>
      <Box>
        <TopImage />
        <ProfileCard />
      </Box>
    </Layout>
  )
}

export default IndexPage
