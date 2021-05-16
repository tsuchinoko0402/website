import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./TopImage.module.css"

const TopImage: React.FC = () => {
  return (
    <>
      <StaticImage
        src="../../../images/top_image.png"
        alt="Profile"
        className={styles.image}
      />
    </>
  )
}

export default TopImage
