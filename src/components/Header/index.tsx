import {
  AppBar,
  Button,
  createStyles,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
  Slide,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core"
import MoreIcon from "@material-ui/icons/MoreVert"
import DirectionsRunRoundedIcon from "@material-ui/icons/DirectionsRunRounded"
import MenuBookIcon from "@material-ui/icons/MenuBook"
import HomeIcon from "@material-ui/icons/Home"
import ReceiptOutlinedIcon from "@material-ui/icons/ReceiptOutlined"
import CollectionsBookmarkIcon from "@material-ui/icons/CollectionsBookmark"
import { Link } from "gatsby"
import React from "react"
import { useScrollTrigger } from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    toolbar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
      background: `${theme.palette.info.light}`,
    },
    toolbarTitle: {
      flex: 1,
      margin: `0px 10px 0px 0px`,
      textTransform: "none",
    },
    toolbarSecondary: {
      justifyContent: "space-between",
      overflowX: "auto",
    },
    toolbarLink: {
      padding: theme.spacing(1),
      flexShrink: 0,
    },
    activeStyle: {
      background: "#19448e",
      color: "#eaf4fc",
      fontWeight: "bold",
    },
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
  })
)

// アクティブになった項目は色を反転させる
const ActiveStyles = {
  background: "#19448e",
  color: "#eaf4fc",
  fontWeight: "bold",
}

function HideOnScroll(props: Props) {
  const { children } = props
  const trigger = useScrollTrigger()
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

interface Props {
  siteTitle: string
  children?: React.ReactElement
}

const Header: React.FC<Props> = props => {
  const classes = useStyles()
  const { siteTitle } = props

  const [
    mobileMoreAnchorEl,
    setMobileMoreAnchorEl,
  ] = React.useState<null | HTMLElement>(null)

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const mobileMenuId = "primary-search-account-menu-mobile"
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem component={Link} to="/">
        <IconButton aria-label="top page" color="inherit">
          <HomeIcon />
        </IconButton>
        <p>トップ</p>
      </MenuItem>
      <MenuItem component={Link} to="/personal">
        <IconButton aria-label="personal activity" color="inherit">
          <DirectionsRunRoundedIcon />
        </IconButton>
        <p>個人的な活動</p>
      </MenuItem>
      <MenuItem component={Link} to="/blog">
        <IconButton aria-label="blog" color="inherit">
          <MenuBookIcon />
        </IconButton>
        <p>ブログ</p>
      </MenuItem>
      <MenuItem component={Link} to="/memo">
        <IconButton aria-label="memo" color="inherit">
          <ReceiptOutlinedIcon />
        </IconButton>
        <p>メモ</p>
      </MenuItem>
      <MenuItem component={Link} to="/posts">
        <IconButton aria-label="posts" color="inherit">
          <CollectionsBookmarkIcon />
        </IconButton>
        <p>記事</p>
      </MenuItem>
    </Menu>
  )
  return (
    <header>
      <HideOnScroll {...props}>
        <AppBar position="fixed">
          <Toolbar className={classes.toolbar}>
            <Link to="/">
              <Button size="large" component={Link} to="/">
                <Typography
                  variant="subtitle1"
                  color="inherit"
                  align="left"
                  noWrap
                  className={classes.toolbarTitle}
                >
                  {siteTitle}
                </Typography>
              </Button>
            </Link>
            <div className={classes.grow}></div>
            <div className={classes.sectionDesktop}>
              <Button
                size="medium"
                startIcon={<HomeIcon />}
                color="primary"
                component={Link}
                to="/"
                activeStyle={ActiveStyles}
              >
                <Typography
                  variant="button"
                  color="inherit"
                  align="center"
                  noWrap
                  className={classes.toolbarTitle}
                >
                  トップ
                </Typography>
              </Button>
              <Button
                size="medium"
                startIcon={<DirectionsRunRoundedIcon />}
                color="primary"
                component={Link}
                to="/personal"
                activeStyle={ActiveStyles}
              >
                <Typography
                  variant="button"
                  color="inherit"
                  align="center"
                  noWrap
                  className={classes.toolbarTitle}
                >
                  個人的な活動
                </Typography>
              </Button>
              <Button
                size="medium"
                startIcon={<MenuBookIcon />}
                color="primary"
                component={Link}
                to="/blog"
                activeStyle={ActiveStyles}
              >
                <Typography
                  variant="button"
                  color="inherit"
                  align="center"
                  noWrap
                  className={classes.toolbarTitle}
                >
                  ブログ
                </Typography>
              </Button>
              <Button
                size="medium"
                startIcon={<ReceiptOutlinedIcon />}
                color="primary"
                component={Link}
                to="/memo"
                activeStyle={ActiveStyles}
              >
                <Typography
                  variant="button"
                  color="inherit"
                  align="center"
                  noWrap
                  className={classes.toolbarTitle}
                >
                  メモ
                </Typography>
              </Button>
              <Button
                size="medium"
                startIcon={<CollectionsBookmarkIcon />}
                color="primary"
                component={Link}
                to="/posts"
                activeStyle={ActiveStyles}
              >
                <Typography
                  variant="button"
                  color="inherit"
                  align="center"
                  noWrap
                  className={classes.toolbarTitle}
                >
                  記事
                </Typography>
              </Button>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      {renderMobileMenu}
    </header>
  )
}

export default Header
