"use client";
import "@mantine/core/styles.css";
import {
	AppShell,
	Burger,
	Group,
	MantineProvider,
	Skeleton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

export default function CollapseDesktop() {
	const [value, setValue] = useState();
	const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
	const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

	return (
		<MantineProvider>
			<AppShell
				header={{ height: 60 }}
				navbar={{
					width: 300,
					breakpoint: "sm",
					collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
				}}
				padding="md"
			>
				<AppShell.Header>
					<Group h="100%" px="md">
						<Burger
							opened={mobileOpened}
							onClick={toggleMobile}
							hiddenFrom="sm"
							size="sm"
						/>
						<Burger
							opened={desktopOpened}
							onClick={toggleDesktop}
							visibleFrom="sm"
							size="sm"
						/>
					</Group>
				</AppShell.Header>
				<AppShell.Navbar p="md">
					Navbar
					{Array(15)
						.fill(0)
						.map((_, index) => (
							<Skeleton key={index} h={28} mt="sm" animate={false} />
						))}
				</AppShell.Navbar>
				<AppShell.Main>
					<PhoneInput
						placeholder="Enter phone number"
						value={value}
						onChange={setValue}
					/>
				</AppShell.Main>
			</AppShell>
		</MantineProvider>
	);
}
