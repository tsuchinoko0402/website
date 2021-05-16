import {
  TableContainer,
  Paper,
  Table,
  TableBody,
  Typography,
  TableFooter,
  TableRow,
  TablePagination,
  createStyles,
  TableCell,
  Theme,
  withStyles,
} from "@material-ui/core"
import TablePaginationActions from "@material-ui/core/TablePagination/TablePaginationActions"
import { Link } from "gatsby"
import * as React from "react"
import { Util } from "../../Util"
import EventTwoToneIcon from "@material-ui/icons/EventTwoTone"
import UpdateIcon from "@material-ui/icons/Update"

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

interface BlogArticleTableProps {
  posts: BlogPost[]
}

export interface BlogPost {
  slug: string
  title: string
  publishedAt: string
  updatedAt: string
  overview: string
}

const BlogArticleTable: React.FC<BlogArticleTableProps> = ({ posts }) => {
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
    <>
      <TableContainer component={Paper}></TableContainer>
      <Table size="small">
        <TableBody>
          {(rowsPerPage > 0
            ? posts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : posts
          ).map(post => {
            const title = post.title || post.slug
            const publishedDate = Util.formatDate(
              new Date(Date.parse(post.publishedAt)),
              "YYYY年MM月DD日 hh:mm"
            )
            const updateedDate = Util.formatDate(
              new Date(Date.parse(post.updatedAt)),
              "YYYY年MM月DD日 hh:mm"
            )

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
                      <EventTwoToneIcon />
                      {publishedDate}　<UpdateIcon />
                      {updateedDate}
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
    </>
  )
}

export default BlogArticleTable
