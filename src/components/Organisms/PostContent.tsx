import { Box, Typography } from "@material-ui/core"
import React from "react"
import cheerio from "cheerio"
import hljs from "highlight.js"
import "highlight.js/styles/solarized-dark.css"
import PageTitle from "../Atoms/Typography/PageTitle"
import EventTwoToneIcon from "@material-ui/icons/EventTwoTone"
import UpdateIcon from "@material-ui/icons/Update"
interface Props {
  title: string
  publishedAt: string
  updatedAt: string
  content: string
}

const PostContent: React.FC<Props> = props => {
  const { title, publishedAt, updatedAt, content } = props

  if (!content) {
    return <p>No blog article.</p>
  }

  const contentBody = cheerio.load(content)
  contentBody("pre code").each((_, elm) => {
    const result = hljs.highlightAuto(contentBody(elm).text())
    contentBody(elm).html(result.value)
    contentBody(elm).addClass("hljs")
  })

  return (
    <article>
      <header>
        <PageTitle name={title} />
        <Typography variant="body2" color="textSecondary" component="p">
          <EventTwoToneIcon />
          {publishedAt} <UpdateIcon />
          {updatedAt}
        </Typography>
      </header>
      <Box>
        <Typography>
          {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}
          <div dangerouslySetInnerHTML={{ __html: contentBody.html() }} />
        </Typography>
      </Box>
    </article>
  )
}

export default PostContent
