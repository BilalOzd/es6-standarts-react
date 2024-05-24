//CONST ve LET kullanılacak
//VAR keyword'ü eskiden kullanılan ve tanımlamalarda sorunlara yol açabilecek bir yapı

//1 VAR
// var _name = 'bilalettin javier'
// console.log(_name);

// if(true){
//     //var is not a block scope keyword, it changes the original variable and this is dangerous
//     var _name = 'cemalettin jöntürk'
// }
// console.log(_name);

//2 LET
// let surname = 'özdemir'
// console.log(surname);

// if(true){
//     //let is a scope based keyword and easy to manage
//     let surname = 'kaya'
//     console.log(surname);
// }
// console.log(surname);

//3 CONST
const mail = 'ozd01'
const numbers = [1,2,3,4,5]
const person = {
    firstName: 'ayca_22',
    age: 22
}
const personas = [{
    firstName: 'marsupilamuhittin',
    age: 88
},
{
   firstName: 'lalezâr kadınefendi',
    age: 37
}]


if (true) {
    //const is works like let - scope based - but immutable
    const mail = 'spielberg446'
    console.log(mail)
}
console.log(mail)

//mail = 'asdasd' //gives error 'Assignment to constant variable'

//person = {} //gives error 'Assignment to constant variable'
person.age = 11 //won't give an error because u can manipulate inside of the box,
                //u just can't manipulate THE box --> which is the objects itself 
                
//personas = [] //gives error 'Assignment to constant variable'
personas.find(x => x.firstName == 'marsupilamuhittin').age = 100 //won't give an error
console.log(personas.find(x => x.firstName == 'marsupilamuhittin').age)