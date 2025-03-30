import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

import Header from "@/components/header";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

// const geistMono = Geist_Mono({
// 	variable: "--font-geist-mono",
// 	subsets: ["latin"],
// });

export const metadata: Metadata = {
	title: "SnapCal",
	description: "SnapCal - find calories ",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} font-sans antialiased`}>
				<div className="px-4 md:px-0">
					<Header />
					<div className="max-w-screen-md mx-auto pt-4">{children}</div>
				</div>
			</body>
		</html>
	);
}
