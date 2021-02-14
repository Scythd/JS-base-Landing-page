function menu3() {
    menuItemsOff()
    document.getElementById("window3").style.setProperty("display", "block");
}
function task3() {
    let string1 = prompt("Введите строку номер 1");
    let string2 = prompt("Введите строку номер 2");
    alert(string1.length == string2.length);
}