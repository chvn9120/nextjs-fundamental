"use client";

import Link from "next/dist/client/link";
import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div>
			<h2>Something went wrong!</h2>
			<button onClick={() => reset()}>Try again</button>
            <br />
			<Link href={"/"} className="italic underline text-teal-400">
				Back to home page!
			</Link>
		</div>
	);
}
