import React, { useEffect, useState } from "react"
import { PageProps } from "gatsby"
import queryString from "query-string"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import PostContent from "../../components/Organisms/PostContent"

const BlogPage: React.FC<PageProps<GatsbyTypes.BlogPageQuery>> = ({
  location,
}) => {
  const { contentId, draftKey } = queryString.parse(location.search)
  const [data, setData] = useState<GatsbyTypes.BlogPageQuery | null>(null)

  useEffect(() => {
    fetch(
      `https://okazaki-shogo.microcms.io/api/v1/post/${contentId}?draftKey=${draftKey}`,
      {
        headers: {
          "X-API-KEY": "your-api-key",
        },
      }
    )
      .then(res => res.json())
      .then(res => setData({ microcmsPost: res })) // ※1
  }, []) // ※2

  if (data === null) {
    return null
  }

  return (
    <Layout>
      <SEO
        title={data.microcmsPost?.title}
        description={data.microcmsPost?.description}
        image={data.microcmsPost?.ogimage?.url}
      />
      <PostContent
        title={data.microcmsNews?.title}
        publishedAt={data.microcmsNews?.publishedAt}
        updatedAt={data.microcmsNews?.updatedAt}
        content={data.microcmsNews?.content}
      />
    </Layout>
  )
}

export default BlogPage
