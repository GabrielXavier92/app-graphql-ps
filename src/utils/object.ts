export const isEmpty = (obj: any) => {
	if (!obj) {
		return true;
	} else if (Array.isArray(obj)) {
		return obj.length <= 0;
	}

	return Object.keys(obj).length <= 0;
};
