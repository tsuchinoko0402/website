import { ListItem } from "@material-ui/core"
import { Box, List, Typography, ListItemText } from "@material-ui/core"
import { ListItemProps } from "@material-ui/core/ListItem"
import { graphql, PageProps } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

function ListItemLink(props: ListItemProps<"a", { button?: true }>) {
  return <ListItem button component="a" {...props} />
}

const BlogTagsPage: React.FC<PageProps<GatsbyTypes.BlogTagsPageQuery>> = ({
  data,
}) => {
  const tags = data.allMicrocmsTag.nodes
  return (
    <Layout>
      <SEO title="タグ一覧" />
      <title>タグ一覧</title>
      <Typography variant="body1" color="textPrimary" component="p">
        ブログのタグ一覧
      </Typography>
      <Box style={{ margin: `10px 10px 20px 10px` }}>
        <List component="nav" aria-label="secondary mailbox folders">
          {tags.map(tag => {
            return (
              <>
                <ListItemLink href={tag.slug}>
                  <ListItemText primary={tag.name} />
                </ListItemLink>
              </>
            )
          })}
        </List>
      </Box>
    </Layout>
  )
}

export const query = graphql`
  query BlogTagsPage {
    allMicrocmsTag {
      nodes {
        id
        name
        slug
      }
    }
  }
`

export default BlogTagsPage
