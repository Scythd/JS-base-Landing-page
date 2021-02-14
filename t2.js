function menu2() {
    menuItemsOff()
    document.getElementById("window2").style.setProperty("display", "block");
}
function task2() {
    let h, b, r;
    h = prompt("Введите высоту");
    b = prompt("Введте основание");
    if (isNaN(h) || isNaN(b))
        r = "Ошибка в пользовательском вводе"
    else
        r = "Если треугольник существует, то его площадь равна " + 0.5 * h * b + " кв. ед.";
    alert(r);
}