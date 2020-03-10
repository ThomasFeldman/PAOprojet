function a(){
    console.log("asdf");
}


a();

//Submitted Launchcode assignment




function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}




//
//@app.route("/", methods=['GET'])
//def index():
//    template = jinja_env.get_template('first-run.html')
//    return template.render()
//
//def validate_general(i):
//    if len(i)<3 or len(i)>20:
//            return False
//    elif i.__contains__(" "):
//            return False
//    else:
//            return True
//def validate_email(i):
//    if i == (""):
//        return True
//    else:
//        return validate_general(i)
//
//    
//    if i.count("@")==1 and i.count(".")==1:
//        return True
//    else:
//        return False
//
//
//@app.route('/', methods=['POST'])
//def check_validation():
//    username=request.form['username']
//    password=request.form['password']
//    verify_password=request.form['verify_password']
//    email=request.form['email']
//    template = jinja_env.get_template('first-run.html')
//    new_template = jinja_env.get_template('hello.html')
//
//
//    if validate_general(username) == False:
//        username_error=("Username is incorrect")  
//    else:
//        username_error=("")  
//
//    if validate_general(password) == False:
//        password_error=("Password is incorrect")
//    else:
//        password_error=("")
//
//    if password != verify_password:
//        verify_password_error=("Passwords do not match")
//    else:
//        verify_password_error=("")
//
//    if validate_email(email) == False:
//        email_error=("Email is incorrect")
//    else:
//        email_error=("")
//
//    if validate_general(username) == True and validate_general(password) and password == verify_password and validate_email(email) == True:
//        return new_template.render(username=username)
//
//    return template.render(username_error=username_error, password_error=password_error, verify_password_error=verify_password_error, email_error=email_error, username=username, email=email)
//    
//if __name__ == "__main__":
//    app.run(debug=True)