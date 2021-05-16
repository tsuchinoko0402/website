import { createMuiTheme } from "@material-ui/core/styles"

export const theme = createMuiTheme({
  typography: {
    fontSize: 13,
    fontFamily: ["M PLUS 1p", "sans-serif"].join(","),
    h1: {
      fontSize: "3rem",
    },
    h2: {
      fontSize: "3.5rem",
    },
    h3: {
      fontSize: "3rem",
    },
    h4: {
      fontSize: "2rem",
    },
    h5: {
      fontSize: "1.5rem",
    },
    h6: {
      fontSize: "1.25rem",
    },
    body1: {
      color: "#696969",
    },
    button: {
      textTransform: "none",
    },
  },
})
