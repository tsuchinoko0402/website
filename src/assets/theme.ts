import { createMuiTheme } from "@material-ui/core/styles"

export const theme = createMuiTheme({
  typography: {
    fontSize: 13,
    fontFamily: [
      "M PLUS 1p",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Fira Sans",
      "Droid Sans",
      "Helvetica Neue",
      "sans-serif",
    ].join(","),
    body1: {
      color: "#696969",
    },
    button: {
      textTransform: "none",
    },
  },
})
