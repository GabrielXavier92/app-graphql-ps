export const endsWithAny = (suffixes: any, string: any) => {
	return suffixes.some((suffix: any) => string.endsWith(suffix));
};

export const getUrlFileName = (string: any) => string.substring(string.lastIndexOf("/"));
