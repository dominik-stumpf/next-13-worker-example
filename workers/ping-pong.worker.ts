self.addEventListener("message", ({ data }) => {
	console.log("worker received:", data);
	self.postMessage(data);
});
