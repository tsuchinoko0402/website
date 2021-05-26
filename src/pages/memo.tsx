import * as React from "react"
import { graphql, PageProps } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core"
import { ListItemProps } from "@material-ui/core/ListItem"
import PageTitle from "../components/Atoms/Typography/PageTitle"

const MemoIndex: React.FC<PageProps<GatsbyTypes.MemoIndexPageQuery>> = ({
  data,
}) => {
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout>
        <SEO title="メモ一覧" />
        <p>No memo posts found.</p>
      </Layout>
    )
  }

  function ListItemLink(props: ListItemProps<"a", { button?: true }>) {
    return <ListItem button component="a" {...props} />
  }

  return (
    <Layout>
      <SEO title="雑多なメモ" />
      <PageTitle name="雑多なメモ" />
      <Typography variant="body1" color="textPrimary" component="p">
        主に自分のため用。ブログ記事とか他所に投稿するまでもない内容のもの。まとまったら記事にする（たぶん
      </Typography>
      <Box style={{ margin: `10px 10px 20px 10px` }}>
        <List component="nav" aria-label="secondary mailbox folders">
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug
            return (
              <>
                <ListItemLink href={post.fields.slug}>
                  <ListItemText
                    primary={title}
                    secondary={
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {post.frontmatter.description || post.excerpt}
                      </Typography>
                    }
                  />
                </ListItemLink>
              </>
            )
          })}
        </List>
      </Box>
    </Layout>
  )
}

export default MemoIndex

export const pageQuery = graphql`
  query MemoIndexPage {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___updatedDate], order: DESC }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          publishedDate(formatString: "MMMM DD, YYYY")
          updatedDate(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
