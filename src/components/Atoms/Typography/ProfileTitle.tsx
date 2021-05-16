import React from "react"
import * as styles from "./ProfileTitle.module.css"
import { Typography } from "@material-ui/core"

export interface ProfileTitleProps {
  name: string
}

const ProfileTitle: React.FC<ProfileTitleProps> = ({ name }) => {
  return (
    <Typography
      color="textPrimary"
      style={{ fontSize: `1.5em`, fontWeight: `bold` }}
      className={styles.profileTitle}
    >
      <span>{name}</span>
    </Typography>
  )
}

export default ProfileTitle
