var onContctUsSubmit = function () {
    var form = document.getElementById('contactForm');

    $(".thanks").hide();
    $(".errors").hide();

    if (grecaptcha.getResponse() !== '') { 
        if (form.checkValidity()) {
            // form valid, let's hide the form
            $(form).hide();
            // let's submit the form in background
            $.post(form.action, JSON.stringify({
                name: form.name,
                email: form.email,
                message: form.message,
                'g-recaptcha-response': grecaptcha.getResponse()
            }));
            $('.thanks > div').addClass('wow fadeInUp animated');
            $('.thanks').show();
        } else {
            $('.g-recaptcha-response').addClass('error');
        }
    } else { 
        // Show missing recaptcha message
    }
    /*
    if ($("#contactForm input[name='name']").val() === "" ||
            $("#contactForm input[name='email']").val() === "" || 
            grecaptcha.getResponse() === '') {
            $(".errors").show();
            $("#contactForm button").show();
        } else {
            $(".errors").hide();
            $.post($("#contactForm").attr('action'), JSON.stringify({
                name: $("#contactForm input[name='name']").val(),
                email: $("#contactForm input[name='email']").val(),
                message: $("#contactForm textarea[name='message']").val(),
                'g-recaptcha-response': grecaptcha.getResponse()
            }), function (data) {
                $(".thanks").show();
                $("#contactForm button").hide();
                $("#contactForm input[name='name']").val('');
                $("#contactForm input[name='email']").val('');
                $("#contactForm textarea[name='message']").val('');
            }, 'json');
        }
    });
*/
    return false;
};

$(document).ready(function () {
    $(".thanks").hide();
    $(".sending").hide();
    $(".errors").hide();
    $("#contactForm button").click(function(event) {
        $(".sending").show();
        $("#contactForm button").hide();
    });
});