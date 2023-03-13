import validator from './validator.js';

let User = document.getElementById ("userName")

User.addEventListener("keyup",()=> console.log(User.value))

let TC = document.getElementById ("creditCard")

TC.addEventListener("keyup",function() {
    console.log(TC.value.split(""))
})


console.log(validator);