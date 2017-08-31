export default (text = "Hello World") => {
	const element = document.createElement('div');

	element.innerHTML = text;

	return element;
}
