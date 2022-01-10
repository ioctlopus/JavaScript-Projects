function validateForm() {
    let fi = document.forms["myForm"]["fname"].value;
    let em = document.forms["myForm"]["email"].value;
    if(fi == "") {
        alert("Name must be filled out");
        return false;
    }
    if(em == ""){
        alert("Email must be filled out");
        return false;
    }
}