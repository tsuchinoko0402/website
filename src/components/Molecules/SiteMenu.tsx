import React from "react"
import * as styles from "./SiteMenu.module.css"
import { Menu } from "@material-ui/core"
import MoreIcon from "@material-ui/icons/MoreVert"
import DirectionsRunRoundedIcon from "@material-ui/icons/DirectionsRunRounded"
import MenuBookIcon from "@material-ui/icons/MenuBook"
import HomeIcon from "@material-ui/icons/Home"
import ReceiptOutlinedIcon from "@material-ui/icons/ReceiptOutlined"
import CollectionsBookmarkIcon from "@material-ui/icons/CollectionsBookmark"
import SiteMenuItem from "../Atoms/Item/SiteMenuItem"

interface SiteMenuState {
  anchorEl: any
  handleMobileMenuClose: () => void
  isMobileMenuOpen: boolean
}

const SiteMenu: React.FC<SiteMenuState> = ({
  anchorEl,
  handleMobileMenuClose,
  isMobileMenuOpen,
}) => {
  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id="primary-search-account-menu-mobile"
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <SiteMenuItem
        text="トップ"
        icon={<HomeIcon />}
        path="/"
        label="top page"
      />
      <SiteMenuItem
        text="個人的な活動"
        icon={<DirectionsRunRoundedIcon />}
        path="/personal"
        label="personal activity"
      />
      <SiteMenuItem
        text="ブログ"
        icon={<MenuBookIcon />}
        path="/blog"
        label="blog"
      />
      <SiteMenuItem
        text="メモ"
        icon={<ReceiptOutlinedIcon />}
        path="/memo"
        label="memo"
      />
      <SiteMenuItem
        text="記事"
        icon={<CollectionsBookmarkIcon />}
        path="/posts"
        label="posts"
      />
    </Menu>
  )
}

export default SiteMenu
