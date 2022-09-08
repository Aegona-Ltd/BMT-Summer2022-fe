function test() {}
function ValidateEmail(inputText) {
  var inputText = document.getElementById("email").value;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.match(mailformat)) {
    return alert("Success!");
  } else {
    alert("Email không đúng! Mời nhập lại");
  }
  return false;
}
