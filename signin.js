const formRegister = document.getElementById('formRegister');
const nameInput = document.getElementById('name');
const lastNameInput = document.getElementById('lastName');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const phoneInput = document.getElementById('phone');


const isEmpty = (input) => {
    console.log('ísEmpty ==> ', !input.value.trim().length);
    return !input.value.trim().length;
}

const showError = (input, msg) => {
    console.log(input);

}

const checkTextInput = (input) => {

    const minCharacteres = 3;
    const maxCharacteres = 8;


if(isEmpty(input)){
    showError(input, "Este campo es obligatorio");
    console.log("Este campo es obligatorio");
    return false;
}
}




const validateForm = (e) => {
    e.preventDefault();
    const isNameValid = checkTextInput(nameInput);
}



const init = () => {
    formRegister.addEventListener("submit", validateForm);
}

init();




// Experimento: pag 8
// https://plataforma.nucba.io/c/3417-codingbootcamp/lunes-y-miercoles-3417-coding-bootcamp-6d0030

// Stop en min 40, emitir respuesta en la lectura de nameInput