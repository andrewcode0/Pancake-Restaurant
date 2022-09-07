const but1 = document.getElementById('but1');
const hidshow1 = document.getElementById('c1');
const hidshow2 = document.getElementById('c2');
const hidshow3 = document.getElementById('c3');


but1.onclick = function despreNoi() {
    if(hidshow1.style.visibility == "hidden"){
    hidshow1.style.visibility = "visible";
    } else hidshow1.style.visibility = "hidden";
}

but2.onclick = function meniu() {
    if(hidshow2.style.visibility == "hidden"){
        hidshow2.style.visibility = "visible";
        } else hidshow2.style.visibility = "hidden";
}
but3.onclick = function contact() {
    if(hidshow3.style.visibility == "hidden"){
        hidshow3.style.visibility = "visible";
        } else hidshow3.style.visibility = "hidden";
}
