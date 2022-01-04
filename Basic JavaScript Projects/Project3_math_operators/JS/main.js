function do_op(){
    var result = String(5 + 10);
    document.getElementById("Maths").innerHTML = "5 + 10 = " + result;
}

function do_sub(){
    document.getElementById("subt").innerHTML = String(3 - 1);
}

function mul_div(){
    document.getElementById("md").innerHTML = "10 / 5 = " + 10 / 5 + " and 10 * 5 = " + 10 * 5;
}

function many(){
    document.getElementById("lots").innerHTML = "10 * 23 / 2.0 = " + 10 * 23 / 2.0;
}

function mod_demo(){
    document.getElementById("modd").innerHTML = "The remainder of 33 / 4 is: " + 33 % 4;
}

function neg_demo(){
    document.getElementById("neg").innerHTML = "Negative 10 is: " + -10;
}

function inc_dec(){
    var num1 = 2, num2 = 5;
    document.getElementById("ind").innerHTML = ++num1 + " " + --num2;
}

function rand_num(){
    document.getElementById("ran").innerHTML = Math.random() * 20;
}

function log_2(){
    window.alert(Math.log2(8));
}