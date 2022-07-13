//create the user constructor
class User {
    constructor(fname, lname, email, password, payment, color) {
        this.firstName = fname;
        this.lastName = lname;
        this.email = email;
        this.password = password;
        this.payment = payment;
        this.color = color;
    }
}
//create the register function
function register(){
    //get the values from the inputs
    let userName=$("#txtFirstName").val();
    let userLname=$("#txtLastName").val();
    let userEmail=$("#txtEmail").val();
    let userPass=$("#txtPassword1").val();
    let userPassConfirmation= $("#txtPassword2").val();
    let userColor=$("txtColor").val();
    let userPaymentMethod=$("#txtPaymentMethod").val();
    // create the object

    let newUser = new User(fname, lname, email, password, payment, color);
    //display the user on the console
}
//jquer vs javascript
document.getElementById("txtFirstName").value;

  