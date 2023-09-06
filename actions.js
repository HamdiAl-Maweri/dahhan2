function get_char(char){
    screen2 = document.getElementById("screen2");
    screen2.value += char.innerHTML
}
function set_result(){
    screen2 = document.getElementById("screen2");
    result = eval(screen2.value);
    screen1 = document.getElementById("screen1");
    screen1.value=result;
}

function clear_screen(){
    // screen1 = document.getElementById("screen1");
    document.getElementById("screen1").value=""
    screen2 = document.getElementById("screen2");
    // screen1.value="";
    screen2.value="";
}