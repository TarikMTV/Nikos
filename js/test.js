
// ex2
//let a = prompt('Enter first number');
//console.log('a = '+ a);
//let b = prompt('Enter second number');
//console.log('b = '+ b);

//if(!isNaN(+a) && !isNaN(+b)){

//	var resM = a*b;
//	console.log(resM);

//	console.log(a/b);
//} else {
//	alert('Please enter only number!');
//}
//console.log(resM);

//---------

// let f = prompt('F:');

// if(!isNaN(Number(f))){
// 	let resC = (5/9) * (Number(f) - 32);
// 	console.log('C = ' + resC);
// } else {
// 	alert('Please enter only number!');
// }

//ex3---------------------
// let str = 'Hello';

// let arr = [1,2,3]
// console.log(arr.join(', '));

// console.log("Hello".split('').reverse('').join(''));

//ex4---------------------------
// let str1 = 'abcba';
// let str2 = 'hhijhi';

// if (str2 === str2.split('').reverse('').join('')){
// 	console.log("palindrom");
// } else console.log(false);

//-------------ex5--------------

// let a = prompt();

// if(!isNaN(a)){
// 	let diff = Number(a) - 13;

// 	if( diff >13) {
// 		diff *= 2;
// 	}
// 	console.log(diff);
// } else {
// 	alert('Error!');
// }

//----------ex6-----------------

// let str = prompt('Enter a string');
// let letters = /^[A-Za-z]+$/;

// if(str.match(letters)){
//  	console.log('only letters');
// }else{
// 	console.log('regular string');
// }

//------------ex7------------------

let nRandom = Math.floor(Math.random() * Math.floor(10));
console.log(nRandom);

let a = prompt('Enter a number');
if(!isNaN(a)){
	if (Number(a) === nRandom){
			alert('Good work');
	} else {
		console.log('0');
	}
} else {
		console.log('Error');
	}

