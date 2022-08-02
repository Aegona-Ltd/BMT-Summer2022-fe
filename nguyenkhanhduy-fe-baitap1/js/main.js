const form = document.getElementById('form-login')
const field = document.querySelector('.field')


const emailField = form['email']
const passwordField = form['password']

//handle DOM Event
emailField.onblur = () => {
    handleValidateEmailField()
}

emailField.oninput = () => {
    const parent = emailField.parentElement.parentElement
    const message = parent.querySelector('.invalid')
    parent.classList.remove('error')
    message.innerHTML = ""
}

passwordField.onblur = () => {
    handleValidatePasswordField()
}

passwordField.oninput = () => {
    const parent = passwordField.parentElement.parentElement
    const message = parent.querySelector('.invalid')
    parent.classList.remove('error')
    message.innerHTML = ""
}

form.onsubmit = (e) => {
    e.preventDefault()
    handleValidateEmailField()
    handleValidatePasswordField()
}

//handle validate email and password
const handleValidateEmailField = () => {
    const parent = emailField.parentElement.parentElement
    const message = parent.querySelector('.invalid')
    const checkRequired = isRequired(emailField.value, 'Please enter your email.')
    const checkEmail = isEmail(emailField.value, 'Please enter a valid e-mail')
   
    if(checkRequired){
        message.innerHTML = checkRequired
        parent.classList.add('error')
        return
    }

    if(checkEmail){
        message.innerHTML = checkEmail
        parent.classList.add('error')
        return
    }
    message.innerHTML = ""
}

const handleValidatePasswordField = () => {
    const parent = passwordField.parentElement.parentElement    
    const message = parent.querySelector('.invalid')
    const checkRequired = isRequired(passwordField.value, 'Please enter your password.')
    const checkMinLength = minLength(passwordField.value, 6, 'Your password must be at least 6 characters')
   
    if(checkRequired){
        message.innerHTML = checkRequired
        parent.classList.add('error')
        return
    }

    if(checkMinLength){
        message.innerHTML = checkMinLength
        parent.classList.add('error')
        return
    }
}


//Define functions validate
const  isRequired =(value,message) => {
    return value.length === 0 ? message : undefined
}

const isEmail =  (value, message) => {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(value) ? undefined :  message;
}

const minLength = (value, minLength,message) => {
    return value.length < minLength ? message : undefined
}
