let counter = 1;
document.getElementById("addTextarea").addEventListener("click", function () {
	const textareaContainer = document.getElementById("textarea-container");
	const newTextarea = document.createElement("textarea");
	newTextarea.setAttribute(
		"placeholder",
		`write your problem here.. (Top ${counter + 1})`
	);
	newTextarea.setAttribute("rows", "4");
	newTextarea.setAttribute("cols", "50");
	textareaContainer.appendChild(newTextarea);
	counter++;
});
