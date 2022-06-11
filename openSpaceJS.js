// document.querySelectorAll("input").forEach(inputElement => inputElement.disabled = true);
// document.getElementsByClassName("password-input").item(0).disabled = false;
let okBtn = document.getElementById("ok-btn");
// okBtn.disabled = false;
okBtn.addEventListener("click", function (){
    let enteredPassword = document.getElementsByClassName("password-input").item(0).value;
    if (enteredPassword=== "TrustNo1") {
        document.querySelectorAll("input").forEach(inputElement => inputElement.disabled = false);
        document.getElementsByClassName("password-input").item(0).disabled = true;
        document.getElementsByClassName("launch-btn").item(0).disabled = true;
        okBtn.disabled = true;
    }
    // document.getElementsByClassName("password-input").item(0).value = "";
})

let checkBoxes = document.querySelectorAll(".checkBox");
let leverSliders = document.querySelectorAll(".leverSlider");
let enableLaunch = false;

function controlChanged(){
    enableLaunch = true;
    for (let checkBox of checkBoxes){
        if (!checkBox.checked) enableLaunch = false;
    }
    for (let leverSlide of leverSliders){
        if (leverSlide.value != '100') {enableLaunch = false;
            console.log("hi"+leverSlide.value)}
    }
    if (enableLaunch) document.getElementsByClassName("launch-btn").item(0).disabled = false;
}
function testPass14() {
    let inputs = document.querySelectorAll('input');
    for (let item of inputs) {
        item.onchange = function () {
            controlChanged();
        }
    }
}
testPass14();
//
// checkBoxes.forEach(element => element.addEventListener("onchange", function (){
//     controlChanged();
// }));
// leverSliders.forEach(element2 => element2.addEventListener("onchange", function (){
//     controlChanged()
// }));

document.getElementsByClassName("launch-btn").item(0).addEventListener("click",function (){
    let id = null;
    /*function myMove()*/ {
        let elem = document.getElementsByClassName("rocket").item(0);
        let posTop = elem.style.top;
        let posLeft = elem.style.left;
        clearInterval(id);
        id = setInterval(frame, 10);
        console.log(posTop+""+posLeft);
        function frame() {
            if (posTop == 350) {
                clearInterval(id);
            } else {
                posTop--;
                posLeft++;
                elem.style.top = posTop + 'px';
                elem.style.left = posLeft +50+ 'px';
            }
        }
    }
})