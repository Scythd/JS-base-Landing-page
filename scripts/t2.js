function menu2() {
    menuItemsOff()
    document.getElementById("window2").style.setProperty("display", "block");
}
function task2() {
    let h, b, r;
    h = (prompt("Введите высоту"));
    h = h.trim();
    if (h == "" || h == null || isNaN(h) || h == " ") {
        while (h == "" || h == null || isNaN(h) || h == " ") {
            h = (prompt("Ошибка в пользовательском вводе. Введите высоту правильно"));
            h = h.trim();
        }
    }
    b = (prompt("Введте основание"));
    b = b.trim();
    if (b == "" || b == null || isNaN(b) || b == " ") {
        while (b == "" || b == null || isNaN(b) || b == " ") {
            b = (prompt("Ошибка в пользовательском вводе. Введите высоту правильно"));
            b = b.trim();
        }
    }
    r = "Если треугольник существует, то его площадь равна " + 0.5 * h * b + " кв. ед.";
    alert(r);
}


