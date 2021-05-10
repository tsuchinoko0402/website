import * as React from "react"
import { graphql, PageProps } from "gatsby"
import Layout from "../../components/Layout"
import PostContent from "../../components/PostContent"

const BlogPostPage: React.FC<PageProps<GatsbyTypes.BlogPageQuery>> = props => {
  const post = props.data.microcmsPost
  return (
    <Layout>
      <title>{post.title}</title>
      <meta name="blog" content={`${post.title}`} />
      <PostContent
        title={post.title}
        publishedAt={post.publishedAt}
        updatedAt={post.updatedAt}
        content={post.content}
      />
    </Layout>
  )
}

export const query = graphql`
  query BlogPage($id: String!) {
    microcmsPost(id: { eq: $id }) {
      slug
      title
      content
      publishedAt(formatString: "YYYY.DD.MM hh:mm")
      updatedAt(formatString: "YYYY.DD.MM hh:mm")
      category {
        slug
        name
      }
    }
  }
`

export default BlogPostPage
