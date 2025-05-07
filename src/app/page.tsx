import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import placeholderImage from "@/assets/placeholder.webp";
import heroImage from "@/assets/hero.webp";
import { ArrowRight, Camera, ChartBar, Clock, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import Footer from "@/components/footer";

export default function Home() {
	return (
		<main className="flex flex-col gap-16 py-8">
			{/* Hero Section */}
			<section className="flex flex-col items-center text-center gap-8">
				<div className="w-full max-w-4xl aspect-video relative rounded-2xl overflow-hidden bg-muted border">
					<Image
						src={heroImage}
						alt="SnapCal in action"
						fill
						className="object-cover "
						placeholder="blur"
						priority
					/>
				</div>
				<div className="space-y-4 max-w-2xl">
					<h1 className="text-4xl md:text-5xl font-bold tracking-tight">
						Counting calories has never been easier
					</h1>
					<p className="text-xl text-muted-foreground">
						Take a photo of your meal, and we'll handle the rest. Track your
						diet in a simple and fast way.
					</p>
					<div className="flex gap-4 justify-center pt-4">
						<Link
							href="/dashboard"
							className={cn(buttonVariants({ variant: "default", size: "lg" }))}
						>
							Get Started
							<ArrowRight className="ml-2 h-4 w-4" />
						</Link>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="grid md:grid-cols-3 gap-8 max-w-5xl">
				<FeatureCard
					icon={<Camera className="h-12 w-12 text-primary" />}
					title="Quick Photos"
					description="Just take a photo of your meal, and our AI will analyze its contents"
				/>

				<FeatureCard
					icon={<ChartBar className="h-12 w-12 text-primary" />}
					title="Accurate Stats"
					description="Track your progress and maintain a healthy diet with detailed reports"
				/>
				<FeatureCard
					icon={<Clock className="h-12 w-12 text-primary" />}
					title="Time Saving"
					description="Don't waste time manually entering calories - take a photo and you're done"
				/>
			</section>

			{/* CTA Section */}
			<section className="text-center space-y-4 bg-muted py-16 rounded-2xl border">
				<h2 className="text-3xl font-bold">Ready for a Change?</h2>
				<p className="text-muted-foreground max-w-xl mx-auto">
					Join thousands of users who have already transformed their approach to
					healthy eating
				</p>

				<Link
					href="/dashboard"
					className={cn(
						buttonVariants({ variant: "default", size: "lg" }),
						"mt-4",
					)}
				>
					Start for Free
					<ArrowRight className="ml-2 h-4 w-4" />
				</Link>
			</section>

			<Footer />
		</main>
	);
}

type FeatureCardProps = {
	icon: React.ReactNode;
	title: string;
	description: string;
};

function FeatureCard({ icon, title, description }: FeatureCardProps) {
	return (
		<div className="flex flex-col items-center text-center gap-4 p-6 rounded-lg bg-muted border">
			{icon}
			<h3 className="text-xl font-semibold">{title}</h3>
			<p className="text-muted-foreground">{description}</p>
		</div>
	);
}
