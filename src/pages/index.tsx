import { graphql, Link, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { Facebook, GitHub, Mail, Twitter } from "@material-ui/icons"
import * as React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      width: theme.spacing(12),
      height: theme.spacing(12),
      margin: `3px`,
    },
    icon: {
      color: theme.palette.primary.main,
    },
  })
)

const IndexPage: React.FC<PageProps<GatsbyTypes.IndexPageQuery>> = ({
  data,
}) => {
  const classes = useStyles()
  return (
    <Layout>
      <SEO title="Top" />
      <title>Top</title>
      <Card>
        <CardHeader title="About Me" style={{ textAlign: "center" }} />
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="flex-start"
        >
          <Grid item justify="center">
            <Avatar className={classes.avatar}>
              <StaticImage src="../images/profile.png" alt="Profile" />
            </Avatar>
            <a href={"mailto:" + data.site.siteMetadata.social.mail}>
              <Mail className={classes.icon} />
            </a>
            <Link
              to={"https://github.com/" + data.site.siteMetadata.social.github}
              rel="noreferrer noopener"
              target="_blank"
            >
              <GitHub className={classes.icon} />
            </Link>
            <Link
              to={
                "https://twitter.com/" + data.site.siteMetadata.social.twitter
              }
              rel="noreferrer noopener"
              target="_blank"
            >
              <Twitter className={classes.icon} />
            </Link>
            <Link
              to={
                "https://www.facebook.com/" +
                data.site.siteMetadata.social.facebook
              }
              rel="noreferrer noopener"
              target="_blank"
            >
              <Facebook className={classes.icon} />
            </Link>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body1" color="textPrimary" component="p">
              <dl>
                <dt>名前</dt>
                <dd>岡&#64017;　正悟</dd>
              </dl>
              <dl>
                <dt>所属</dt>
                <dd>
                  <Link
                    to="https://www.linkode.co.jp/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    株式会社リンコード
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
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPage {
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
