import { Documents } from "@/settings/documents"

export interface PathBase {
  spacer?: boolean
}

export interface PathWithSpacer extends PathBase {
  spacer: true
}

export interface PathWithoutSpacer extends PathBase {
  title: string
  href: string
  noLink?: true
  heading?: string
  items?: Path[]
  spacer?: false
}

export type Path = PathWithSpacer | PathWithoutSpacer

export const Routes: Path[] = [...Documents]

type Page = { title: string; href: string }

function isRoute(
  node: Path
): node is Extract<Path, { title: string; href: string }> {
  return "title" in node && "href" in node
}

function getAllLinks(node: Path): Page[] {
  const pages: Page[] = []

  if (isRoute(node) && !node.noLink) {
    pages.push({ title: node.title, href: node.href })
  }

  if (isRoute(node) && node.items) {
    node.items.forEach((subNode) => {
      if (isRoute(subNode)) {
        const temp = { ...subNode, href: `${node.href}${subNode.href}` }
        pages.push(...getAllLinks(temp))
      }
    })
  }

  return pages
}

export const PageRoutes = Routes.map((it) => getAllLinks(it)).flat()

console.log(PageRoutes)
