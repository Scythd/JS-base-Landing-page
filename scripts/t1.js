function menu1() {
    menuItemsOff()
    document.getElementById("window1").style.setProperty("display", "block");
}

function setTUName(name) {
    document.getElementById("TopUName").innerText = name;

}

function task1() {
    let text = prompt("Введите Ваше имя:");
    if (text == null) {
        return;
    }
    while (text == "") {
        text = prompt("Вы ничего не ввели, введите повторно.");
        if (text == null) {
            return;
        }
    }
    alert("Привет, " + text + "!");
    window.sessionStorage.setItem("SavedUName", text);
    setTUName(text);

}



if (window.sessionStorage.getItem("SavedUName")) {
    setTUName(window.sessionStorage.getItem("SavedUName"));
}