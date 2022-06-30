// 1. Обработка отправки формы form.login-form должна быть по событию submit. +
// 2. При отправке формы страница не должна перезагружаться. +
// 3. Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// 4. Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements. +
// 5. Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.



const form = document.querySelector('.login-form');
const emailElement = document.querySelector('input[type ="email"]');
const passwordElement = document.querySelector('input[type="password"]'); 

form.addEventListener('submit', onFormSubmit);

let user = { 
    email: '', 
    password: '',
};

function onFormSubmit (event) {

    event.preventDefault();
  
    if (emailElement === "" || passwordElement === "") {
        return console.log("All fields must be filled T_T");
    }
    else {
        user.email = emailElement.value; 
        user.password = passwordElement.value;
    }

    event.currentTarget.reset();
    console.log(user);

} 
