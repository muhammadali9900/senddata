$(document).ready(function () {
    $("#loginForm").submit(function (event) {
        var userdataEmail = $("#useremail1").val(); // Use val() instead of value
        var userdataPassword = $("#password1").val(); // Use val() instead of value

        var jsonEncode = {
            'username': userdataEmail,
            'password': userdataPassword,
        };

        $.ajax({
            type: "POST",
            url: "http://192.168.100.67:8000/api/user-login",
            data: jsonEncode,
            dataType: "json",
            encode: true,
        })
            .done(function (responseData) {
                if (responseData.success) {
                    console.log("Successfully", responseData);
                    alert("Successfully", responseData);

                } else {
                    alert("Invalid credentials");
                }
            })
            .fail(function (error) {
                console.error("Error:", error);
            });
        event.preventDefault();
    });
});
