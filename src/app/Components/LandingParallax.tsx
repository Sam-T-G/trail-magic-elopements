"use client";
import { useRef } from "react";
import Picture1 from "../../../public/tme-kt-1.jpg";
import Picture2 from "../../../public/tme-kt-2.jpg";
import Picture3 from "../../../public/tme-kt-3.jpg";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const LandingParallax = () => {
	const container = useRef(null);

	// Call useScroll() hook within the component where the ref is defined
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "end start"],
	});

	const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
	const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
	const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

	const images = [
		{
			src: Picture1,
			y: 0,
		},
		{
			src: Picture2,
			y: lg,
		},
		{
			src: Picture3,
			y: md,
		},
	];

	return (
		<div className="container flex flex-wrap mt-[10vh] min-h-[100vh] min-w-full h-[2800] justify-center">
			<div className=" justify-center flex w-full">
				<motion.h1 style={{ y: sm }} className="flex w-auto h-auto">
					Parallax
				</motion.h1>
				<h1 className="flex w-auto h-auto">Scroll</h1>
			</div>
			<div className="flex w-full justify-center mt-[5vh]" ref={container}>
				{/* Ensure that the ref is applied to the relevant element */}
				{images.map(({ src, y }, i) => {
					return (
						<motion.div className="absolute" style={{ y }} key={`i_${i}`}>
							<Image
								src={src}
								className="cover"
								placeholder="blur"
								alt="image"
							/>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
};

export default LandingParallax;
