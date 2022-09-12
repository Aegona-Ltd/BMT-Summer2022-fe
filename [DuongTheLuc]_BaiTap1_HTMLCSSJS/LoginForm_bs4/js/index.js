function test() {
  console.log("test");
  var x = document.getElementById("hidePassword");
  if (x.style.display == "block") {
    document.getElementById("hidePassword").style.display = "none";
    document.getElementById("unHidePassword").style.display = "block";
    document.getElementById("exampleDropdownFormPassword1").type = "password";
  } else {
    document.getElementById("hidePassword").style.display = "block";
    document.getElementById("unHidePassword").style.display = "none";
    document.getElementById("exampleDropdownFormPassword1").type = "text";
  }
}
function ValidateEmail(inputText) {
  var inputText = document.getElementById("exampleDropdownFormEmail1").value;
  var inputPassword = document.getElementById(
    "exampleDropdownFormPassword1"
  ).value;
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
