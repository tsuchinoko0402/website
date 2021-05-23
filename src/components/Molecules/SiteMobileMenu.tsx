import React from "react"
import * as styles from "./SiteMenu.module.css"
import { Menu } from "@material-ui/core"
import {
  MenuBook,
  Home,
  DirectionsRunRounded,
  ReceiptOutlined,
  CollectionsBookmark,
} from "@material-ui/icons"
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
      <SiteMenuItem text="トップ" icon={<Home />} path="/" label="top page" />
      <SiteMenuItem
        text="個人的な活動"
        icon={<DirectionsRunRounded />}
        path="/personal"
        label="personal activity"
      />
      <SiteMenuItem
        text="ブログ"
        icon={<MenuBook />}
        path="/blog"
        label="blog"
      />
      <SiteMenuItem
        text="メモ"
        icon={<ReceiptOutlined />}
        path="/memo"
        label="memo"
      />
      <SiteMenuItem
        text="記事"
        icon={<CollectionsBookmark />}
        path="/posts"
        label="posts"
      />
    </Menu>
  )
}

export default SiteMenu
