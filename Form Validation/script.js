function validate() {
  let username = document.getElementById("username").value; //.value is used to take value from html input field
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let cpassword = document.getElementById("Confirm-username").value;

  console.log(`the username is ${username} and it email is ${email}`);

  CheckUsername(username);
  CheckEmail(email);
  CheckPassword(password);
  CheckConfirmPassword(cpassword,password);
}
function CheckUsername(username) {
  if (username.length > 7) {
    document.getElementById("username").classList.add("success"); //class list used for add styling
    document.getElementById("username").classList.replace("error", "success");
    document.getElementById("username_error").innerHTML = "";
  } else {
    document.getElementById("username").classList.add("error");
    document.getElementById("username_error").innerHTML =
      "pleaset enter username 8 charcter long";
  }
}
function CheckEmail(email) {
  if (email.length > 5) {
    document.getElementById("email").classList.add("success"); //class list used for add styling
    document.getElementById("email").classList.replace("error", "success");
    document.getElementById("email_error").innerHTML = "";
  } else {
    document.getElementById("email").classList.add("error");
    document.getElementById("email_error").innerHTML =
      "pleaset include '@ gmail.com ";
  }
}

 function CheckPassword(password) {
  if (password.length > 7) {
    document.getElementById("password").classList.add("success"); //class list used for add styling
    document.getElementById("password").classList.replace("error", "success");
    document.getElementById("password_error").innerHTML = "";
  } else {
    document.getElementById("password").classList.add("error");
    document.getElementById("password_error").innerHTML =
      "pleaset enter password 8 charcter long";
  }
}
function  CheckConfirmPassword(cpassword,password) {
  if ( cpassword==password) {
    document.getElementById("cpassword").classList.add("success"); //class list used for add styling
    document.getElementById("cpassword").classList.replace("error", "success");
    document.getElementById("Confirm-username_error").innerHTML = "";
  }
   else {
    document.getElementById("cpassword").classList.add("error");
    document.getElementById("Confirm-username_error").innerHTML = "pleaset enter correct password";
  }
}
