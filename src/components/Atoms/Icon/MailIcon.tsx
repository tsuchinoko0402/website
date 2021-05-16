import React from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core"
import { Mail } from "@material-ui/icons"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      color: theme.palette.primary.main,
    },
  })
)

export interface MailIconProps {
  address: string
}

const MailIcon: React.FC<MailIconProps> = ({ address }) => {
  const classes = useStyles()
  return (
    <a href={"mailto:" + address}>
      <Mail className={classes.icon} />
    </a>
  )
}

export default MailIcon
