// // int - 9
// // float - 9.8
// // double (float увелич.) 9.43537456324795673425473256
// // string = 'apple' "orange" `green`
// // char (character) = 'a' 'b' '\'
// // bool/boolean = true/false
// // undefined(null) - ничего пусто тип


// // js - ecma script
// // es7
// // es6
// // bebel
// // wabpack

// const g = 9.8;
// const pi = 3.15;

// let password = '';
// let userName = '';

// // arrow function
// const f = (x) => {
//     return x * x;
// } 

// // let x = prompt('Enter x', '');
// // alert(x);

// // let result = f(x);
// // console.log(result);

// // $(document).ready(function() {
// //     console.log('Document is ready');
// // });

// создать функцию которая на вход берет два параметра имя и возраст
// проверить возраст был старше 6 (больше или равно) и 
// проверить что бы строка не была пустой
// возвращает true - если проверка прошла (if)
// возвращает false - если проверка не прошла



const a = (name, age) => {
    if(name != '' && age > 6) {
        return true;
    }

    return false;
}

const a = (name, age) => {
    if(name != '' && age > 6) {
        return true;
    } else {
        return false
    }
}

const a = (name, age) => {
    //     [      условие        ] ? верно : не верно 
    return (name != '' && age > 6) ? true : false;
}

const a1 = (name, age) => (name != '' && age > 6) ? true : false;

console.log(a1('evgeniy', 12));






a = 5
if(a < 8) {
    console.log('< 8')
} else {
    console.log('> 8')
}

b = 5
if(a < 8 && b > 10) {
    console.log('< 8')
} else {
    console.log('> 8')
}