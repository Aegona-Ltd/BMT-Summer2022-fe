function test() {}
function ValidateEmail(inputText) {
  var i = 0;
  var inputText = document.getElementById("email").value;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.match(mailformat)) {
  } else {
    // i++;
    alert("Email is not valid!");
  }
  var inputPhone = document.getElementById("phone").value;
  var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  if (inputPhone.match(phoneno)) {
    return true;
  } else {
    // i++;
    alert("Phone is not valid!");
  }
}
