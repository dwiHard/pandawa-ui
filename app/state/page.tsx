"use client";
import { useState } from "react";
import "@mantine/core/styles.css";
import { MantineProvider, Flex } from "@mantine/core";
import { Button } from "@/components/ui/button";
import Counter from "./components/CounterState";
import Counter2 from "./components/CounterReducer";
import Form from "./components/FormReducer";

export default function Page() {
	const [count, setCount] = useState(0);

	function handleClick() {
		setCount(count + 1);
	}

	return (
		<MantineProvider>
			<div className="flex items-center justify-center h-screen">
				<Flex
					mih={50}
					gap="xs"
					justify="flex-start"
					align="flex-start"
					direction="column"
					wrap="nowrap"
				>
					<Button onClick={handleClick}>You pressed me {count} times</Button>
					<Counter />
					<Counter2 />
					<Form />
				</Flex>
			</div>
		</MantineProvider>
	);
}
