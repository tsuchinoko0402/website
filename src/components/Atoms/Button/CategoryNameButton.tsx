import React from "react"
import * as styles from "./CategoryNameButton.module.css"
import { Button, Typography } from "@material-ui/core"
import { Link } from "gatsby"

export interface CategoryNameButtonProps {
  slug: string
  name: string
}

const CategoryNameButton: React.FC<CategoryNameButtonProps> = ({
  slug,
  name,
}) => {
  return (
    <Button
      variant="outlined"
      size="small"
      style={{ textTransform: "none" }}
      component={Link}
      to={`/blog/categories/${slug}`}
    >
      <Typography variant="body1" color="textPrimary">
        {name}
      </Typography>
    </Button>
  )
}

export default CategoryNameButton
