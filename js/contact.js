var onContctUsSubmit = function () {
    $(document).ready(function () {
        $(".thanks").hide();
        $(".sending").hide();
        $(".errors").hide();
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