// Send an email

const TL =gsap.timeline({paused: true});

function sendEmail(){
    Email.send({
        SecureToken : "552b9946-24a8-498a-9102-232c6021210c",
        To : 'sebastien.dufour62460@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New message from " + document.getElementById("name").value,
        Body : document.getElementById("message").value,
    }).then(
        message => alert(message)
    );
};