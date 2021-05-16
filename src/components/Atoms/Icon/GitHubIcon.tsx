import React from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core"
import { GitHub } from "@material-ui/icons"
import { Link } from "gatsby"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      color: theme.palette.primary.main,
    },
  })
)

export interface GitHubIconProps {
  id: string
}

const GitHubIcon: React.FC<GitHubIconProps> = ({ id }) => {
  const classes = useStyles()
  return (
    <Link
      to={"https://github.com/" + id}
      rel="noreferrer noopener"
      target="_blank"
    >
      <GitHub className={classes.icon} />
    </Link>
  )
}

export default GitHubIcon
