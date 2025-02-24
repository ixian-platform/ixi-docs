import {
  description,
  feedbackedit,
  gtm,
  gtmconnected,
  imagealt,
  keywords,
  loadfromgithub,
  rightsidebar,
  siteicon,
  sitename,
  tableofcontent,
  totopscroll,
  twitterhandle,
  url,
  urlimage,
} from "@/settings/settings"

import { OpenGraph, TwitterCard } from "@/lib/metadata"

export const Settings = {
  gtm: gtm,
  gtmconnected: gtmconnected,
  rightbar: rightsidebar,
  toc: tableofcontent,
  feedback: feedbackedit,
  totop: totopscroll,
  gitload: loadfromgithub,

  title: sitename,
  metadataBase: url,
  description: description,
  siteicon: siteicon,
  keywords: keywords,
  openGraph: {
    type: "website",
    title: sitename,
    description: description,
    siteName: sitename,
    url: url,
    images: [
      {
        url: `${url}${urlimage}`,
        width: 1200,
        height: 630,
        alt: imagealt,
      },
    ],
  } as OpenGraph,
  twitter: {
    card: "summary_large_image",
    title: sitename,
    description: description,
    site: twitterhandle,
    images: [
      {
        url: `${url}${urlimage}`,
        alt: imagealt,
      },
    ],
  } as TwitterCard,
  canonical: url,
}
