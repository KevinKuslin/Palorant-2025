const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const server = document.getElementById('server');
const desc = document.getElementById('desc'); 
const checkbox = document.getElementById('checkbox'); 

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const serverValue = server.value.trim();
    const descValue = desc.value.trim(); 
    const reportBtn = document.getElementById('reportBtn'); 

    let validationSuccess = 0; 

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } 
    else if(usernameValue.length < 4){
        setError(username, 'Username must be at least 4 character.'); 
    }
    else {
        setSuccess(username);
        validationSuccess++; 
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!emailValue.endsWith('@gmail.com')) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email); 
        validationSuccess++; 
    }

    if(serverValue === '') {
        setError(server, 'Server is required');
    } else if (isDigit(serverValue) == 0 || serverValue.length != 4) {
        setError(server, 'Server must only consist of 4 digits.'); 
    } else {
        setSuccess(server); 
        validationSuccess++; 
    }

    if(descValue == ''){
        setError(desc, 'Decription is required'); 
    } 
    else{
        setSuccess(desc); 
        validationSuccess++; 
    }

    if(checkbox.checked){
        validationSuccess++; 
    }

    if(validationSuccess == 5){
        alert('The Bug is Successfully Reported!'); 
        form.submit(); 
    }

    function isDigit(serverString){
        for(let i = 0; i<serverString.length; i++){
            if(!(serverString[i] >= '0' && serverString[i] <= '9')) return 0; 
        }
        return 1; 
    }
};