import { IRelease } from "@/types/release";
import { env } from "@/../../packages/env/src/index"

import ReleasesList from "./releasesList";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@workspace/ui/components/carousel"

import TodoList from "./todoList";

const ErrorPage = () => (
	<div className="w-screen text-center pt-[12vh]">
		<h1 className="text-6xl">Ocorreu um erro!</h1>
		<span>tente recarregar a página.</span>
	</div>
)

export default async function Pages() {

	const getPageData = async (route:string) => {
		try {
			const res = await (await fetch(env.API_URL + route)).json()
			return res
		} catch (err) {
			console.error("Erro ao buscar dados:", err);
		}
	}

	const pages = {
		releases: await getPageData("release") || [],
		toDos: await getPageData("to-dos") || []
	}


	return (
		<>
			<Carousel className="">
				<CarouselContent draggable >
					<CarouselItem >
						{
							pages.releases.error? 
							<ErrorPage/>
							:
							<CarouselItem>
								<section className="h-screen">
									<header className="h-[25vh] md:h-[33vh] w-screen flex justify-center place-items-center">
										<h1 className="text-6xl text-shadow-lg">Life Logs</h1>
									</header>
									<main className="w-full">
										<ReleasesList list={pages.releases} />
									</main>
								</section>
							</CarouselItem>
						}
					</CarouselItem>
					<CarouselItem>
						{
							pages.toDos.error?
							<ErrorPage/>
								:
							<section className="h-screen">
								<header className="h-[25vh] md:h-[33vh] w-screen flex justify-center place-items-center">
									<h1 className="text-6xl text-shadow-lg">Todo list</h1>
								</header>
								<main className="w-full">
									<TodoList list={pages.toDos} />
								</main>
							</section>
						}
					</CarouselItem>
				</CarouselContent>
				<CarouselPrevious className="left-10 size-15"/>
				<CarouselNext className="right-5 size-15" />
			</Carousel>

		</>
	)
}