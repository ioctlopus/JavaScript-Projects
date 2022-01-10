function Call_loop(){
    var st = "";
    var count = 0;
    var my_st = "Applebee's is somewhat overrated.";
    var res = "";

    while(count <= 10){
        st += String(count) + " ";
        count++;
    }
    count = 0;
    while(count < my_st.length){
        res += my_st[count];
        count++;
    }
    document.getElementById("Loop").innerHTML = st;
    document.getElementById("leng").innerHTML = res;
}

function for_loop(){
    var res = "";
    var insts = ["Trumpet", "Harmonica", "Tamborine", "Cello", "Violin"];
    for(var i = 0; i < insts.length; i++){
        res += (insts[i] + " ");
    }
    document.getElementById("List_of_Instruments").innerHTML = res;
}

function array_Function(){
    let arr = [12, 34, 90, 2];
    document.getElementById("Array").innerHTML = (String(arr[2] + String(arr[3])));
}

function constant_function(){
    const my_obj = {name: "Ken", weight: "170", id: "A123"};
    my_obj.id = "Ollie";
    my_obj.age = "22";
    document.getElementById("Constant").innerHTML = (my_obj.id + " " + my_obj.age);
}

function my_ret(){
    return "My return.";
}

function do_ret(){
    document.getElementById("ret").innerHTML = my_ret();
}

function use_obj(){
    let my_object = {
        name: "Allan",
        age: 33,
        display : function(){
            let st = (this.name + " - " + String(this.age))
            document.getElementById("ob").innerHTML = st;
        }
    };
    my_object.display();
}

function break_cont(){
    let st = "";
    while(true){
        st += "C";
        if(st.length >= 10){
            break;
        }
    }
    st += "  ";
    for(let i = 0; i < 10; i++){
        if(i == 4){
            continue;
        }
        st += (String(i) + " ")
    }
    document.getElementById("b_con").innerHTML = st;
}