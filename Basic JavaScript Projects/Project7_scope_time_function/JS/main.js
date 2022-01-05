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

function bank_open(){
    var dat = new Date();
    if(dat.getHours() > 9 && dat.getHours() < 17){
        document.getElementById("bank").innerHTML = "The bank is open.";
    }
    else{
        document.getElementById("bank").innerHTML = "The bank is closed.";
    }
}

function Time_function(){
    var Time = new Date().getHours();
    var Reply;
    if(Time < 12 == Time > 0){
        Reply = "It is morning time!";
    }
    else if(Time >= 12 == Time < 18){
        Reply = "It is afternoon.";
    }
    else{
        Reply = "It is evening time."
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}