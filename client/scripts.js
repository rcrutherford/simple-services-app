function sendit() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var success = document.getElementById("success");
    var myURL = "http://localhost:1337/localhost:8080/employees";

    if (!firstname || !lastname) {
        alert("Please fill out form completely!");
        return false;
    } else {
        var objToSend = { 
            "firstname": firstname, 
            "lastname": lastname
        };
        $.post(myURL, objToSend,
            function(result) {
                if (result) {
                    success.style.visibility = "visible";
                    // firstname = "";
                    // lastname= "";
                    setTimeout(function(){
                        document.getElementById("firstname").value = "";
                        document.getElementById("lastname").value = "";
                        success.style.visibility = "hidden";
                    }, 1500);
                    return true;
                } else {
                    return false;
                }
            }
        );

    }
}