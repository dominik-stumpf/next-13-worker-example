"use client";

import { useEffect } from "react";

export default function Home() {
	useEffect(() => {
		console.log("setting up ping-pong worker");
		const worker = new Worker(
			new URL("@/workers/ping-pong.worker.ts", import.meta.url),
		);

		worker.addEventListener("message", ({ data }) => {
			console.log("host received:", data);
		});

		worker.postMessage("first host message");
	}, []);

	return <main>nextjs 13+ web worker example</main>;
}
