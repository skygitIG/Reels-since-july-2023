console.clear();

const { gsap } = window;

let currentLink;
let currentIndex = 0;
const links = document.querySelectorAll("nav a");

links.forEach((link, index) => {
	link.addEventListener("click", (e) => {
		addActive(e, index);
	});
});

function addActive(e, i) {
	const target = e.currentTarget;
	if (target != currentLink) {
		let direction;
		if (currentIndex < i) direction = "right";
		else direction = "left";
		const slide = target.querySelector(".slide");

		gsap.timeline()
			.call(() => {
			links.forEach((link) => {
				link.classList.remove("active");
			});
		})
			.fromTo(
			slide,
			{
				transformOrigin: `${direction == "left" ? "right" : "left"} center`,
				scaleX: 0,
			},
			{
				delay: 0.1,
				duration: 0.25,
				scaleX: 1,
			}
		)
			.call(() => {
			target.classList.add("active");
		})
			.to(slide, {
			delay: 0.25,
			duration: 0.25,
			transformOrigin: `${direction} center`,
			scaleX: 0,
		});
		currentLink = target;
		currentIndex = i;
	}
}
