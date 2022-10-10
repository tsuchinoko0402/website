import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@material-ui/core"
import { graphql, Link, useStaticQuery } from "gatsby"
import * as React from "react"
import ProfileTitle from "../Atoms/Typography/ProfileTitle"
import ProfileImage from "../Molecules/ProfileImage"
import * as styles from "./ProfileCard.module.css"

const ProfileCard: React.FC = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            social {
              mail
              twitter
              facebook
              github
            }
          }
        }
      }
    `
  )

  return (
    <Card className={styles.profileCard}>
      <CardHeader
        title={<ProfileTitle name="About Me" />}
        style={{ textAlign: "center" }}
      />
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="flex-start"
      >
        <Grid item xs={3} justify="center">
          <ProfileImage
            mailAddress={data.site.siteMetadata.social.mail}
            githubId={data.site.siteMetadata.social.github}
            twitterId={data.site.siteMetadata.social.twitter}
            facebookId={data.site.siteMetadata.social.facebook}
          />
        </Grid>
        <Grid item xs={9}>
          <Typography variant="body1" color="textPrimary" component="p">
            <dl>
              <dt>名前</dt>
              <dd>岡&#64017;　正悟</dd>
            </dl>
            <dl>
              <dt>所属</dt>
              <dd>
                <Link
                  to="https://www.monotaro.com/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  株式会社MonotaRO
                </Link>
              </dd>
            </dl>
            <p>
              大阪でシステムエンジニアをやってます。以前は大手 SIer にて Java,
              VB.NET の開発、現在は AWS
              を用いたサーバーレスな開発やインフラ開発に携わっています。
            </p>
          </Typography>
        </Grid>
      </Grid>
      <CardContent></CardContent>
    </Card>
  )
}

export default ProfileCard
