let signUpButton = document.getElementById('signUp');
let logInButton = document.getElementById('signIn');
let container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

logInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});