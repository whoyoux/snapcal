import Image from "next/image";

import placeholderImage from "@/assets/placeholder.webp";

export default function Home() {
	return (
		<div className="flex flex-col gap-8">
			<div className="w-full aspect-video relative">
				<Image
					src={placeholderImage}
					alt="placeholder"
					fill
					className="bg-muted rounded-xl object-cover"
					placeholder="blur"
				/>
			</div>
			<div className="text-center space-y-4">
				<h2 className="text-3xl font-bold">
					Count your calories just by making an photo!
				</h2>
				<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
					SnapCal is an innovative app that lets you track your calories in a
					simple and fast way. Just take a picture of your meal and we&apos;ll
					do the rest!
				</p>
			</div>
		</div>
	);
}
