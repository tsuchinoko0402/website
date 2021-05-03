import { Box, createStyles, makeStyles, Theme } from "@material-ui/core"
import React from "react"
import Footer from "../Footer"
import Header from "../Header"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    background: {
      background: theme.palette.grey[100],
      margin: `0px`,
    },
  })
)

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  const classes = useStyles()
  return (
    <Box className={classes.background}>
      <Header siteTitle="OKAZAKI Shogo's Website" />
      <main
        style={{
          padding: `80px 20px 20px 10px`,
        }}
      >
        {children}
      </main>
      <Footer />
    </Box>
  )
}

export default Layout
