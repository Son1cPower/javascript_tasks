let login=prompt('Кто там?','')

if (login=='Админ'){ // открытие
let password=prompt('Пароль?','')

if (password=='Я Главный') {alert('Здрасвуйте!')} 
else if (password='' || password==null) {alert('Отменено')} 

else {alert('Неверный пароль')}
} // закрытие



else if (login='' || login==null){alert('Отменено')}


else {alert('Я вас не знаю')}

