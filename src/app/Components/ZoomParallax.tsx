import React from "react";
import Image from "next/image";
import { useScroll } from "framer-motion";
import Picture1 from "../../../public/tme-kt-1.jpg";
import Picture2 from "../../../public/tme-kt-2.jpg";
import Picture3 from "../../../public/tme-kt-3.jpg";
import Picture4 from "../../../public/tme-kt-4.jpg";

const ZoomParallax = () => {
	const container = useRef(null);

	return (
		<div className="h-[300vh] relative w-screen">
			<div className="sticky top-0 my-[50vh] h-screen bg-orange-500 w-screen">
				<div className="w-full h-full absolute top-0 flex items-center justify-center">
					<div className="w-[25vw] h-[25vh] relative">
						<Image
							className="cover"
							src={Picture1}
							alt="image"
							fill
							placeholder="blur"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ZoomParallax;
