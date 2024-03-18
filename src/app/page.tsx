import React from "react";
import Image from "next/image";

const App = () => {
	return (
		<div className="container flex flex-wrap">
			<div
				className="w-full h-screen bg-cover bg-center relative"
				style={{ backgroundImage: "url('/tme-hero.jpg')" }}>
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
