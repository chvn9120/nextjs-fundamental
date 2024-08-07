import Link from "next/link";

export default function About() {
	// throw Error("Not today!");
	return (
		<>
			<h1 className="text-3xl">About</h1>
			<Link href={"/"} className="italic underline text-teal-400">
				Go to home page!
			</Link>
		</>
	);
}
