import React from "react";

const App = () => {
	return (
		<div className="container flex flex-wrap w-screen h-screen">
			<div
				className="w-full h-full bg-cover bg-center flex justify-center relative"
				style={{
					backgroundImage: "url('/tme-hero.jpg')",
					minWidth: "100dvw",
					minHeight: "100dvh",
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
	);
};

export default App;
