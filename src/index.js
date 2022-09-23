const now = new Date();
function format(date) {
	return [date.getDate(), date.getMonth() + 1, date.getFullYear()]
		.map(String)
		.map((p) => p.padStart(2, '0'))
		.join('/');
}
console.log(now);
console.log(format(now));
