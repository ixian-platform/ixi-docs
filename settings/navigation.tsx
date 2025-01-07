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
]

export const GitHubLink = {
  href: "https://github.com/ProjectIxian",
}
