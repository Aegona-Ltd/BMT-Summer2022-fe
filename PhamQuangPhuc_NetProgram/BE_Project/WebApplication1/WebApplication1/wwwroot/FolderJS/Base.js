$('.message .close')
    .on('click', function () {
        $(this)
            .closest('.message')
            .transition('fade')
            ;
    });

function ShowMessage(i,messageString) {
    const messages = {
        0: 'negative',
        1: 'positive'
    };
  
    //const element = document.getElementById("my-message");

    //element.className.replace = "ui " + messages[i] + " message";
    //console.log(element);
     
    const element = document.getElementById("my-message");
    element.className = "ui " + messages[i] + " message";
    const mesString = document.getElementById("my-message-content");
    mesString.innerHTML = messageString;
}