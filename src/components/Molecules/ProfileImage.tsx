import { Grid } from "@material-ui/core"
import * as React from "react"
import FacebookIcon from "../Atoms/Icon/FacebookIcon"
import GitHubIcon from "../Atoms/Icon/GitHubIcon"
import MailIcon from "../Atoms/Icon/MailIcon"
import TwitterIcon from "../Atoms/Icon/TwitterIcon"
import ProfileAvatar from "../Atoms/Image/ProfileAvatar"

interface ProfileImageProps {
  mailAddress: string
  githubId: string
  twitterId: string
  facebookId: string
}

const ProfileImage: React.FC<ProfileImageProps> = ({
  mailAddress,
  githubId,
  twitterId,
  facebookId,
}) => {
  const SocialIcons: React.FC = () => {
    return (
      <React.Fragment>
        <Grid item xs={3} sm={3} justify="center" spacing={0}>
          <MailIcon address={mailAddress} />
        </Grid>
        <Grid item xs={3} sm={3} justify="center" spacing={0}>
          <GitHubIcon id={githubId} />
        </Grid>
        <Grid item xs={3} sm={3} justify="center" spacing={0}>
          <TwitterIcon id={twitterId} />
        </Grid>
        <Grid item xs={3} sm={3} justify="center" spacing={0}>
          <FacebookIcon id={facebookId} />
        </Grid>
      </React.Fragment>
    )
  }

  return (
    <Grid container xs={12} justify="flex-start" spacing={1}>
      <Grid container item justify="center" xs spacing={1}>
        <ProfileAvatar />
      </Grid>
      <Grid container item spacing={1}>
        <SocialIcons />
      </Grid>
    </Grid>
  )
}

export default ProfileImage
