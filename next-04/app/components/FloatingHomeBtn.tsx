"use client";

import { Variants, motion, useAnimationControls, useScroll } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

const FloatingHomeContainerVariants: Variants = {
	hide: { opacity: 0, y: 100 },
	show: { opacity: 1, y: 0 },
};

export default function FloatingHomeBtn() {
	const { scrollYProgress } = useScroll();
	const controls = useAnimationControls();

	useEffect(() => {
		return scrollYProgress.on("change", (latestValue) => {
			if (latestValue > 0.5) {
				controls.start("show");
			} else {
				controls.start("hide");
			}
		});
	});

	return (
		<motion.button variants={FloatingHomeContainerVariants} initial="hide" animate={controls}>
			<Link
				href={"/"}
				className="
				no-underline italic						
				backdrop-blur-sm bg-black/60
				inline-flex items-center px-4 py-2
				border border-transparent rounded-md font-semibold text-white"
			>
				← Home
			</Link>
		</motion.button>
	);
}
