import Link from "next/link";
import React from "react";

const Navbar = () => {
	return (
		<header>
			<div>
				<a>
					<div>Logo</div>
					<h1>Trail Magic Elopements</h1>
				</a>
			</div>
			<div>
				<nav>
					<Link href="/">
						<span className="">Home</span>
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
