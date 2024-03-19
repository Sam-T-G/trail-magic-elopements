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
				<div className="container min-w-full flex flex-col p-0 m-0 justify-center items-center">
					<div className="font-semibold text-4xl p-1 m-5 flex justify-center">
						Trail Magic
					</div>
				</div>
			</main>
		</>
	);
};

export default App;
