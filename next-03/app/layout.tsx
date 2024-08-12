import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Small Project 1",
	description: "Client Components",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`bg-slate-800`}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
