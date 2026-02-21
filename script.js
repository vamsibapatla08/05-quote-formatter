// Get the form and result elements
const form = document.getElementById("form"); // 'const' is used because the reference doesn't change
const result = document.getElementById("result"); // 'const' is used for the same reason

// Listen for form submission
form.addEventListener("submit", function(event) {
	event.preventDefault(); // Stops the page from reloading

	// Get user inputs
	const noun = document.getElementById("noun").value;
	const verb = document.getElementById("verb").value;
	const adjective = document.getElementById("adjective").value;

	// Format the sentence using a template literal for clarity and simplicity
	const sentence = `${verb}ing ${adjective} ${noun} is the real test of character. #LifeRules`;

	// Display the result
	result.textContent = sentence;

	// Clear the input fields
	document.getElementById("noun").value = "";
	document.getElementById("verb").value = "";
	document.getElementById("adjective").value = "";
});