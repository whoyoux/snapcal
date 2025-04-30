"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { startTransition } from "react";

function TransitionButton({ mealId }: { mealId: string }) {
	const router = useRouter();

	return (
		<Button
			size="sm"
			onClick={() =>
				startTransition(() => {
					console.log("tranistion");
					router.push(`/meal/${mealId}`);
				})
			}
		>
			See
		</Button>
	);
}

export default TransitionButton;
