import React from "react"
import * as styles from "./MenuButton.module.css"
import { Button, Typography } from "@material-ui/core"
import { Link } from "gatsby"

export interface MenuButtonProps {
  text: string
  icon: React.ReactNode
  path: string
}

const MenuButton: React.FC<MenuButtonProps> = props => {
  const { text, icon, path } = props
  return (
    <Button
      size="medium"
      startIcon={props.icon}
      color="primary"
      component={Link}
      to={props.path}
    >
      <Typography
        variant="button"
        color="inherit"
        align="center"
        noWrap
        className={styles.btn}
      >
        {props.text}
      </Typography>
    </Button>
  )
}

export default MenuButton
