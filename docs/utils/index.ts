export async function loadContentByPath(path: string): Promise<IAItem | undefined> {
	let cleanPath = removeLeadingSlash(path);
	let parts = cleanPath.split('/');
	if (parts.length < 1) {
		return;
	}
	const rootIaItem = (ia as any)[parts[0]];

	return findMatchingItem(rootIaItem, `/${cleanPath}`);
}
