import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Hi from the about page",
};

export default function AboutLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<section>
			<nav>About Navbar</nav>
			<main className="grid place-content-center min-h-screen">{children}</main>
		</section>
	);
}
