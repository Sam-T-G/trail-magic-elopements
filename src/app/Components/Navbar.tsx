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
						<span className="">Home</span>
					</Link>
					<Link href="/">
						<span className="">About</span>
					</Link>
					<Link href="/">
						<span className="">Pricing</span>
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
