export const cleanURL = (response) => {
	const idx = response.config.url.indexOf('?');
	return response.config.url.substring(0, idx);
};
