function cust_id(){
    var cust = {
        name: "Chan",
        age: 22,
        id: 192828
    }
    delete cust.name;
    document.getElementById("ci").innerHTML = String(cust.id) + cust.name;
}