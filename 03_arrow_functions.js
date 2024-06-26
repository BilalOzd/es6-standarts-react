// default function yöntemi
// Default functionlar Function Construction Object olarak tanımlanıp, bir nesne gibi hizmet verebilir.
// Ama arrow Functionslar bu özelliği göstermez normal function olarak hizmet verir.
function sum(x, y) {
	this._x = x;
	this._y = y;

	console.log('default-this', this);
	//return x + y;
}


// C#'a göre Method overload - Javascript'te yok
function sum(x, y) {
	return x + y;
}

// function sum(x, y, z) {
// 	return x + y + z;
// }

// const sum = (x, y, z, t) => {
//     return x + y + z + t;
// };
//default function ile aynı isimde arrow function tanımı yapamadığımızı örneklendirmiş olduk.

// default function yazdığımızda aynı isimde başka function yazılabilir 
// ve js function overload olmadığından en son tanımlı function imzasına göre kod çalışır. yani diğer function ezilir.
const result1 = sum(10, 30); 
console.log('result1', result1); // output: result1 40

// var c = new sum(3, 6);

// 1. yazım şekli arrow functions kısa yazım
const sum1 = (x, y) => x + y;

// 2. yazım şekli uzun yazım şekli
const sum2 = (x, y) => {
	console.log('arrow-this', this);
	return x + y;
};

// arrow function yöntemi ile aynı scope sadece tek bir isimde function tanımı yapılabilir.
// aşağıdaki hata verir.
// const sum2 = (x, y, z) => {
// 	return x + y + z;
// };


// DEFAULT functiona özgü bir davranış, kod takibi çok zor.
function average() {
	for (const argument of arguments) {
		console.log('argument', argument);
	}
}
average(12, 45, 34, 56);

// ARROW FUNCTIONLAR DIŞIDAN FUNCTION PARAMETER GEÇMEYE KAPALI
// ... args (rest operator)
// C# daki params keyword benzer
// rest operator sayesinde bir function istenilen kadar parametere dinamik olarak geçilebilir.
// page = 1 default değerler function parametre olarak en başta bulunurlar.
const avg = (page = 1, ...args) => {
	console.log('page', page);
	for (const argument of args) {
		console.log('avg-argument', argument);
	}
};
avg(6, 10, 11, 45);