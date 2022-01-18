function validateForm() {
    let fi = document.forms["myForm"]["fname"].value;
    let em = document.forms["myForm"]["email"].value;
    let ag = document.forms["myForm"]["age"].value;
    if(fi == "") {
        alert("Name must be filled out");
        return false;
    }
    if(em == ""){
        alert("Email must be filled out");
        return false;
    }
    if(ag == ""){
        alert("Age must be filled out");
        return false;
    }
}