function ValidateEmail() {
  var inputText = document.getElementById("email").value;
  var inputPassword = document.getElementById("password").value;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.match(mailformat) && inputPassword !== "") {
    return alert("Success!");
  } else if (inputText === "") {
    alert("Please enter email!");
  } else if (inputPassword === "") {
    alert("Please enter password!");
  } else {
    alert("Email không đúng! Mời nhập lại");
  }
  return false;
}
