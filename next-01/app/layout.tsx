import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Hi",
	description: "This my side front-end project",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<nav className="sticky top-0 bg-black opacity-10 z-50">
					<h1 className="text-3xl">My Navbar</h1>
				</nav>
				{children}
			</body>
		</html>
	);
}
