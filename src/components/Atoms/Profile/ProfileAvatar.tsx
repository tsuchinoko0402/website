import React from "react"
import * as styles from "./ProfileAvatar.module.css"
import { Avatar, createStyles, makeStyles, Theme } from "@material-ui/core"
import { StaticImage } from "gatsby-plugin-image"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      width: theme.spacing(12),
      height: theme.spacing(12),
      margin: `3px`,
    },
  })
)

const ProfileAvatar: React.FC = () => {
  const classes = useStyles()
  return (
    <Avatar className={classes.avatar}>
      <StaticImage src="../../images/profile.png" alt="Profile" />
    </Avatar>
  )
}

export default ProfileAvatar
