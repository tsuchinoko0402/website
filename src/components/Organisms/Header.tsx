import {
  AppBar,
  createStyles,
  makeStyles,
  Theme,
  Toolbar,
  Slide,
  IconButton,
} from "@material-ui/core"
import {
  MoreVert,
  DirectionsRunRounded,
  MenuBook,
  Home,
  CollectionsBookmark,
} from "@material-ui/icons"
import React from "react"
import { useScrollTrigger } from "@material-ui/core"
import SiteNameButton from "../Atoms/Button/SiteNameButton"
import MenuButton from "../Atoms/Button/MenuButton"
import SiteMenu from "../Molecules/SiteMenu"

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

  const handleMobileMenuClose = (): void => {
    setMobileMoreAnchorEl(null)
  }

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>): void => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const mobileMenuId = "primary-search-account-menu-mobile"
  const renderMobileMenu = (
    <SiteMenu
      anchorEl={mobileMoreAnchorEl}
      handleMobileMenuClose={handleMobileMenuClose}
      isMobileMenuOpen={isMobileMenuOpen}
    />
  )

  return (
    <header>
      <HideOnScroll {...props}>
        <AppBar position="fixed">
          <Toolbar className={classes.toolbar}>
            <SiteNameButton siteTitle={siteTitle} />
            <div className={classes.grow}></div>
            <div className={classes.sectionDesktop}>
              <MenuButton text="トップ" icon={<Home />} path="/" />
              <MenuButton
                text="個人的な活動"
                icon={<DirectionsRunRounded />}
                path="/personal"
              />
              <MenuButton text="ブログ" icon={<MenuBook />} path="/blog" />
              <MenuButton text="メモ" icon={<Home />} path="/memo" />
              <MenuButton
                text="記事"
                icon={<CollectionsBookmark />}
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
                <MoreVert />
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
