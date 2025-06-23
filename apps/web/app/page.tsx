import { Button } from "@workspace/ui/components/button"
import LogsList from "@/components/logsList"
import { ILog } from "@/types/log"

export default async function Page() {


  const list:ILog[] = await (await fetch("http://localhost:8000/log")).json();
  
  return (
    <>
      <div>
        <header className="h-[25vh] md:h-[33vh] w-screen flex justify-center place-items-center">
          <h1 className="text-6xl text-shadow-lg">Life Logs</h1>
        </header>
        <main className="w-screen">
          <LogsList list={list}/>
        </main>
      </div> 
      
    </>
  )
}


