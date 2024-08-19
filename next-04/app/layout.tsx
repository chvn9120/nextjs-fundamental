import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import MyProfilePicture from "./components/MyProfilePicture";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Huy's Blog",
	description: "Created by Công Huy",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} dark:bg-slate-800`}>
				<Navbar />
				<MyProfilePicture />
				{children}
			</body>
		</html>
	);
}
