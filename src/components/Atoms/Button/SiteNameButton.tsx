import React from "react"
import * as styles from "./SiteNameButton.module.css"
import { Button, Typography } from "@material-ui/core"
import { Link } from "gatsby"

export interface SiteNameButtonProps {
  siteTitle: string
}

const SiteNameButton: React.FC<SiteNameButtonProps> = props => {
  const siteTitle = props.siteTitle
  return (
    <Button size="large" component={Link} to="/">
      <Typography
        variant="subtitle1"
        color="inherit"
        align="left"
        noWrap
        className={styles.btn}
        style={{
          fontSize: `1.25rem`,
          color: `#3e62ad`,
        }}
      >
        {siteTitle}
      </Typography>
    </Button>
  )
}

export default SiteNameButton
