import {
  Box,
  createStyles,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Theme,
  Typography,
  withStyles,
} from "@material-ui/core"
import { graphql, Link, PageProps } from "gatsby"
import * as React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell)

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
)(TableRow)

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
})

const PostsPage: React.FC<PageProps<GatsbyTypes.PostsPageQuery>> = ({
  data,
}) => {
  const classes = useStyles()
  return (
    <Layout>
      <SEO title="投稿したもの" />
      <title>投稿したもの</title>
      <Typography variant="body1" color="textPrimary" component="p">
        他所のサービスに投稿したものの一覧です。
        <ul>
          <li>
            <a href="#Qiita">Qiita</a>
          </li>
          <li>
            <a href="#note">note</a>
          </li>
        </ul>
      </Typography>
      <Box style={{ margin: `10px 10px 20px 10px` }}>
        <Typography variant="h5" color="textPrimary" component="h5">
          <div id="Qiita">Qiita</div>
        </Typography>
        <Typography variant="body2" color="textPrimary" component="p">
          技術記事を投稿してます。
        </Typography>
        <TableContainer component={Paper}>
          <Table
            className={classes.table}
            size="small"
            aria-label="qiita table"
          >
            <TableHead>
              <TableRow>
                <StyledTableCell>投稿日</StyledTableCell>
                <StyledTableCell align="left">記事タイトル</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.allFeedQiita.nodes.map(post => (
                <StyledTableRow key={post.link}>
                  <StyledTableCell component="th" scope="row">
                    {post.pubDate}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <Link
                      to={post.link}
                      rel="noreferrer noopener"
                      target="_blank"
                    >
                      {post.title}
                    </Link>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box style={{ margin: `10px 10px 20px 10px` }}>
        <Typography variant="h5" color="textPrimary" component="h5">
          <div id="note">note</div>
        </Typography>
        <Typography variant="body2" color="textPrimary" component="p">
          主にボーイスカウト活動をしてて思ったことや感じたことを書いてます。
        </Typography>
        <TableContainer component={Paper}>
          <Table
            className={classes.table}
            size="small"
            aria-label="qiita table"
          >
            <TableHead>
              <TableRow>
                <StyledTableCell>投稿日</StyledTableCell>
                <StyledTableCell align="left">記事タイトル</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.allFeednote.nodes.map(post => {
                const date = new Date(post.pubDate)
                const formattedDate = `${date.getFullYear()}/${(
                  "00" +
                  (date.getMonth() + 1)
                ).slice(-2)}/${("00" + date.getDate()).slice(-2)}`
                return (
                  <StyledTableRow key={post.link}>
                    <StyledTableCell component="th" scope="row">
                      {formattedDate}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <Link
                        to={post.link}
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        {post.title}
                      </Link>
                    </StyledTableCell>
                  </StyledTableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  )
}

export const query = graphql`
  query PostsPage {
    allFeednote {
      nodes {
        link
        title
        pubDate
      }
    }
    allFeedQiita {
      nodes {
        link
        title
        pubDate(formatString: "YYYY/MM/DD")
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default PostsPage
