"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import Picture1 from "../../../public/tme-kt-1.jpg";
import Picture2 from "../../../public/tme-kt-2.jpg";
import Picture3 from "../../../public/tme-kt-3.jpg";
import Picture4 from "../../../public/tme-kt-4.jpg";

const ZoomParallax = () => {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start start", "end end"],
	});

	const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
	const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
	const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
	const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);

	const pictures = [
		{
			src: Picture1,
			scale: scale4,
		},
		{
			src: Picture2,
			scale: scale4,
			// customStyle: {
			// 	marginTop: "-30vh",
			// 	marginLeft: "5vw",
			// 	width: "35vw",
			// 	height: "30vh",
			// },
		},
		{
			src: Picture3,
			scale: scale4,
		},
		{
			src: Picture4,
			scale: scale4,
		},
	];

	return (
		<div ref={container} className="h-[300vh] relative w-screen">
			<div className="sticky top-0 my-[50vh] h-screen bg-stone-800 w-screen overflow-hidden">
				{pictures.map(({ src, scale }, index) => {
					return (
						<div
							key={index}
							className="w-full h-full absolute top-0 flex items-center justify-center">
							<motion.div
								style={{ scale }}
								className="w-[25vw] h-[25vh] relative">
								<Image
									className="cover"
									src={src}
									alt="image"
									fill
									placeholder="blur"
								/>
							</motion.div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ZoomParallax;
