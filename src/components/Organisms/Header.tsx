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
import SiteNameButton from "../Atoms/Button/SitenameButton"
import MenuButton from "../Atoms/Button/MenuButton"

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
            <SiteNameButton siteTitle={siteTitle} />
            <div className={classes.grow}></div>
            <div className={classes.sectionDesktop}>
              <MenuButton text="トップ" icon={<HomeIcon />} path="/" />
              <MenuButton
                text="個人的な活動"
                icon={<DirectionsRunRoundedIcon />}
                path="/personal"
              />
              <MenuButton text="ブログ" icon={<MenuBookIcon />} path="/blog" />
              <MenuButton text="メモ" icon={<HomeIcon />} path="/memo" />
              <MenuButton
                text="記事"
                icon={<CollectionsBookmarkIcon />}
                path="/posts"
              />
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
