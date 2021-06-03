import { Box, Typography } from "@material-ui/core"
import React from "react"
import cheerio from "cheerio"
import hljs from "highlight.js"
import "highlight.js/styles/solarized-dark.css"
import PageTitle from "../Atoms/Typography/PageTitle"
import EventTwoToneIcon from "@material-ui/icons/EventTwoTone"
import UpdateIcon from "@material-ui/icons/Update"
import Toc from "./Toc"
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

  const $ = cheerio.load(content)

  // コードブロックにシンタックスハイライトを適用するためのクラスを追加
  $("pre code").each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text())
    $(elm).html(result.value)
    $(elm).addClass("hljs")
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
      <Toc htmlString={content} />
      <Box>
        <Typography>
          <div dangerouslySetInnerHTML={{ __html: $.html() }} />
        </Typography>
      </Box>
    </article>
  )
}

export default PostContent
