"use client";

import { Variants, motion, useAnimationControls, useScroll } from "framer-motion";
import { useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

interface ScrollToOptions {
	left?: number;
	top?: number;
	behavior?: "auto" | "smooth";
}

const ScrollToTopContainerVariants: Variants = {
	hide: { opacity: 0, y: 100 },
	show: { opacity: 1, y: 0 },
};

export default function ScrollToTopBtn() {
	const { scrollYProgress } = useScroll();
	const controls = useAnimationControls();
	
	const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

	const scrollToTopOpt: ScrollToOptions = {
		top: 0,
		left: undefined,
		behavior: "smooth",
	};

	function scrollToTop() {
		if (!isBrowser()) return;
		window.scrollTo(scrollToTopOpt);
	}

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
		<motion.button
			className="backdrop-blur-sm bg-black/60 p-4 rounded-full text-white"
			variants={ScrollToTopContainerVariants}
			initial="hide"
			animate={controls}
			onClick={scrollToTop}
		>
			<FaArrowUp />
		</motion.button>
	);
}
