function slice_me(){
    var my_string = "There is a good chance that I'm hungry";
    document.getElementById("a_slice").innerHTML = my_string.slice(11, 16);
}

function upp(){
    var low = "this is all lowercase.";
    document.getElementById("to_up").innerHTML = low.toUpperCase();
}

function search_test(){
    var whole = "This is the whole string.";
    document.getElementById("s_test").innerHTML = whole.search("the");
}

function to_st(){
    var num = 334;
    document.getElementById("to_str").innerHTML = num.toString();
}

function to_prec(){
    var num = 12.33598;
    document.getElementById("prec").innerHTML = num.toPrecision(2);
}

function my_type(num_){
    this.num = num_;
}

my_type.prototype.valueOf = function(){
    return this.num;
}

var obj = new my_type(8);

function special_num(){
    document.getElementById("v_of").innerHTML = obj.valueOf();
}

function fix(){
    var num = 89.222;
    document.getElementById("to_fix").innerHTML = num.toFixed(1);
}