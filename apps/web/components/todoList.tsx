"use client"

import { ITodo } from "@/types/todo";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@workspace/ui/components/accordion";
import { Badge } from "@workspace/ui/components/badge"

import { converter } from "@workspace/ui/lib/showdown"
import { useState } from "react";

export default function TodoList({list}:{list:ITodo[]}) {
  return (
      <section>
          <Accordion
          type="single"
          collapsible
          className="w-full flex flex-col place-items-center gap-6"
          defaultValue="item-1"
          >
            {
              list.map((i, index) => (
              <AccordionItem key={i.id} value={"item-" + index} className="w-[80%] shadow-lg border border-gray-200 rounded-lg p-6">
                <AccordionTrigger className="text-xl font-mono">
                  <div>
                    {i.title}
                    <p className="opacity-50 ">{i.created_at}</p>
                  </div>
                </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <div className="opacity-50">
                      {i.created_at}
                    </div>
                    <div className="flex gap-1">
                      {i.bedges?.map((i) => (
                        <Badge key={i.title} variant={i.variant}>{i.title}</Badge>
                      ))}
                    </div>
                    <div 
                      key={i.id}
                      dangerouslySetInnerHTML={{ __html:  converter.makeHtml(i.content)}}
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