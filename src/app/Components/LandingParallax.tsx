"use client";
import { useRef } from "react";
import Picture1 from "../../../public/tme-kt-1.jpg";
import Picture2 from "../../../public/tme-kt-2.jpg";
import Picture3 from "../../../public/tme-kt-3.jpg";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const LandingParallax = () => {
	const container = useRef(null);
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
		<div ref={container} className="mt-[10vh] min-h-[100vh]">
			<div className="left-[10vw]">
				<motion.h1 style={{ y: sm }}>Parallax</motion.h1>
				<h1>Scroll</h1>
				<div className=""{styles.word}>
					<p>
						{word.split("").map((letter, i) => {
							const y = useTransform(
								scrollYProgress,
								[0, 1],
								[0, Math.floor(Math.random() * -75) - 25]
							);
							return (
								<motion.span style={{ top: y }} key={`l_${i}`}>
									{letter}
								</motion.span>
							);
						})}
					</p>
				</div>
			</div>
			<div className="flex w-full justify-center relative mt-[5vh]">
				{images.map(({ src, y }, i) => {
					return (
						<motion.div
							style={{ y }}
							key={`i_${i}`}
							className=""{styles.imageContainer}>
							<Image src={src} placeholder="blur" alt="image" fill />
						</motion.div>
					);
				})}
			</div>
		</div>
	);
};

export default LandingParallax;
