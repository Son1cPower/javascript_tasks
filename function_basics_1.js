let age = +prompt('Введите ваш возрост', '')

function checkAge(age) {
return (age>18) ? true :  confirm("Родители разрешили?")
}


alert(checkAge(age))

//////////////////////////////////////////////


let age = +prompt('Введите ваш возрост', '')

function checkAge(age) {
return (age>18) ||  confirm("Родители разрешили?")
}


alert(checkAge(age))