// for validation of login form

function validate(){
    // taking values entered in the field to variables
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    // regular expressions for validation
    // regular expression for email
    var regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
    // regular expression for password
    var regexp3 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@!#_$%^&*-])[a-zA-Z0-9@!#_$%^&*-]{8,}$/;

    if(regexp.test(email)){
        document.getElementById("error").innerHTML = "";
        // document.getElementById("error").style.color = "green";
        document.getElementById("email").style.border = "2px solid #2ecc71";
        // return true;
        if(regexp3.test(password)){
            document.getElementById("error_pass").innerHTML = "Password is correct";
            document.getElementById("error_pass").style.color = "green";
            document.getElementById("password").style.border = "2px solid #2ecc71";
            return true;
        }
        else{
            document.getElementById("error_pass").innerHTML = "Password is incorrect";
            document.getElementById("error_pass").style.color = "red";
            document.getElementById("password").style.border = "2px solid red";
            return false;
            }
    }
    else{
        document.getElementById("error").innerHTML = "Invalid email id";
        document.getElementById("error").style.color = "red";
        document.getElementById("email").style.border = "2px solid red";
        return false;
    }
}


// for validation of signup form

function validate2(){ 
    // taking entered values to variables  
    var email = document.getElementById("email").value;
    // var error = document.getElementById("error").value;
    var mobile = document.getElementById("mobile").value;
    // var error_mob = document.getElementById("error_mob").value;
    var password = document.getElementById("password").value;
    // var error_pass = document.getElementById("error_pass").value; 
    var password_con = document.getElementById("password_con").value;
    // var error_pass_con = document.getElementById("error_pass_con").value; 
    // regular expression for validation
    // regular expression for email
    var regexp = /^([\w\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
    // regular expression for mobile number
    var regexpm = /^[6-9]\d{2}[\ -.]{1}\d{3}[\ -.]{1}\d{4}$/;
    var regexpm2 = /^[6-9]\d{2}\d{3}\d{4}$/;
    // regular expression for password
    var regexp1 = /^(?=.*[A-Z])(?=.*[a-z])[A-Za-z]{3,}$/; 
    var regexp2 = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-Za-z0-9]{6,}$/;
    var regexp3 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@!#_$%^&*-])[a-zA-Z0-9@!#_$%^&*-]{8,}$/;
  
    if(regexp.test(email)){
        document.getElementById("error").innerHTML = "";
        // document.getElementById("error").style.color = "green";
        document.getElementById("email").style.border = "2px solid #2ecc71";
        // return true;
        if(regexpm.test(mobile)||regexpm2.test(mobile)){
            document.getElementById("error_mob").innerHTML = "";
            // document.getElementById("error_mob").style.color = "green";  
            document.getElementById("mobile").style.border = "2px solid #2ecc71";
            // return true;
            if(regexp1.test(password)){
                document.getElementById("error_pass").innerHTML = "Password is weak, include number and special character too";
                document.getElementById("error_pass").style.color = "orange";
                document.getElementById("password").style.border = "2px solid orange";
                // document.getElementById("message").src = "images/passora.jpg";
                // include number and special character orange
                return false;
             }

            if(regexp2.test(password)){
                document.getElementById("error_pass").innerHTML = "Looking good!!! include a special character...";
                document.getElementById("error_pass").style.color = "yellow";
                document.getElementById("password").style.border = "2px solid yellow";
                // document.getElementById("message").src = "images/passyellow.jpg";
                return false;
            }
            if(regexp3.test(password)){
                document.getElementById("error_pass").innerHTML = "Strong password";
                document.getElementById("error_pass").style.color = "green";
                document.getElementById("password").style.border = "2px solid #2ecc71";
                // document.getElementById("message").src = "images/passgreen.jpg";
                // return true;
                if(password == password_con){
                    document.getElementById("error_pass_con").innerHTML = "";
                    document.getElementById("error_pass").innerHTML = "";
                    // document.getElementById("error_pass_con").style.color = "green";
                    // document.getElementById("error_pass_con").style.border = "2px solid #2ecc71";
                    document.getElementById("password_con").style.border = "2px solid #3498db";
                    // document.getElementById("message").src = "images/okay.jpg";
                    return true;
                }
                else{
                    document.getElementById("error_pass_con").innerHTML = "Both password should be same";
                    document.getElementById("error_pass_con").style.color = "red";
                    document.getElementById("password_con").style.border = "2px solid red";
                    // document.getElementById("message").src = "images/same2.jpg";
                    return false;
                    }
            }
            else{
                document.getElementById("error_pass").innerHTML = "Password should contain minimum 8 characters including uppercase and lowercase letters,numbers and special character";
                document.getElementById("error_pass").style.color = "red";
                document.getElementById("password").style.border = "2px solid red";
                // document.getElementById("message").src = "images/passredd.jpg";
                return false;
                }
        }
        else{
            document.getElementById("error_mob").innerHTML = "Invalid mobile number/Incorrect format";
            document.getElementById("error_mob").style.color = "red";
            document.getElementById("mobile").style.border = "2px solid red";
            return false;
        }
    }
        else{
        document.getElementById("error").innerHTML = "Invalid email id";
        document.getElementById("error").style.color = "red";
        document.getElementById("email").style.border = "2px solid red";
        return false;
    }
    
}
