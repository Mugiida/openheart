function submitProblem() {
	var problem = document.getElementById("problemInput").value;
	localStorage.setItem("clientProblem", problem);
	alert("Thank you for sharing your problem!🌸");
	document.getElementById("problemInput").value = "";
}

window.onload = function () {
	var savedProblem = localStorage.getItem("clientProblem");
	if (savedProblem) {
		console.log("Client's problem: " + savedProblem);
	}

	let darkMode = false;

	function toggleMode() {
		darkMode = !darkMode;
		document.body.classList.toggle("dark-mode", darkMode);
	}

	document.getElementById("toggleMode").addEventListener("click", toggleMode);
};
