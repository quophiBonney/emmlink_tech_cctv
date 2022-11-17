$(document).ready(function(){
    $('partnerWithUs').click(function(){
        var companyName = $('#companyName').val();
        var email = $('#email').val();
        var contact = $('#contact').val();
        var continent = $('#continent').val();

        var userCredentials = 'Company Name:' + companyName + '\r\n' + 'Email:' + email + '\r\n' + 'Contact:' + contact + '\r\n' + 'Continent:' + continent;
        console.log(partnerCredentials);

        $.ajax({
            type: "POST",
            url: 'includes/partner-form.php',
            data: partnerCredentials,
           success: function(){
            alert("Your message is sent. Thank you")
            }
        })
    })
})
