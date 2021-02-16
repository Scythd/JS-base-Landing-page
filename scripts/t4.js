function menu4() {
    menuItemsOff()
    document.getElementById("window4").style.setProperty("display", "block");
}
document.getElementById("arrElIn").value = null;
let arr4 = new Array();
function t4add() {
    let temp = document.getElementById("arrElIn").value;
    if (temp == "" || temp == null || isNaN(temp) || temp == " ") {
        document.getElementById("t4e").innerText = "Ошибка ввода";
    } else {
        arr4.push(Number.parseFloat(temp));
        document.getElementById("t4e").innerText = "Элемент успешно добавлен";
    }
    document.getElementById("arrElIn").value = null;
    document.getElementById("t4r").innerText = " ";
}
function task4() {
    arr4.sort((a, b) => a - b);
    let r = "";
    if (arr4.length == 0) {
        r = "Вы не ввели ни одного числа";
    }
    else if (arr4.length == 1) {
        r = "max = " + arr4[0] + ", min = " + arr4[0];
    }
    else {
        r = "max = " + arr4[arr4.length - 1] + ", min = " + arr4[0];
    }
    document.getElementById("t4r").innerText = r;
    arr4 = new Array();
}