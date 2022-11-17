$(document).ready(function(){
    $('#sendMessage').click(function(){
        var name = $('#fullName').val();
        var email = $('#email').val();
        var contact = $('#contact').val();
        var message = $('#message').val();
        
        var customerInfo = 'Name:' + name + "\r\n" + 'Email:' + email + "\r\n" + 'contact:' + contact + "\r\n" + 'Message:' + message;
        console.log(customerInfo)

        $.ajax({
            type: "POST",
            url: 'includes/call-form.php',
            data: customerInfo,
            success: function(){
                alert("Message sent")
            }
        })
    })
})
