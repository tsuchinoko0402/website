import * as React from "react"
import { Link, graphql, PageProps } from "gatsby"
import Layout from "../../components/Layout"
import Seo from "../../components/SEO"
import { Typography } from "@material-ui/core"
import PageTitle from "../../components/Atoms/Typography/PageTitle"

const BlogPostTemplate: React.FC<
  PageProps<GatsbyTypes.MemoPostBySlugQuery>
> = ({ data }) => {
  const post = data.markdownRemark
  const { previous, next } = data

  return (
    <Layout>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article className="memo-content" itemScope>
        <header>
          <PageTitle name={post.frontmatter.title} />
          <Typography variant="body2" color="textSecondary" component="p">
            {post.frontmatter.date}
          </Typography>
        </header>
        <Typography variant="body1">
          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />
          <hr />
        </Typography>
        <footer></footer>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query MemoPostBySlug($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        publishedDate(formatString: "YYYY/MM/DD")
        updatedDate(formatString: "YYYY/MM/DD")
        description
      }
    }
  }
`
