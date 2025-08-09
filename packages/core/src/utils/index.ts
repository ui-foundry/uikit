export function hasSlot(el: HTMLElement, slotName?: string): boolean {
	return !!el.querySelector(`[slot="${slotName}"]`);
}
