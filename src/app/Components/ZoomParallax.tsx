import React from "react";
import Image from "next/image";
import Picture1 from "../../../public/tme-kt-1.jpg";
import Picture2 from "../../../public/tme-kt-2.jpg";
import Picture3 from "../../../public/tme-kt-3.jpg";
import Picture4 from "../../../public/tme-kt-4.jpg";

const ZoomParallax = () => {
	return (
		<div className="h-[300vh] relative w-screen">
			<div className="sticky top-0 h-screen bg-orange-500 w-screen">
				content
			</div>
		</div>
	);
};

export default ZoomParallax;
