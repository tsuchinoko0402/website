import { Box, Typography } from "@material-ui/core"
import { Link } from "gatsby"
import React from "react"

const Footer: React.FC = () => {
  return (
    <footer>
      <Box textAlign="right">
        <Typography variant="body1" component="p" color="textSecondary">
          &copy; 2021&ensp;
          <a href="mailto:okazaki@zakioka.net">OKAZAKI Shogo</a>
        </Typography>
        <Typography variant="body1" component="p" color="textSecondary">
          Powered by{" "}
          <Link
            to="https://www.gatsbyjs.com/"
            rel="noreferrer noopener"
            target="_blank"
          >
            Gatsby
          </Link>
          +
          <Link
            to="https://material-ui.com/"
            rel="noreferrer noopener"
            target="_blank"
          >
            Material-UI
          </Link>
        </Typography>
      </Box>
    </footer>
  )
}

export default Footer
