$(document).ready(function() {
    if ($('#registration_form_email').length > 0) {

        $("#registration_form_email").bind("input change keyup", checkIfEmailExists);

        let inUse = true;

        function checkIfEmailExists() {
            let email = $("#registration_form_email").val();
            let url = (window.location.href).split('/');
            url.pop();
            url = url.join('/');

            $.ajax({
                type: "POST",
                url: url+"/checkemailexist",
                data: {email: email},
                success: function(data) {
                    $('.form_message').html(data.message);
                },
                error: function(XMLHttpRequest) {
                    $('.form_message').html(XMLHttpRequest.responseJSON.message);
                }
            });
        }
    }
});
