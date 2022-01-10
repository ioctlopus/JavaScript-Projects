function chooser(){
    var outp;
    var choice = document.getElementById("option").value;
    switch(choice){
        case "Python":
            outp = "Python is tight!";
            break;
        case "C++":
            outp = "C++ is cool!";
            break;
        case "C":
            outp = "C is neat!";
            break;
        case "JavaScript":
            outp = "JavaScript is this!";
            break;
        default:
            outp = "That wasn't an option!"
    }
    document.getElementById("result1").innerHTML = outp;
}

function get_class(){
    var ret = "";
    var li = document.getElementsByClassName("collection1");
    for(var i = 0; i < li.length; i++){
        ret += (li[i].innerHTML + ' ');
    }
    document.getElementById("finish").innerHTML = ret;
}

function draw_1(){
    var c = document.getElementById("can1");
    var ctx = c.getContext("2d");

    var grd = ctx.createLinearGradient(0, 0, 170, 0);
    grd.addColorStop(0, "black");
    grd.addColorStop(1, "white");

    ctx.fillStyle = grd;
    ctx.fillRect(20, 20, 150, 100);
    var slate = document.getElementById("can1");
    ctx.beginPath();
    ctx.arc(90, 45, 35, 0, 2 * Math.PI);
    ctx.stroke();
}