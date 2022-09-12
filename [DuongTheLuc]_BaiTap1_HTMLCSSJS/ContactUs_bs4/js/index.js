function test() {}
function ValidateEmail(inputText) {
  // var i = 0;
  var inputText = document.getElementById("inputEmail4").value;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var inputPhone = document.getElementById("inputAddress").value;
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
