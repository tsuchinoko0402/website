import * as React from "react"
import { graphql, PageProps } from "gatsby"
import Layout from "../../../components/Layout"
import { Box, Typography } from "@material-ui/core"
import SEO from "../../../components/SEO"
import BlogArticleTable, {
  BlogPost,
} from "../../../components/Organisms/BlogArticleTable"

const BlogCategoryPage: React.FC<
  PageProps<GatsbyTypes.BlogCategoryPageQuery>
> = ({ data }) => {
  const posts = data.allMicrocmsPost.nodes
  const categoryName = data.microcmsCategory.name
  const categorySlug = data.microcmsCategory.slug

  if (posts.length === 0) {
    return (
      <Layout>
        <SEO title={`No page in category:${categorySlug}`} />
        <p>No blog posts found in category:{categoryName}.</p>
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
      <SEO title={`カテゴリ：${categoryName} 一覧`} />
      <title>カテゴリ：{categoryName} 一覧</title>
      <Typography variant="h3" color="textPrimary" component="h3">
        カテゴリ：{categoryName} のブログ記事一覧
      </Typography>
      <Box style={{ margin: `10px 10px 20px 10px` }}>
        <BlogArticleTable posts={blogPosts} />
      </Box>
    </Layout>
  )
}

export const query = graphql`
  query BlogCategoryPage($slug: String!) {
    microcmsCategory(slug: { eq: $slug }) {
      slug
      name
      description
    }
    allMicrocmsPost(filter: { category: { slug: { eq: $slug } } }) {
      nodes {
        slug
        title
        overview
        publishedAt
        updatedAt
        category {
          slug
          name
        }
      }
    }
  }
`

export default BlogCategoryPage
