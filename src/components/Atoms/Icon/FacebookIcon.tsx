import React from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core"
import { Facebook } from "@material-ui/icons"
import { Link } from "gatsby"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      color: theme.palette.primary.main,
    },
  })
)

export interface FacebookIconProps {
  id: string
}

const FacebookIcon: React.FC<FacebookIconProps> = ({ id }) => {
  const classes = useStyles()
  return (
    <Link
      to={"https://www.facebook.com/" + id}
      rel="noreferrer noopener"
      target="_blank"
    >
      <Facebook className={classes.icon} />
    </Link>
  )
}

export default FacebookIcon
