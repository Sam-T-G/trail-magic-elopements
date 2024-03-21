import React from "react";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="text-slate-100 body-font bg-stone-400 h-auto">
			<div className="container px-5 py-8 mx-auto flex flex-col justify-between items-center sm:flex-row">
				<a className="flex title-font font-medium items-center md:justify-start justify-center">
					Footer Content
				</a>
				<div className="flex flex-wrap items-center">
					<nav className="md:ml-auto flex flex-wrap items-center justify-center">
						<Link href="/">
							<span className="flex mr-5 transform transition-transform hover:scale-110 cursor-pointer">
								Home
							</span>
						</Link>
						<Link href="/about">
							<span className="flex mr-5 transform transition-transform hover:scale-110 cursor-pointer">
								About
							</span>
						</Link>
						<Link href="/contact">
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
		</footer>
	);
};

export default Footer;
