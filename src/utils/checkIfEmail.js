export default function checkIfEmail(str) {
	const regexp = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
	return regexp.test(str);
}