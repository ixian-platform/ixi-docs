import { PageRoutes } from "@/lib/pageroutes"

export interface Navigation {
  title: string
  href: string
  external?: boolean
}

export const Navigations: Navigation[] = [
  {
    title: "Technical Docs",
    href: `/docs${PageRoutes[0].href}`,
  },
  {
    title: "API Docs",
    href: `/docs${PageRoutes[8].href}`,
  },
  {
    title: "Demos",
    href: `/docs${PageRoutes[72].href}`,
  },
  {
    title: "Guides",
    href: `/docs${PageRoutes[75].href}`,
  },
]

export const GitHubLink = {
  href: "https://github.com/ixian-platform",
}

export const links = {
  ixian: "https://www.ixian.io/",
  ixiscope: "https://explorer.ixian.io/",
  spixi: "https://www.spixi.io/",
  downloads: "https://www.ixian.io/get-involved#resources",
}
