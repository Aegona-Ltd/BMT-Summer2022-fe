function test() {}
function ValidateEmail() {
  // var i = 0;
  var inputText = document.getElementById("user_mail").value;
  console.log(inputText);
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var inputPhone = document.getElementById("user_phone").value;
  console.log(inputPhone);
  var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  if (inputText.match(mailformat)) {
  } else {
    alert("Email is not valid!");
  }

  if (inputPhone.match(phoneno)) {
  } else {
    alert("Phone is not valid!");
  }

  if (inputText.match(mailformat) && inputPhone.match(phoneno)) {
    alert("Success!");
  }
}
