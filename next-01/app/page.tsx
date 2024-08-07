import Link from "next/link";

export default function Home() {
	return (
		<main
			className="
        relative
        min-h-screen
      "
		>
			<h1
				className="
        text-3xl 
        absolute
        mx-auto
        top-24 bottom-0 inset-x-0
        text-center
        h-max"
			>
				Hello World!
			</h1>
			<Link
				href="/about"
				className="
          absolute bottom-40 left-0 right-0
          text-center
          mx-auto
          italic underline text-teal-400"
			>
				Go to about page!
			</Link>
		</main>
	);
}
