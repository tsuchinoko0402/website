/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet, HelmetProvider } from "react-helmet-async"
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
}

const Seo: React.FC<Props> = props => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
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
            property: `og:title`,
            content: props.title,
          },
          {
            property: `og:description`,
            content: metaDescription,
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
        ].concat(props.meta)}
      />
    </HelmetProvider>
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
