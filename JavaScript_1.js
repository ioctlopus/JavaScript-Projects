function choose(){
    var out;
    var choice = document.getElementById("option").value;
    switch(choice){
        case "Python":
            out = "Python is tight!";
            break;
        case "C++":
            out = "C++ is cool!";
            break;
        case "C":
            out = "C is neat!");
            break;
        case "JavaScript":
            out = "JvaScript is this!";
            break;
        default:
            out = "That wasn't an option!"
            break;
    }
    document.getElementById("result1").innerHTML = out;
}