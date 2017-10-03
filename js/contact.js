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
                name: $(form).find('input[name="name"]').val(),
                email: $(form).find('input[name="email"]').val(),
                message: $(form).find('textarea[name="message"]').val(),
                'g-recaptcha-response': grecaptcha.getResponse()
            }));
            $('.thanks > div').addClass('wow fadeInUp animated');
            $('.thanks').show();
        } else {
        }
    } else { 
        $('.captcha-error').show();
    }
    return false;
};

$(document).ready(function () {
    $(".thanks").hide();
    $(".sending").hide();
    $(".errors").hide();
});