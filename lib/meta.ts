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
  title,
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

  title: title,
  metadataBase: url,
  description: description,
  siteicon: siteicon,
  keywords: keywords,
  openGraph: {
    type: "website",
    title: title,
    description: description,
    siteName: sitename,
    url: url,
    images: [
      {
        url: urlimage,
        width: 1200,
        height: 630,
        alt: imagealt,
      },
    ],
  } as OpenGraph,
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    site: twitterhandle,
    url: url,
    images: [
      {
        url: urlimage,
        alt: imagealt,
      },
    ],
  } as TwitterCard,
  canonical: url,
}
