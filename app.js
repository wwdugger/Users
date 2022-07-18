//create the user constructor
class User {
    constructor(fname, lname, email, password, payment, color) {
        this.firstName = fname;
        this.lastName = lname;
        this.email = email;
        this.password = password;
        this.payment = payment;
        this.age = age;
    }
}
function isValid(User){
    let valid=true;
    if(User.email.length==0){
        valid=false;
        $("#txtEmail").addClass("input-error");
        console.error("Please enter a valid email");
    }
    if(User.password.length==0){
        valid=false;
        $("#txtPassword").addClass("input-error");
        console.error("Please eneter a valid password");
    }
    return valid;
}



//create the register function
function register(){
    //get the values from the inputs
    let userName=$("#txtFirstName").val();
    let userLname=$("#txtLastName").val();
    let userEmail=$("#txtEmail").val();
    let userPass=$("#txtPassword1").val();
    let userPassConfirmation= $("#txtPassword2").val();
    let userPaymentMethod=$("#txtPaymentMethod").val();
    let userAge=$("#numberAge").val();
    // create the object

    let newUser = new User(userName, userLname, userEmail, password, payment);
    console.log(newUser);
    if(isValid(newUser)){
        saveUser(newUser);
    }
}

function init(){
    $("#newUser").on("click",function(){
        $("#userForm").slideDown(3000);
    });
    $("#hideForm").hide();
    $("#newUser").on("click",function(){
        $("#userForm").sldeUp(3000);
    });
}

window.onload = init;