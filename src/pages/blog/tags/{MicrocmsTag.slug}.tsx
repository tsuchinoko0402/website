import * as React from "react"
import { graphql, PageProps } from "gatsby"
import Layout from "../../../components/Layout"
import { Box, Typography } from "@material-ui/core"
import SEO from "../../../components/SEO"
import BlogArticleTable, {
  BlogPost,
} from "../../../components/Organisms/BlogArticleTable"

const BlogTagPage: React.FC<PageProps<GatsbyTypes.BlogTagPageQuery>> = ({
  data,
}) => {
  const posts = data.allMicrocmsPost.nodes
  const tagName = data.microcmsTag.name
  const tagSlug = data.microcmsTag.slug

  if (posts.length === 0) {
    return (
      <Layout>
        <SEO title={`No page in tag:${tagSlug}`} />
        <p>No blog posts found in tag:{tagName}.</p>
      </Layout>
    )
  }

  const blogPosts: BlogPost[] = posts.map(post => ({
    slug: post.slug,
    title: post.title,
    publishedAt: post.publishedAt,
    updatedAt: post.updatedAt,
    overview: post.overview,
  }))

  return (
    <Layout>
      <SEO title={`タグ：${tagName} 一覧`} />
      <title>タグ：{tagName} 一覧</title>
      <Typography variant="h3" color="textPrimary" component="h3">
        タグ：{tagName} のブログ記事一覧
      </Typography>
      <Box style={{ margin: `10px 10px 20px 10px` }}>
        <BlogArticleTable posts={blogPosts} />
      </Box>
    </Layout>
  )
}

export const query = graphql`
  query BlogTagPage($slug: String!) {
    microcmsTag(slug: { eq: $slug }) {
      slug
      name
      description
    }
    allMicrocmsPost(filter: { tag: { elemMatch: { slug: { eq: $slug } } } }) {
      nodes {
        slug
        title
        overview
        publishedAt
        updatedAt
        tag {
          slug
          name
        }
      }
    }
  }
`

export default BlogTagPage
