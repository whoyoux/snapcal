"use client";

import { useTransition } from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { deleteMealAction } from "@/actions/meal";
import { useRouter } from "next/navigation";

type Props = {
	mealId: string;
};

function DeleteMealButton({ mealId }: Props) {
	const [isPending, startTransition] = useTransition();
	const router = useRouter();

	const deleteMeal = async () => {
		startTransition(async () => {
			toast.promise(deleteMealAction({ mealId }), {
				loading: "Removing...",
				success: (result) => {
					if (!result?.data?.success) {
						return {
							type: "error",
							message:
								result?.data?.message ||
								"An error has occured. Please try again later.",
						};
					}

					router.push("/dashboard");

					return {
						type: "success",
						message: "Success!",
					};
				},
				error: "An error has occured. Please try again later.",
			});
		});
	};
	return (
		<Button
			variant="destructive"
			className="cursor-pointer"
			size="sm"
			onClick={async () => await deleteMeal()}
			disabled={isPending}
		>
			Delete this meal
		</Button>
	);
}

export default DeleteMealButton;
