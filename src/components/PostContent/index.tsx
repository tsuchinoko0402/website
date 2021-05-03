import { Box, Typography } from "@material-ui/core"
import React from "react"

interface Props {
  title: string
  publishedAt: string
  updatedAt: string
  content: string
}

const PostContent: React.FC<Props> = props => {
  const { title, publishedAt, updatedAt, content } = props
  return (
    <article>
      <header>
        <Typography variant="h3" color="textPrimary" component="h1">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          作成：{publishedAt}, 更新：{updatedAt}
        </Typography>
      </header>
      <Box>
        <Typography>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </Typography>
      </Box>
    </article>
  )
}

export default PostContent
