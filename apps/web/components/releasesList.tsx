"use client"

import { IRelease } from "@/types/release";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@workspace/ui/components/accordion";
import { Badge } from "@workspace/ui/components/badge"

import { converter } from "@workspace/ui/lib/showdown"

export default function ReleasesList({ list }: { list: IRelease[] }) {
  return (
    <section>
      <Accordion
        type="single"
        collapsible
        className="flex flex-col place-items-center gap-6"
        defaultValue="item-1"
      >
        {
          list.filter((i) => i.status == "completed").map((i, index) => (
            <AccordionItem key={i.id} value={"item-" + index} className="w-[80%] shadow-lg border border-gray-200 rounded-lg p-6">
              <AccordionTrigger className="text-2xl flex justify-start font-mono">
                {i.version} <span className="opacity-50 ">{i.nickName}</span>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <div className="opacity-50">
                  {i.date}
                </div>
                <div className="flex gap-1">
                  {i.bedges?.map((i) => (
                    <Badge key={i.title} variant={i.variant}>{i.title}</Badge>
                  ))}
                </div>
                <div
                  key={i.id}
                  dangerouslySetInnerHTML={{ __html: converter.makeHtml(i.content) }}
                  className=""
                />
              </AccordionContent>
            </AccordionItem>
          ))
        }
      </Accordion>

    </section>
  )
}