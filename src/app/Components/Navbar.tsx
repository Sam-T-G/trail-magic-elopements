import Link from "next/link";
import React from "react";
import Image from "next/image";

const Navbar = () => {
	return (
		<header className="text-slate-100 body-font bg-stone-400 h-auto">
			<div className="container mx-auto flex flex-col p-0 md:flex-row items-center justify-between">
				<a className="flex font-medium items-center md:mb-0">
					<Image
						className="h-auto w-auto ml-5"
						alt="logo-placeholder"
						src="/TME-Logo.png"
						width={200}
						height={100}></Image>
					<h1 className="hidden lg:block ml-3 text-2xl cursor-default"></h1>
				</a>
				<div className="flex flex-wrap items-center p-5">
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
						<button className="inline-flex items-cente border-0 bg-white text-amber-800 font-semibold py-1 px-3 focus:outline-none hover:bg-amber-800 transform transition-transform hover:scale-110 hover:text-white rounded-lg text-base">
							Contact
						</button>
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
