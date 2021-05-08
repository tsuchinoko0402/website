import * as React from "react"
import { Link, graphql, PageProps } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  Theme,
  Typography,
  createStyles,
  makeStyles,
  withStyles,
  TableFooter,
  TablePagination,
  Button,
} from "@material-ui/core"
import TablePaginationActions from "@material-ui/core/TablePagination/TablePaginationActions"

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

const BlogIndex: React.FC<PageProps<GatsbyTypes.BlogIndexPageQuery>> = ({
  data,
}) => {
  const posts = data.allMicrocmsPost.nodes
  const categories = data.allMicrocmsCategory.nodes
  const tags = data.allMicrocmsTag.nodes

  if (posts.length === 0) {
    return (
      <Layout>
        <SEO title="All posts" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  return (
    <Layout>
      <SEO title="All posts" />
      <Typography variant="h4" color="textPrimary" component="h4">
        ブログ
      </Typography>
      <Typography variant="body1" color="textPrimary" component="p">
        試行錯誤したりあれこれ考えてみた記録。
      </Typography>
      <Box style={{ margin: `10px 10px 20px 10px` }}>
        <TableContainer component={Paper}></TableContainer>
        <Table size="small">
          <TableBody>
            {(rowsPerPage > 0
              ? posts.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : posts
            ).map(post => {
              const title = post.title || post.slug
              return (
                <>
                  <StyledTableRow key={post.slug}>
                    <StyledTableCell align="left">
                      <Typography
                        variant="body1"
                        color="textPrimary"
                        component="p"
                      >
                        <Link
                          to={post.slug}
                          rel="noreferrer noopener"
                          target="_blank"
                        >
                          {title}
                        </Link>
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {post.publishedAt}
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {post.overview}
                    </StyledTableCell>
                  </StyledTableRow>
                </>
              )
            })}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[10, 25, 50, { label: "All", value: -1 }]}
                colSpan={3}
                count={posts.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { "aria-label": "rows per page" },
                  native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </Box>
      <Box style={{ margin: `10px 10px 20px 10px` }}>
        <Typography>カテゴリ一覧</Typography>
        {categories.map(category => {
          return (
            <Button
              variant="outlined"
              size="small"
              style={{ textTransform: "none" }}
            >
              <Typography variant="body1" color="textPrimary">
                {category.name}
              </Typography>
            </Button>
          )
        })}
      </Box>
      <Box style={{ margin: `10px 10px 20px 10px` }}>
        <Typography>タグ一覧</Typography>
        {tags.map(tag => {
          return (
            <Button
              variant="outlined"
              size="small"
              style={{ textTransform: "none" }}
            >
              <Typography variant="body1" color="textPrimary">
                {tag.name}
              </Typography>
            </Button>
          )
        })}
      </Box>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexPage {
    allMicrocmsPost {
      nodes {
        slug
        title
        overview
        content
        publishedAt(formatString: "YYYY/MM/DD　hh:mm:ss")
        updatedAt(formatString: "YYYY/MM/DD　hh:mm:ss")
        category {
          slug
          name
        }
        tag {
          name
          slug
        }
      }
    }
    allMicrocmsCategory {
      nodes {
        slug
        name
        description
      }
    }
    allMicrocmsTag {
      nodes {
        name
        slug
      }
    }
  }
`
