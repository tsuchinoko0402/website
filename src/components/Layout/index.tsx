import { Box, createStyles, makeStyles, Theme } from "@material-ui/core"
import React from "react"
import Footer from "../Organisms/Footer"
import Header from "../Organisms/Header"
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider"
import { theme } from "../../assets/theme"

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <Header siteTitle="OKAZAKI Shogo's Website" />
      <main
        style={{
          padding: `80px 10px 20px 10px`,
        }}
      >
        {children}
      </main>
      <Footer />
    </MuiThemeProvider>
  )
}

export default Layout
