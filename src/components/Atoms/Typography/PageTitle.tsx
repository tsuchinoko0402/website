import React from "react"
import * as styles from "./PageTitle.module.css"
import { Typography } from "@material-ui/core"

export interface PageTitleProps {
  name: string
}

const PageTitle: React.FC<PageTitleProps> = ({ name }) => {
  return (
    <Typography
      style={{ fontSize: `2.5rem`, fontWeight: "bold", margin: `2px` }}
      color="textPrimary"
    >
      {name}
    </Typography>
  )
}

export default PageTitle
