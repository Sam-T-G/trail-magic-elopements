"use client";
import { useRef } from "react";
import styles from "../../app/page.module.scss";
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

	return <div>LandingParallax</div>;
};

export default LandingParallax;
