function getRandomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function fetchFromRemote(setIsLoading) {
	const pxSize = getRandomInteger(1, 10) * 100;
	return new Promise( (resolve) => {
		setIsLoading(true);
		// This inserts a 2 second delay so we can easily see a spinner at work
		setTimeout(resolve, 2000);
	})
	.then(() => fetch(`https://placekitten.com/${pxSize}/${pxSize}`))
	.catch(() => {
		setIsLoading(false);
		return Promise.reject("Error fetching from placekitten.com");
	})
	.then(response => response.blob())
	.then(blob => {
		setIsLoading(false);
		return URL.createObjectURL(blob);
	});
}