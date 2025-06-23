"use client"

import { ILog } from "@/types/log";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@workspace/ui/components/accordion";
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button";

import { marked } from 'marked';
import { useState } from "react";

export default function LogsList({list}:{list:ILog[]}) {
  const [tab, setTab] = useState("completed")
  return (
      <section>
        <Button onClick={() => setTab(tab == "completed"? "uncompleted" : "completed")} className="absolute bottom-5 right-5 z-99 bg-blue-600 text-white rounded-lg pd-4">
          {tab == "completed" ? "incompletas ->" : "finalizadas ->"}
        </Button>
        {
          tab == "completed" ?
          <Accordion
          type="single"
          collapsible
          className="w-full flex flex-col place-items-center gap-6"
          defaultValue="item-1"
          >
            {
              list.filter((i) => i.status == "completed").map((i, index) => (
              <AccordionItem key={i.id} value={"item-" + index} className="w-[90%] shadow-lg border border-gray-200 rounded-lg p-6">
                <AccordionTrigger className="text-2xl flex justify-start font-mono">
                  {i.version} <span className="opacity-50 ">{i.name}</span>
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
                      dangerouslySetInnerHTML={{ __html: marked.parse(i.content) }}
                      className=""
                    />
                </AccordionContent>
              </AccordionItem>
              ))
            }
          </Accordion>
        :
          <Accordion
            type="single"
            collapsible
            className="w-full flex flex-col place-items-center gap-6"
            defaultValue="item-1"
          >
            {
              list.filter((i) => i.status == "uncompleted").map((i, index) => (
              <AccordionItem key={i.id} value={"item-" + index} className="w-[90%] shadow-lg border border-gray-200 rounded-lg p-6">
                <AccordionTrigger className="text-2xl flex justify-start font-mono">
                  {i.version} <span className="opacity-50 ">{i.name}</span>
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
                      dangerouslySetInnerHTML={{ __html: marked.parse(i.content) }}
                      className=""
                    />
                </AccordionContent>
              </AccordionItem>
              ))
            }
          </Accordion>
        }
      </section>
  )
}