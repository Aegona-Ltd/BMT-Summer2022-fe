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
const emailsignup = document.getElementById('emailsignup');
const pwsignup = document.getElementById('pwsignup');
const pwsignup1 = document.getElementById('pwsignup1');

form.addEventListener('submit', e => {
	e.preventDefault();
	checkInputs();
});

function checkInputs() {
	const isCaptchaChecked = (grecaptcha && grecaptcha.getResponse().length !== 0);
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
        // console.log('s' , passwordValue.match(numbers));
	}else if(!passwordValue.match(lowerCaseLetters)) {
        setErrorFor(password, 'Please enter lowercase characters (abc)');
	}else if(!passwordValue.match(upperCaseLetters)) {
        setErrorFor(password, 'Please enter uppercase characters (ABC)');
	}else if(!passwordValue.match(format)) {
        setErrorFor(password, 'Your password is not have special character');
	}else if(passwordValue.length <=8) {
        setErrorFor(password, 'Your password must be at least 8 characters');
	}else if(!isEmail(emailValue)) {
        setErrorFor(email, 'Please enter a valid e-mail');
	}else if(isCaptchaChecked == false) {
		setSuccessFor(password);
		setSuccessFor(email);
		var x = document.getElementById("snackbar");
		x.className = "show";
		setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
	}else{
				window.location.href = './contact/index.html';
    }
	
}

function SignUp(){

    const emailsignupValue = emailsignup.value.trim();
	const pwsignupValue = pwsignup.value.trim();
	const pwsignup1Value = pwsignup1.value.trim();

    const numbers = /[0-9]/g;
    const upperCaseLetters = /[A-Z]/g;
    const lowerCaseLetters = /[a-z]/g;
    const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;

	const Url = 'https://private-62265-kienjerry.apiary-mock.com/dev';
	const Data ={
		name : emailsignupValue,
		pass : pwsignup1Value
	};
	const aa = {
		headers:{
			"content-type":"application/json; charset=UTF-8"
		},
		body:Data,
		method:"POST"
	};

	fetch(Url, aa)
		.then(data =>{return data.json()})
		.then(res => {console.log(res);})
		.catch(error => console.error(error))
    // if(emailsignupValue === '') {
	// 	alert('email rỗng');
	// } else if (!isEmail(emailsignupValue)) {
	// 	alert('email sai định dạng');
	// } else if(pwsignupValue === '') {
	// 	alert('Pass rỗng rồi fen');
	// } else if(!pwsignupValue.match(numbers)) {
    //     alert('Pass phải có số nha');
	// }else if(!pwsignupValue.match(lowerCaseLetters)) {
    //     alert('Fen không viết chữ thường à');
	// }else if(!pwsignupValue.match(upperCaseLetters)) {
    //     alert('Ơ kìa ! viết thường thì phải viết HOA chứ ');
	// }else if(!pwsignupValue.match(format)) {
    //     alert('thêm ký tự đặc biệt cho khó nhớ nè');
	// }else if(pwsignupValue.length <=8) {
    //     alert('Hình như ký tự hơi ít , nhập 8 ký tự thử xem');
	// }else if(pwsignupValue != pwsignup1Value) {
    //     alert('Fen thử xem kỹ nhập lại mật khẩu đúng chưa');
	// }else{
		// alert('Kiểm tra log đi fen');
		// const Http = new XMLHttpRequest();
		// const url='https://private-62265-kienjerry.apiary-mock.com/dev';
		// Http.open("GET", url);
		// Http.send();

		// Http.onreadystatechange = (e) => {
		// 	console.log(Http.response);
		// }
    // }
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