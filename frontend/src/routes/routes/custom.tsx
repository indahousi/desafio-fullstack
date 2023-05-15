import React from 'react'
import { Helmet } from 'react-helmet-async'

interface SeoRouteProps {
  title?: string
  description?: string
  canonical?: string
  children?: React.ReactNode
}

export const RequireSeo = ({
  title,
  description,
  canonical,
  children,
}: SeoRouteProps) => {
  let urlCanonical = canonical || window.location.href
  if (!urlCanonical.match(/.*\/$/m)) urlCanonical += '/'

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <link rel="canonical" href={urlCanonical} />
        <link rel="alternate" hrefLang="pt-br" href={urlCanonical} />
        <script type="application/ld+json">
          {`
              {
                "@context":"http://schema.org",
                "@type":"BreadcrumbList",
                "itemListElement":[ 
                    { 
                      "@type":"ListItem",
                      "position":1,
                      "name":"Housi",
                      "item":"https://pay.housi.com/"
                    },
                    { 
                      "@type":"ListItem",
                      "position":2,
                      "name":"${title}",
                      "item":"${urlCanonical}"
                    }
                ]

              }
            `}
        </script>
      </Helmet>
      {children}
    </>
  )
}
