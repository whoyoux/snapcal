import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import UploadImageForm from "@/components/upload-image-form";

function UploadImageCard() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Upload an Image</CardTitle>
				<CardDescription>Upload and see calories of your meal</CardDescription>
			</CardHeader>
			<CardContent>
				<UploadImageForm />
			</CardContent>
			<CardFooter className="text-sm text-muted-foreground">
				<p>Supported formats: PNG, JPG up to 10MB</p>
			</CardFooter>
		</Card>
	);
}

export default UploadImageCard;
