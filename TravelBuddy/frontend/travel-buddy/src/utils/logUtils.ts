function customLog(fileName: string, ...args) {
	const stack = new Error().stack;
	const stackLines = stack.split('\n');
	// Adjust the index based on the environment (browser or Node.js)
	const callerLine = stackLines[2];
	const match =
		callerLine.match(/at (.+?) \((.+):(\d+):(\d+)\)/) ||
		callerLine.match(/at (.+):(\d+):(\d+)/);
	if (match) {
		const functionName = match[1].trim();
		console.log(`[${fileName} -> ${functionName}]:`, ...args);
	} else {
		console.log(...args);
	}
}

export default customLog;
