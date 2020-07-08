const sendContact = document.getElementsByName('contact-send');

sendMessage = () => {
    var msg = { 
        userName : document.getElementsByName('name')[0].value,
        userMail : document.getElementsByName('email')[0].value,
        userMessage : document.getElementsByName('message')[0].value
    }
    alert(`${msg.userName} ${msg.userMail} ${msg.userMessage}`);
}

sendContact[0].addEventListener('click', sendMessage, false);