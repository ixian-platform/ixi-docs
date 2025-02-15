import { PropsWithChildren } from "react"

import { ScrollArea } from "@/components/ui/scroll-area"

export function Typography({ children }: PropsWithChildren) {
  return (
    <ScrollArea className="py-4 px-4 h-full">
      <div className="typography pb-6">{children}</div>
    </ScrollArea>
  )
}
