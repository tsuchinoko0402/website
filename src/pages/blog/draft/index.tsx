import React, { useEffect, useState } from "react"
import { PageProps } from "gatsby"
import queryString from "query-string"

import Layout from "../../../components/Layout"
import SEO from "../../../components/SEO"
import PostContent from "../../../components/Organisms/PostContent"

const BlogDraftPage: React.FC<PageProps> = ({ location }) => {
  const { contentId, draftKey } = queryString.parse(location.search)
  let [data, setData] = useState(null)

  useEffect(() => {
    if (!data) {
      fetch(
        `https://okazaki-shogo.microcms.io/api/v1/post/${contentId}?draftKey=${draftKey}`,
        {
          headers: {
            "X-API-KEY": process.env.MICROCMS_API_KEY,
          },
        }
      )
        .then(res => {
          if (res.ok) {
            return res.json()
          }
        })
        .then(res => {
          data = setData(res)
        })
    } else {
      return function cleanup() {
        console.log("done")
      }
    }
  }, [])

  return (
    <Layout>
      <title>{data?.title}</title>
      <div>これは下書きです。</div>
      <SEO
        title={data?.title}
        // description={data.microcmsPost?.description}
        // image={data.microcmsPost?.ogimage?.url}
      />
      <PostContent
        title={data?.title}
        publishedAt={data?.publishedAt}
        updatedAt={data?.updatedAt}
        content={data?.content}
      />
    </Layout>
  )
}

export default BlogDraftPage
