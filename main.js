const brainfuck = require('brainfuck-javascript');

const args = process.argv.slice(2).join().toUpperCase();

const ops = args.match(/.{1,2}/g).map((m) => {
  switch (m) {
    case 'OΟ':
      return '>';
    case 'ΟO':
      return '<';
    case 'OO':
      return '+';
    case 'ОО':
      return '-';
    case 'ОO':
      return '.';
    case 'OО':
      return ',';
    case 'ОΟ':
      return '[';
    case 'ΟО':
      return ']';
    case 'ΟΟ':
      return '#';
    default:
      return '';
  }
}).join('').split('#')[0];

const result = brainfuck(ops);

console.log(result.map(a => String.fromCharCode(a)).join(''));
