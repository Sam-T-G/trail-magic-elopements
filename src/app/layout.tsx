import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import LandingParallax from "./Components/LandingParallax";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Trail Magic Elopements",
	description: "Elopements and Microweddings",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				{children}
				<LandingParallax />
				<Footer />
			</body>
		</html>
	);
}
