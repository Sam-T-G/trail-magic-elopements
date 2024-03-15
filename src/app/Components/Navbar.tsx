import Link from "next/link";
import React from "react";

const Navbar = () => {
	return (
		<header className="text-gray-600">
			<div className="container mx-auto flex flex-wrap p5 md:flex-row items-center justify-between">
				<a className="flex font-medium items-center md:mb-0">
					<div className="">Logo</div>
					<h1 className="">Trail Magic Elopements</h1>
				</a>
			</div>
			<div className="flex flex-wrap items-center">
				<nav className="md:ml-auto flex flex-wrap items-center justify-center">
					<Link href="/">
						<span className="flex mr-5 transform transition-transform hover:scale-110 cursor-pointer">
							Home
						</span>
					</Link>
					<Link href="/">
						<span className="flex mr-5 transform transition-transform hover:scale-110 cursor-pointer">
							About
						</span>
					</Link>
					<Link href="/">
						<span className="flex mr-5 transform transition-transform hover:scale-110 cursor-pointer">
							Pricing
						</span>
					</Link>
				</nav>
				<Link href="/projects">
					<button className="inline-flex items-center border-indigo-600 border-2 bg-white text-indigo-600 font-semibold py-1 px-3 focus:outline-none hover:bg-indigo-600 transform transition-transform hover:scale-110 hover:text-white rounded-lg text-base">
						Contact
					</button>
				</Link>
			</div>
		</header>
	);
};

export default Navbar;
