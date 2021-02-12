for (let i = 1; i < 10; i++) {
    var userName = prompt('Введите своё имя!');
    var userAge = +prompt('Введите свой возраст!');

    const objUser = {
        name: userName,
        age: userAge
              
    };
        console.log(`Пользователь: ${objUser.name} ||   Возраст: ${objUser.age}`);
    
}