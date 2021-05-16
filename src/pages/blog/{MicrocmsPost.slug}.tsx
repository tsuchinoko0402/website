import * as React from "react"
import { graphql, PageProps } from "gatsby"
import Layout from "../../components/Layout"
import PostContent from "../../components/Organisms/PostContent"
import { Util } from "../../Util"

const BlogPostPage: React.FC<PageProps<GatsbyTypes.BlogPageQuery>> = props => {
  const post = props.data.microcmsPost
  const publishedDate = Util.formatDate(
    new Date(Date.parse(post.publishedAt)),
    "YYYY年MM月DD日 hh:mm:ss"
  )
  const updatedDate = Util.formatDate(
    new Date(Date.parse(post.updatedAt)),
    "YYYY年MM月DD日 hh:mm:ss"
  )
  return (
    <Layout>
      <title>{post.title}</title>
      <meta name="blog" content={`${post.title}`} />
      <PostContent
        title={post.title}
        publishedAt={publishedDate}
        updatedAt={updatedDate}
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
      publishedAt
      updatedAt
      category {
        slug
        name
      }
    }
  }
`

export default BlogPostPage
