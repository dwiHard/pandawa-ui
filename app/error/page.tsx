import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MantineProvider } from "@mantine/core";
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import image from "./image.svg";
import classes from "./NotFoundImage.module.css";

export default function NotFoundImage() {
	return (
		<MantineProvider>
			<div className="flex items-center justify-center h-screen">
				<Card className="w-[420px]">
					<CardHeader className="text-center">
						<CardTitle className="lg:text-7xl text-4xl">404</CardTitle>
						<CardDescription>
							The page you’re looking for doesn’t exist.
						</CardDescription>
					</CardHeader>
					<CardFooter className="flex justify-center">
						<Button asChild>
							<Link href="/">Go Back</Link>
						</Button>
					</CardFooter>
				</Card>
			</div>
		</MantineProvider>
	);
}
