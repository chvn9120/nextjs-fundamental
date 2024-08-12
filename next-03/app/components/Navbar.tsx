import React from "react";
import Link from "next/link";
import Search from "./Search";

export default function Navbar() {
	return (
		<nav
			className="
              bg-slate-600 p-4 drop-shadow-xl
                flex flex-col justify-between
                md:flex-row 
                sticky top-0 "
		>
			<h1
				className="text-3xl font-bold text-white 
                    mb-2 md:mb-0
                    grid place-content-center"
			>
				<Link href="/">WikiRocket!</Link>
			</h1>
			<Search />
		</nav>
	);
}
