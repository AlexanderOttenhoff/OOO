var brainfuck = require('brainfuck-javascript');

var arguments = process.argv.slice(2).join().toUpperCase();

var ops = arguments.match(/.{1,2}/g);

for (var i in ops) {
	switch(ops[i]) {
		case 'OΟ':
			ops[i] = '>';
			break;
		case 'ΟO':
			ops[i] = '<';
			break;
		case 'OO':
			ops[i] = '+';
			break;
		case 'ОО':
			ops[i] = '-';
			break;
		case 'ОO':
			ops[i] = '.';
			break;
		case 'OО':
			ops[i] = ',';
			break;
		case 'ОΟ':
			ops[i] = '[';
			break;
		case 'ΟО':
			ops[i] = ']';
			break;
		case 'ΟΟ':
			ops[i] = '#';
			break;
		default:
			ops[i] = '';
	}
}

ops = ops.join('');
var result = brainfuck(ops);

console.log(result);
