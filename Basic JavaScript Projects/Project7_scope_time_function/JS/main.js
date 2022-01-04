var gl = "GLOBAL";

function l_var(){
    var lo = "LOCAL";
    alert(gl + " | " + lo);
}

function late_for_work(){
    if((new Date().getHours() > 9)){
        document.getElementById("late").innerHTML = "You're late for work!";
    }
    else{
        document.getElementById("late").innerHTML = "You're not late!"
    }
}