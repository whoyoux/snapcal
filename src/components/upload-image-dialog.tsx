import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import UploadImageForm from "./upload-image-form";

function UploadImageDialog() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button>Calculate from image</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Upload an Image</DialogTitle>
					<DialogDescription>
						Upload and see calories of your meal
					</DialogDescription>
				</DialogHeader>
				<UploadImageForm />
			</DialogContent>
		</Dialog>
	);
}

export default UploadImageDialog;
