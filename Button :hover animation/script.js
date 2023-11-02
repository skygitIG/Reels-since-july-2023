console.clear();

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
	const div = button.querySelector("div");
	["mouseenter", "mouseleave"].forEach((event) => {
		button.addEventListener(event, (e) => {
			div.style.left = `${e.offsetX}px`;
			div.style.top = `${e.offsetY}px`;
		});
	});
});
