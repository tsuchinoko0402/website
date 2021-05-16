import React from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core"
import { Twitter } from "@material-ui/icons"
import { Link } from "gatsby"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      color: theme.palette.primary.main,
    },
  })
)

export interface TwitterIconProps {
  id: string
}

const TwitterIcon: React.FC<TwitterIconProps> = ({ id }) => {
  const classes = useStyles()
  return (
    <Link
      to={"https://twitter.com/" + id}
      rel="noreferrer noopener"
      target="_blank"
    >
      <Twitter className={classes.icon} />
    </Link>
  )
}

export default TwitterIcon
