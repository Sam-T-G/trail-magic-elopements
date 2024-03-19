import React from "react";

const App = () => {
	return (
		<>
			<main className="container min-w-full flex flex-col">
				<div className="container min-w-full flex flex-col items-center">
					<div
						className="w-auto h-auto bg-cover bg-center flex justify-center relative"
						style={{
							backgroundImage: "url('/tme-hero.jpg')",
							minWidth: "100vw",
							minHeight: "100vh",
						}}>
						<div className="absolute inset-0 flex flex-col justify-center items-center">
							<h1 className="text-4xl text-white font-bold">
								Elopement Photographer & Planner
							</h1>
							<p className="text-xl text-white mt-2">
								Crafting wedding experiences rooted in adventure, meaning, &
								community
							</p>
						</div>
					</div>
				</div>
				<div className="container min-w-full flex flex-col p-0 my-5 justify-center items-center">
					<div className="font-semibold text-4xl p-1 m-5 flex justify-center">
						Trail Magic
					</div>
					<div className="">
						<h1 className="font-semibold">
							WHAT IS TRAIL MAGIC?
							<p className="font-normal">
								Although commonly understood as being a kind act of service that
								a stranger or community member leaves on trail for thru hikers,
								Trail magic is defined by the Appalachian Trail Conservancy as
								something even more magical, “Finding what you need most when
								you least expect it; experiencing something rare, extraordinary,
								or inspiring in nature.”
							</p>
						</h1>
					</div>
					<div className="container min-w-full flex flex-col p-0 my-5 justify-center items-center">
						<div>placeholder photo feature</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default App;
