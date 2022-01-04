function clickMe(){
    alert('I HAVE BEEN CLICKED! Generating text...');
    generate_par();
}

function generate_par(){
    var result = "This paragraph was created by JavaScript!"
    document.getElementById("the_text").innerHTML = result;
}

function generate_second(){
    var result = "moonbeams"
    document.getElementById("third_line").innerHTML += result;
}

function make_heading(){
    document.getElementById("my_head").innerHTML = "This is a generated heading!"
}

