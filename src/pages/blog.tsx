import * as React from "react"
import { graphql, PageProps } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Box, Typography } from "@material-ui/core"
import TagNameButton from "../components/Atoms/Button/TagNameButton"
import CategoryNameButton from "../components/Atoms/Button/CategoryNameButton"
import PageTitle from "../components/Atoms/Typography/PageTitle"
import BlogArticleTable, {
  BlogPost,
} from "../components/Organisms/BlogArticleTable"

const BlogIndex: React.FC<PageProps<GatsbyTypes.BlogIndexPageQuery>> = ({
  data,
}) => {
  const posts = data.allMicrocmsPost.nodes
  const categories = data.allMicrocmsCategory.nodes
  const tags = data.allMicrocmsTag.nodes

  if (posts.length === 0) {
    return (
      <Layout>
        <SEO title="All posts" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
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
      <SEO title="All posts" />
      <PageTitle name="ブログ" />
      <Typography variant="body1" color="textPrimary" component="p">
        試行錯誤したりあれこれ考えてみた記録。
      </Typography>
      <Box style={{ margin: `10px 10px 20px 10px` }}>
        <BlogArticleTable posts={blogPosts} />
      </Box>
      <Box style={{ margin: `10px 10px 20px 10px` }}>
        <Typography>カテゴリ一覧</Typography>
        {categories.map(category => {
          return (
            <CategoryNameButton slug={category.slug} name={category.name} />
          )
        })}
      </Box>
      <Box style={{ margin: `10px 10px 20px 10px` }}>
        <Typography>タグ一覧</Typography>
        {tags.map(tag => {
          return <TagNameButton slug={tag.slug} name={tag.name} />
        })}
      </Box>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexPage {
    allMicrocmsPost {
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
        tag {
          name
          slug
        }
      }
    }
    allMicrocmsCategory {
      nodes {
        slug
        name
        description
      }
    }
    allMicrocmsTag {
      nodes {
        name
        slug
      }
    }
  }
`
