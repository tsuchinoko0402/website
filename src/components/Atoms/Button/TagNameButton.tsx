import React from "react"
import * as styles from "./TagNameButton.module.css"
import { Button, Typography } from "@material-ui/core"
import { Link } from "gatsby"

export interface TagNameButtonProps {
  slug: string
  name: string
}

const TagNameButton: React.FC<TagNameButtonProps> = ({ slug, name }) => {
  return (
    <Button
      variant="outlined"
      size="small"
      style={{ textTransform: "none" }}
      component={Link}
      to={`/blog/tags/${slug}`}
    >
      <Typography variant="body1" color="textPrimary">
        {name}
      </Typography>
    </Button>
  )
}

export default TagNameButton
