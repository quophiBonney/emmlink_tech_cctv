$(document).ready(function(){
    $('#message-us').click(function(){
        var fullName = $('#name').val();
        var emailAddress = $('#emailAddress').val();
        var messageArea = $('#messageArea').val();

        var userCredentials = 'Name:' + fullName + '\r\n' + 'Email:' + emailAddress + '\r\n' + 'Message:' + messageArea;
        console.log(userCredentials);

        $.ajax({
            type: "POST",
            url: 'includes/contactForm.php',
            data: userCredentials,
           success: function(){
            alert("Your message is sent. Thank you")
            }
        })
    })
})
