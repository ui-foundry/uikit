function isElementNode(node: Node): node is HTMLElement {
	return node.nodeType === Node.ELEMENT_NODE;
}

function isTextNode(node: Node): node is Text {
	return node.nodeType === Node.TEXT_NODE;
}

function getText(node: Node, currentLevel = 1, maxLevel = Infinity): string {
	let text = "";
	if (currentLevel <= maxLevel) {
		if (isTextNode(node)) {
			text += node.textContent;
		} else if (isElementNode(node) && node.hasChildNodes()) {
			const nextLevel = currentLevel + 1;
			node.childNodes.forEach((node) => {
				text += getText(node, nextLevel, maxLevel);
			});
		}
	}
	return text;
}

export interface IOptions {
	recurse: boolean;
	maxLevel?: number;
}

export function getTextContent(slot: HTMLSlotElement, options?: IOptions): string {
	const nodes = slot.assignedNodes({ flatten: true });
	const { recurse = false, maxLevel } = options ?? {};
	let text = "";

	[...nodes].forEach((node) => {
		text += getText(node, 1, recurse ? maxLevel : 1);
	});

	return text.trim();
}

/* Will return whether if a given slot have HTML children elements or not. */
export function hasSlotContent(el: HTMLElement, name?: string): boolean {
	if (!el) return false;

	const slotSelector = name ? `[name='${name}']` : "";
	const slotContent = el.querySelector<HTMLSlotElement>(`slot${slotSelector}`)?.assignedElements({ flatten: true });
	if (!slotContent || !Array.isArray(slotContent)) return false;

	return !!slotContent.length;
}

export function hasSlot(el: HTMLElement, slotName?: string): boolean {
	return !!el.querySelector(`[slot="${slotName}"]`);
}
