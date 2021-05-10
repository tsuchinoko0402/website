import * as React from "react"
import { graphql, Link, PageProps } from "gatsby"
import Layout from "../../../components/Layout"
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableCell,
  TableFooter,
  TablePagination,
  TableRow,
  Typography,
  Theme,
  createStyles,
  makeStyles,
  withStyles,
} from "@material-ui/core"
import SEO from "../../../components/SEO"
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

const BlogTagPage: React.FC<PageProps<GatsbyTypes.BlogTagPageQuery>> = ({
  data,
}) => {
  const posts = data.allMicrocmsPost.nodes
  const tagName = data.microcmsTag.name
  const tagSlug = data.microcmsTag.slug

  if (posts.length === 0) {
    return (
      <Layout>
        <SEO title={`No page in tag:${tagSlug}`} />
        <p>No blog posts found in tag:{tagName}.</p>
      </Layout>
    )
  }

  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

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
      <SEO title={`タグ：${tagName} 一覧`} />
      <title>タグ：{tagName} 一覧</title>
      <Typography variant="h3" color="textPrimary" component="h3">
        タグ：{tagName} のブログ記事一覧
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
                          to={`/blog/${post.slug}`}
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
    </Layout>
  )
}

export const query = graphql`
  query BlogTagPage($slug: String!) {
    microcmsTag(slug: { eq: $slug }) {
      slug
      name
      description
    }
    allMicrocmsPost(filter: { tag: { elemMatch: { slug: { eq: $slug } } } }) {
      nodes {
        slug
        title
        content
        publishedAt(formatString: "YYYY.MM.DD hh:mm")
        tag {
          slug
          name
        }
      }
    }
  }
`

export default BlogTagPage
