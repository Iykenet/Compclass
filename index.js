function validateInput() {
    const firstName =
    document.getElementById("firstName").value;
    const lastName =
    document.getElementById("lastName").value;
    const message =
    document.getElementById("message").value;
    const email =
    document.getElementById("email").value;
    const phoneNumber =
    document.getElementById("phoneNumber").value;
    let isValid = true;
        if(firstName.length < 5) {
            alert("first name must be at least 5 characters");
            return false;
        }
        return true;
        if(lastName.length < 5) {
            alert("last name must be at least 5 characters");
            return false;
        }
        return true;
        if(message.length < 50) {
            alert("message must be more than 50");
            return false;
        }
        return true;
        if(email.includes("@")) {
            alert("Email must contain the domain name @");
            isValid = false;
        }
        if  (phoneNumber.length !== 10 || !/^\d+$/.test(phoneNumber)){
            alert("Phone number must contain exactly 10 digits");
            isValid = false;
        }
        if  (isValid){
            alert("form is valid!");
        }else{
            alert("please correct the errors and try again.");
        }
}