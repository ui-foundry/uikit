import "@ui-foundry/uikit/dist/uikit/uikit.css";
import "@ui-foundry/uikit/dist/uikit/uikit.esm.js";

export function setupCounter(btnEl, countEl) {
	let counter = 0;
	const setCounter = (count) => {
		counter = count;
		countEl.textContent = counter;
	};
	btnEl.addEventListener("click", () => setCounter(counter + 1));
	setCounter(0);
}

setupCounter(
	document.querySelector("#counter-btn"),
	document.querySelector("#count"),
);
