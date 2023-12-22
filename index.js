$(document).ready(function () {
    $("#for").submit('click', function (event) {
        var userName = document.getElementById('username').value;
        var userEmail = document.getElementById('useremail').value;
        var userPhone = document.getElementById('userphone').value;
        var userGender = document.getElementById('gender').value;
        var userPassword = document.getElementById('userpassword').value;

        var formData = {
            user_name: userName,
            emailid: userEmail,
            mobno: userPhone,
            gender: userGender,
            password: userPassword
        };

        $.ajax({
            type: "POST",
            url: "http://192.168.100.67:8000/api/user-registration",
            data: formData,
            dataType: "json",
            encode: true,
        })

            .done(function (data) {
                console.log(data);
                window.location.href = "login.html";
            })
            .fail(function (error) {
                console.error("Error:", error);
            });
        console.log(formData);
        event.preventDefault();
    });
});

