let ans = new Array();
ans.push("q13", "q23", "q32", "q42", "q51", "q63", "q72", "q81", "q94", "q101", "q111", "q121", "q132", "q141", "q154");
function menu6() {
    menuItemsOff()
    document.getElementById("window6").style.setProperty("display", "block");
}

function t6back() {
    document.getElementById("test__holder").style.setProperty("display", "none");
    document.getElementById("t6dc").style.setProperty("display", "block");
    document.getElementById("t6launch").style.setProperty("display", "block");
}
function t6submit() {
    let result = 0;
    for (let i = 1; i < 16; i++) {
        for (let j = 1; j < 5; j++) {
            let radiobtn = document.getElementById("q" + i + "" + j);
            radiobtn.disabled = true;
            if (radiobtn.checked == true) {
                if (ans.includes("q" + i + "" + j)) {
                    result++;
                }
                
                radiobtn.nextElementSibling.style.setProperty("background-color", "red");
            }
        }
    }
    document.getElementById("t6resHolder").innerText = "Ваш результат: " + result + "/15";
    document.getElementById("q13").nextElementSibling.style.setProperty("background-color", "lime");
    document.getElementById("q23").nextElementSibling.style.setProperty("background-color", "lime");
    document.getElementById("q32").nextElementSibling.style.setProperty("background-color", "lime");
    document.getElementById("q42").nextElementSibling.style.setProperty("background-color", "lime");
    document.getElementById("q51").nextElementSibling.style.setProperty("background-color", "lime");
    document.getElementById("q63").nextElementSibling.style.setProperty("background-color", "lime");
    document.getElementById("q72").nextElementSibling.style.setProperty("background-color", "lime");
    document.getElementById("q81").nextElementSibling.style.setProperty("background-color", "lime");
    document.getElementById("q94").nextElementSibling.style.setProperty("background-color", "lime");
    document.getElementById("q101").nextElementSibling.style.setProperty("background-color", "lime");
    document.getElementById("q111").nextElementSibling.style.setProperty("background-color", "lime");
    document.getElementById("q121").nextElementSibling.style.setProperty("background-color", "lime");
    document.getElementById("q132").nextElementSibling.style.setProperty("background-color", "lime");
    document.getElementById("q141").nextElementSibling.style.setProperty("background-color", "lime");
    document.getElementById("q154").nextElementSibling.style.setProperty("background-color", "lime");
}
function t6nt() {
    document.getElementById("t6resHolder").innerText = "Здесь будет Ваш результат";
    for (let i = 1; i < 16; i++) {
        for (let j = 1; j < 5; j++) {
            let radiobtn = document.getElementById("q" + i + "" + j);
            radiobtn.disabled = false;
            radiobtn.checked = false;
            radiobtn.nextElementSibling.style.setProperty("background-color", "rgb(240, 222, 192)");
        }
    }
}
function task6() {
    document.getElementById("test__holder").style.setProperty("display", "block");
    document.getElementById("t6dc").style.setProperty("display", "none");
    document.getElementById("t6launch").style.setProperty("display", "none");

}