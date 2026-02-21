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

	// Format the sentence using string concatenation
	const sentence = "The " + adjective + " " + noun + " had one goal: to " + verb + ". What happened next was unexpected.";

	// Display the result
	result.textContent = sentence;
});