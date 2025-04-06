"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UploadImageFormSchema } from "@/schemas/upload-image-schema";
import { toast } from "sonner";
import { useTransition } from "react";
import { calculateCalories } from "@/actions/calculate-calories";

function UploadImageForm() {
	const [isPending, startTransition] = useTransition();

	const form = useForm<z.infer<typeof UploadImageFormSchema>>({
		resolver: zodResolver(UploadImageFormSchema),
		defaultValues: {
			image: undefined,
		},
	});

	async function onSubmit(values: z.infer<typeof UploadImageFormSchema>) {
		const fd = new FormData();
		fd.append("image", values.image);

		startTransition(async () => {
			toast.promise(calculateCalories(fd), {
				loading: "Loading ...",
				success: (result) => {
					console.log(result?.data?.text)
					return "Success!";
				},
				error: "An error has occured. Please try again later.",
			});
		});
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
				<FormField
					control={form.control}
					name="image"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Image</FormLabel>
							<FormControl>
								<Input
									type="file"
									accept="image/jpeg,image/png,image/webp"
									onChange={(e) => {
										const file = e.target.files?.[0];
										field.onChange(file);
									}}
								/>
							</FormControl>
							<FormDescription>
								Supported formats: PNG, JPG up to 10MB
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit" disabled={isPending}>
					Calculate
				</Button>
			</form>
		</Form>
	);
}

export default UploadImageForm;
