function choice(items) {
	let randIdx = Math.floor(Math.random() * items.length);
	return items[randIdx];
}

function remove(items, item) {
	for (let i = 0; i < items.length; i++) {
		if (items[i] === item) {
			let result = items.slice(i, i + 1);
			items.splice(i, 1);
			return result[0];
		}
	}
	return undefined;
}

export { choice, remove };
