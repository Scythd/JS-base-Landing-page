function menu4() {
    menuItemsOff()
    document.getElementById("window4").style.setProperty("display", "block");
}

function task4() {
    let input = prompt("Введите массив из 5ти чисел, через запятую (Пример:1,2,5,6,3)");
    if (input == null) { 
        alert("Вы не ввели число"); 
        return; 
    }
    let arr = new Array();
    let b = 0;
    let i = 0;
    for (; i < input.length; i++) {
        if (input[i] == "," || input[i] == ",") {
            let toPush = Number.parseFloat(input.substring(b, i));
            if (!isNaN(toPush))
                arr.push(toPush);
            b = i + 1;
        }
    }
    let toPush = Number.parseFloat(input.substring(b, input.length));
    if (!isNaN(toPush))
        arr.push(toPush);
    arr.sort((a, b) => a - b);
    console.log(arr);
    if (arr.length == 0)
        alert("Вы не ввели число");
    else if (arr.length == 1)
        alert("max = " + arr[0] + ", min = " + arr[0]);
    else
        alert("max = " + arr[arr.length - 1] + ", min = " + arr[0]);
}