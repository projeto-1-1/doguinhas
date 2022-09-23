const datefns = require('date-fns');

const now = new Date();
function format(date) {
	return datefns.format(date, 'dd/MM/yyyy');
}
console.log(now);
console.log(format(now));
