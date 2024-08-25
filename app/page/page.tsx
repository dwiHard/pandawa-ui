"use client";
import { useCallback, useEffect, useState } from "react";
import styles from './BalloonButton.module.css';
import { balloons } from "balloons-js";

export default function BalloonButton(): React.ReactNode {
	const [isMounted, setIsMounted] = useState<boolean>(false);

	useEffect(() => {
		setIsMounted(true);
		balloons();
	}, []);

	const handleClick = (): void => {
		balloons();
	};

	if (!isMounted) return null;

	return (
		<div className={styles.container}>
      <h1>Ballon test</h1>
			<button id="releastBalloonsButton" onClick={handleClick}></button>
		</div>
	);
}
