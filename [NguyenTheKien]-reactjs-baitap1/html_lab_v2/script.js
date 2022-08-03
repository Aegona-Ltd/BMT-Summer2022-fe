const forms = document.querySelector(".forms"),
      links = document.querySelectorAll(".link");    

//Chuyển trang đăng ký
links.forEach(link => {
    link.addEventListener("click", e => {
       e.preventDefault(); 
       forms.classList.toggle("show-signup");
    })
})

const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
	e.preventDefault();
	checkInputs();
});

function checkInputs() {
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
    const numbers = /[0-9]/g;
    const upperCaseLetters = /[A-Z]/g;
    const lowerCaseLetters = /[a-z]/g;
    const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
	
	if(emailValue === '') {
		setErrorFor(email, 'Please enter your e-mail');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Please enter a valid e-mail');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Please enter your password');
	} else if(!passwordValue.match(numbers)) {
        setErrorFor(password, 'Please enter your number');
        console.log('s' , passwordValue.match(numbers));
	}else if(!passwordValue.match(lowerCaseLetters)) {
        setErrorFor(password, 'Please enter lowercase characters (abc)');
	}else if(!passwordValue.match(upperCaseLetters)) {
        setErrorFor(password, 'Please enter uppercase characters (ABC)');
	}else if(!passwordValue.match(format)) {
        setErrorFor(password, 'Your password is not have special character');
	}else if(passwordValue.length <=8) {
        setErrorFor(password, 'Your password must be at least 8 characters');
	}else{
        setSuccessFor(password);
        window.location.href = './material-ui/material.html'
    }

}

function SignUp(){

    alert('Đăng ký belike :D')
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
