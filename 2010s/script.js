document.querySelectorAll(".chapter-word").forEach(span => {
span.addEventListener("click", () => {
	const targetId = span.getAttribute("data-target");
	const target = document.getElementById(targetId);

	const isNowVisible = target.classList.toggle("hidden");

	if (!isNowVisible) {
	span.classList.add("active");
	} else {
	span.classList.remove("active");
	}
});
});