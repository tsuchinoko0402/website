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

const BlogCategoriesPage: React.FC<
  PageProps<GatsbyTypes.BlogCategoriesPageQuery>
> = ({ data }) => {
  const categories = data.allMicrocmsCategory.nodes
  return (
    <Layout>
      <SEO title="カテゴリ一覧" />
      <title>カテゴリ一覧</title>
      <Typography variant="body1" color="textPrimary" component="p">
        ブログのカテゴリ一覧
      </Typography>
      <Box style={{ margin: `10px 10px 20px 10px` }}>
        <List component="nav" aria-label="secondary mailbox folders">
          {categories.map(category => {
            return (
              <>
                <ListItemLink href={category.slug}>
                  <ListItemText primary={category.name} />
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
  query BlogCategoriesPage {
    allMicrocmsCategory {
      nodes {
        id
        name
        slug
      }
    }
  }
`

export default BlogCategoriesPage
