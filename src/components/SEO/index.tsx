/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet, HelmetProvider } from "react-helmet-async"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

type Meta =
  | {
      name: string
      content: any
    }
  | {
      property: string
      content: any
    }

interface Props {
  description?: string
  lang?: string
  meta?: Meta[]
  title: string
  image?: string
}

const SEO: React.FC<Props> = props => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title
            title
            description
            siteUrl
            image
            social {
              twitter
            }
          }
        }
      }
    `
  )

  const metaDescription = props.description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const imageUrl = staticOrDynamic(site.siteUrl + props.image)
  const url = `${site.siteUrl}${pathname}`

  return (
    <HelmetProvider>
      <Helmet
        htmlAttributes={{ lang: props.lang }}
        title={props.title}
        titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
        meta={[
          {
            name: `description`,
            content: metaDescription,
          },
          {
            property: `og:description`,
            content: metaDescription,
          },
          {
            name: `image`,
            content: imageUrl,
          },
          {
            property: `og:image`,
            content: imageUrl,
          },
          {
            property: `og:url`,
            content: url,
          },
          {
            property: `og:title`,
            content: props.title,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: site.siteMetadata?.social?.twitter || ``,
          },
          {
            name: `twitter:title`,
            content: props.title,
          },
          {
            name: `twitter:description`,
            content: metaDescription,
          },
          {
            name: `twitter:image`,
            content: imageUrl,
          },
        ].concat(props.meta)}
      />
    </HelmetProvider>
  )
}

SEO.defaultProps = {
  title: null,
  lang: `ja`,
  meta: [],
  description: null,
  image: null,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default SEO

function staticOrDynamic(imgPath: string) {
  const str = imgPath
  let array = str.split(/https:\/\//)
  //console.log('◆strは'+ str + '◆str.lengthは'+ str.length)
  //console.log('■arrayは', array)
  //console.log('■最終形 ' + 'https://' + array[2])
  return str.length <= 100 // 100文字以下ならstrをそのまま返す.100文字以上なら`https:// + array[2]`を返す。
    ? str
    : "https://" + array[2]
}
