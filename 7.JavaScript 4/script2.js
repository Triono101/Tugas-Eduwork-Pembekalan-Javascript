// 1. Ringkasan Function This

// A. Object Literal

// var obj = { nama : 'triono', umur : 27};
// obj.hallo = function() {
// 	console.log(this);
// 	console.log('hallo');
// }
// obj.hallo();

// // This mengembalikan variabel object yang bersangkutan

// B. Function Declaration

// function hallo() {
// 	console.log(this);
// 	console.log('hallo');
// }

// hallo();
// // [sama dengan window.hallo();]

// // This mengembalikan object global

// C. Constructor Function

function Hallo() {
	console.log(this);
	console.log('hallo');
}
new Hallo();

// // This mengembalikan object yang baru dibuat

// 2. Keyword This

// console.log(this);
// window === this {true}

// var a = 10;
// console.log(a);