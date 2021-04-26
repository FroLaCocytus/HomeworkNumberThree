/**
 * Функция при нажатии на кнопку переключает на форму авторизации.
 */
function FirstTabClick(){
    let FirstTab = document.querySelector('.first-tab');
    let SecondTab = document.querySelector('.second-tab');
    let FirstForm = document.querySelector('.toggle-form.first-form');
    let SecondForm = document.querySelector('.toggle-form.second-form');
    FirstTab.classList.add('active');
    SecondForm.classList.add('del');
    SecondTab.classList.remove('active');
    FirstForm.classList.remove('del');
}
/**
 * Функция при нажатии на кнопку переключает на форму регистрации.
 */
function SecondTabClick(){
    let FirstTab = document.querySelector('.first-tab');
    let SecondTab = document.querySelector('.second-tab');
    let FirstForm = document.querySelector('.toggle-form.first-form');
    let SecondForm = document.querySelector('.toggle-form.second-form');
    SecondTab.classList.add('active');
    FirstForm.classList.add('del');
    FirstTab.classList.remove('active');
    SecondForm.classList.remove('del');
}

/**
 * Функция обрамляет чёрной границей поле ввода выбранное пользователем.
 */
function InputOnFocus(thisTag){
    // console.log(window.getComputedStyle(thisTag).borderWidth);
    if(window.getComputedStyle(thisTag).borderWidth==="0px")thisTag.style.cssText="border: 2px solid black";
}

/**
 * Функция убирает свойство border у поля ввода при нажатие на любое дугое место странички сайта (если к этому полю нет валидации).
 */
function InputOnBlur(thisTag){
    if(thisTag.style.borderColor==="black")thisTag.style.cssText="border:0";
}

/**
 * Функция валидатор для поля E-mail.
 */
function EmailValidate(value){
    const EmailTest=/^[A-Za-z0-9]{1,}@[A-Za-z0-9]{1,}[.][A-Za-z0-9]{1,}$/;
    if (EmailTest.test(value)){
        return true;
    }
    return false;
}

/**
 * Функция валидатор для поля Username.
 */
 function UsernameValidate(value){
    const UsernameTest=/^[A-Za-z]{1}[A-Za-z0-9]{3,15}$/;
    if (UsernameTest.test(value)){
        return true;
    }
    return false;
}

/**
 * Функция валидатор для поля Password.
 */
 function PasswordValidate(value){
    const PasswordTest=/^[A-Za-z0-9]{8,16}$/;
    if (PasswordTest.test(value)){
        if((/\d/.test(value)) && (/[A-Z]/.test(value)) &&(/[a-z]/.test(value)))return true;
        return false;
    }
    return false;
}

/**
 * Функция обработки формы при нажатии на кнопку LogIn.
 */
function LogInClick(){
    let FirstInput = document.querySelector('.toggle-form .first-form.first-input');
    let SecondInput = document.querySelector('.toggle-form .first-form.second-input');
    if ((FirstInput.value !== "") && (SecondInput.value !=="")){
        FirstInput.style.cssText="border: 0;";
        SecondInput.style.cssText="border: 0";
        console.log({
            email: FirstInput.value,
            password: SecondInput.value
        });
        alert("Смотри консоль;)");
    }

    if(FirstInput.value === ""){
        console.log("Полe email пустое");
        FirstInput.style.cssText="border: 2px solid red;";
    }
    if(SecondInput.value === ""){
        console.log("Полe password пустое");
        SecondInput.style.cssText="border: 2px solid red";
    }
}

/**
 * Функция обработки поля ввода Email для формы регистрации.
 */
 function FirstInputHandlerSF(thisTag){
    let FirstLabel = document.querySelector('.toggle-form .second-form.first-label');
   
    if (EmailValidate(thisTag.value)){
        thisTag.style.cssText="border: 2px solid green";
        FirstLabel.style.cssText="color: green";
        FirstLabel.textContent = "Email address is valid";
        FirstLabel.classList.remove('del');
    }
    else{
        thisTag.style.cssText="border: 2px solid red";
        FirstLabel.style.cssText="color: red";
        FirstLabel.textContent = "Email address is invalid";
        FirstLabel.classList.remove('del');
    }
}

/**
 * Функция обработки поля ввода Username для формы регистрации.
 */
 function SecondInputHandlerSF(thisTag){
    let SecondLabel = document.querySelector('.toggle-form .second-form.second-label');

    if (UsernameValidate(thisTag.value)){
        thisTag.style.cssText="border: 2px solid green";
        SecondLabel.style.cssText="color: green";
        SecondLabel.textContent = "Username is valid";
        SecondLabel.classList.remove('del');
    }
    else if(thisTag.value.length>16){
        thisTag.style.cssText="border: 2px solid red";
        SecondLabel.style.cssText="color: red";
        SecondLabel.textContent = "Username is too long(maximum is 16 characters)";
        SecondLabel.classList.remove('del');
    }
    else if(!(/^[A-Za-z0-9]+$/.test(thisTag.value))){
        thisTag.style.cssText="border: 2px solid red";
        SecondLabel.style.cssText="color: red";
        SecondLabel.textContent = "Username should only consist of letters (A-z), numbers (0-9)";
        SecondLabel.classList.remove('del');
    }
    else if(/\d/.test(thisTag.value[0])){
        thisTag.style.cssText="border: 2px solid red";
        SecondLabel.style.cssText="color: red";
        SecondLabel.textContent = "Username must start with a letter";
        SecondLabel.classList.remove('del');
    }
    else if(thisTag.value.length<4){
        thisTag.style.cssText="border: 2px solid red";
        SecondLabel.style.cssText="color: red";
        SecondLabel.textContent = "Please set a username than three characters.";
        SecondLabel.classList.remove('del');
    }
}

/**
 * Функция обработки поля ввода Password для формы регистрации.
 */
 function ThirdInputHandlerSF(thisTag){
    let ThirdLabel = document.querySelector('.toggle-form .second-form.third-label');
   
    if (PasswordValidate(thisTag.value)){
        thisTag.style.cssText="border: 2px solid green";
        ThirdLabel.style.cssText="color: green";
        ThirdLabel.textContent = "Password is valid";
        ThirdLabel.classList.remove('del');
    }
    else if(thisTag.value.length>16){
        thisTag.style.cssText="border: 2px solid red";
        ThirdLabel.style.cssText="color: red";
        ThirdLabel.textContent = "Password is too long(maximum is 16 characters)";
        ThirdLabel.classList.remove('del');
    }
    else if(!(/^[A-Za-z0-9]+$/.test(thisTag.value))){
        thisTag.style.cssText="border: 2px solid red";
        ThirdLabel.style.cssText="color: red";
        ThirdLabel.textContent = "Password should only consist of letters (A-z), numbers (0-9)";
        ThirdLabel.classList.remove('del');
    }
    else if(thisTag.value.length<8){
        thisTag.style.cssText="border: 2px solid red";
        ThirdLabel.style.cssText="color: red";
        ThirdLabel.textContent = "Password is too short (minimum is 8 characters)";
        ThirdLabel.classList.remove('del');
    }
    else if(!(/\d/.test(thisTag.value)) || !(/[A-Z]/.test(thisTag.value)) || !(/[a-z]/.test(thisTag.value))){
        thisTag.style.cssText="border: 2px solid red";
        ThirdLabel.style.cssText="color: red";
        ThirdLabel.textContent = "Password needs at least" ;
        if(!(/[A-Z]/.test(thisTag.value)))ThirdLabel.textContent += " 1 uppercase letter";
        if(!(/[a-z]/.test(thisTag.value)))ThirdLabel.textContent += " 1 lowercase letter";
        if(!(/\d/.test(thisTag.value)))ThirdLabel.textContent += " 1 number";
        ThirdLabel.classList.remove('del');
    }
}

/**
 * Функция обработки формы при нажатии на кнопку Register.
 */
function RegisterClick(){
    let FirstInput = document.querySelector('.toggle-form .second-form.first-input');
    let SecondInput = document.querySelector('.toggle-form .second-form.second-input');
    let ThirdInput = document.querySelector('.toggle-form .second-form.third-input');
    let CheckBox = document.querySelector('.toggle-form .second-form.check input');

    if ((EmailValidate(FirstInput.value)) && (UsernameValidate(SecondInput.value)) && (PasswordValidate(ThirdInput.value)) && CheckBox.checked){
        console.log({
            email: FirstInput.value,
            username: SecondInput.value,
            password: ThirdInput.value
        });
        alert("Смотри консоль;)");
    }
    if (!(EmailValidate(FirstInput.value))){
        console.log("email не правильный");
        FirstInput.style.cssText="border: 2px solid red;";
    }
    if (!(UsernameValidate(SecondInput.value))){
        console.log("username не правильный");
        SecondInput.style.cssText="border: 2px solid red;";
    }
    if (!(PasswordValidate(ThirdInput.value))){
        console.log("password не правильный");
        ThirdInput.style.cssText="border: 2px solid red;";
    }
    if(!CheckBox.checked){
        console.log("Чекбокс не нажат");
        CheckBox.style.cssText="background:red;";
    }
}


function handlerClickTerms(){
    
}
/**
 * Функция вывода сообщения при нажатии на ссылку Forgot Password.
 */
function ForgotPasswordClick(){
    alert("Нам тебя очень жаль:)");
}
