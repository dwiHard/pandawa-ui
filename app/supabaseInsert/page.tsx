import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import "@mantine/core/styles.css";
import { MantineProvider, Container } from "@mantine/core";
import { insertData } from "./actions";

export default async function Insert() {
	return (
		<MantineProvider>
			<Container>
				<form>
					<Input type="text" name="id" placeholder="Id" />
					<Input type="text" name="title" placeholder="Title" />
					<Button variant="outline" formAction={insertData}>
						Button
					</Button>
				</form>
			</Container>
		</MantineProvider>
	);
}
