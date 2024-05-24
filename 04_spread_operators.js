//ES5 =>
// const persona = {
//     age: 22,
//     hair: 'curly'
// }
// const persona2 = persona

// console.log(persona, '\n', persona2)

// persona.age = 23
// console.log(persona, '\n', persona2)

// persona2.hair = 'straight'
// console.log(persona, '\n', persona2) 
//yukarıdaki örneklerde gördüğümüz üzere JS objeleri referans tipi olarak tutar
//ve bu referansı tutan her item objeyi değiştirir.

const numbers = [1, 2, 3, 4];
const numbers2 = numbers;
numbers2.push(45);
console.log('numbers: ', numbers, '\n', 'numbers2: ', numbers2)
//yukarıdaki örneklerde gördüğümüz üzere JS arrayleri de referans tipi olarak tutar
//onu tutan her değer değişir

// ES6 da daha efektive çalışan spread operator yöntemi (...) geldi.
// object ref birbirinden farklı aynı zamanda append prepend yapabiliyoruz.
const names = ['ali', 'ahmet', 'can'];
const names2 = [...names, 'halil'];
const names3 = ['zafer', ...names, 'koray'];

names3.push('hande');

console.log('names', names);
console.log('names2', names2);
console.log('names3', names3);

// NOT: ReactJS de diziler ile çalışırken ...arr syntax kullanalım,
// referans hataları yada state change işlemlerinde bir hata yapmayalım.
// Spread Operator Virtual DOM güncellenmesini sağlar.

const employee = {
	homePhone: '212-100 4500',
	city: 'İstanbul',
	title: 'Team Leader',
};

// fax değeri yok, olmayan bir property ekledik ve title property de güncellenmiş oldu.
// artık employee ref ile manager ref birbirinden farklı referanslara bakıyor.
const manager = { ...employee, title: 'Manager', fax: '212-458-7896' };

console.log('employee', employee);
console.log('manager', manager);

// REACT JS de Object işlemlerinde {... obj} yoksa state güncellenip virtual dom tetiklenmez.
// Bu da arayüzün düzgün güncellenememesi anlamına gelecektir.