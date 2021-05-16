import React from "react"
import * as styles from "./SiteMenuItem.module.css"
import { IconButton, MenuItem, Typography } from "@material-ui/core"
import { Link } from "gatsby"

export interface SiteMenuItemProps {
  text: string
  icon: React.ReactNode
  path: string
  label: string
}

const SiteMenuItem: React.FC<SiteMenuItemProps> = props => {
  const { text, icon, path, label } = props
  return (
    <MenuItem component={Link} to={path}>
      <IconButton aria-label={label} color="inherit">
        {icon}
      </IconButton>
      <p>{text}</p>
    </MenuItem>
  )
}

export default SiteMenuItem
