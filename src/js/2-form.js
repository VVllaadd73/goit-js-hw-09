const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const formData = {
	email: '',
	message: '',
};
const savedData = localStorage.getItem(STORAGE_KEY);

if (savedData) {
	const parsedData = JSON.parse(savedData);
	Object.assign(formData, parsedData);

	if (form.elements.email) {
		form.elements.email.value = formData.email;
	}

	if (form.elements.message) {
		form.elements.message.value = formData.message;
	}
}

form.addEventListener('input', (event) => {
	formData[event.target.name] = event.target.value.trim();
	localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', (event) => {
	event.preventDefault();

	if (!form.elements.email.value.trim() || !form.elements.message.value.trim()) {
		alert("Fill please all fields");
		return;
	}

	console.log(formData);
	localStorage.removeItem(STORAGE_KEY);
	form.reset();
	formData.email = '';
	formData.message = '';
});








