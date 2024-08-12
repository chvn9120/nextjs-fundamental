"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
	const router = useRouter();
	const [search, setSearch] = useState("");

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSearch(""); // reset search value
		router.push(`/${search}/`);
	};

	return (
		<form
			action=""
			className="w-50
                flex justify-center md:justify-between"
			onSubmit={handleSubmit}
		>
			<input
				type="text"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				className="bg-white p-2 w-80 text-xl rounded-xl"
				placeholder="Search"
				autoFocus
				name=""
				id=""
			/>
			<button
				className="
                        p-2 text-xl rounded-xl
                        bg-slate-300 ml-2 font-bold"
			>
				🚀
			</button>
		</form>
	);
}
