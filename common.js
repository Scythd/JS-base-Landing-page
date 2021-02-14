function menuItemsOff() {
    let elems = document.getElementsByClassName("window");
    for (let i = 0; i < elems.length; i++) {
        let elem = elems[i];
        elem.style.setProperty("display", "none")
    }
    document.getElementById("menuback").style.setProperty("display", "block");

}

function menuback() {
    menuItemsOff();
    document.getElementById("menuback").style.setProperty("display", "none");
}





//// 
let last = performance.now(),
    step = 1 / 60,
    dt = 0,
    now;

let frame = () => {
    now = performance.now();
    dt = dt + Math.min(1, (now - last) / 1000); // исправление проблемы неактивных вкладок
    while (dt > step) {
        dt = dt - step;
        update(step);
    }
    last = now;

    render(dt);
    requestAnimationFrame(frame);
}

requestAnimationFrame(frame);

let toUpdate = new Array();
let toRender = new Array();
let update = () => {
    toUpdate.forEach((x) => {x.update()});
}

let render = () => {
    toRender.forEach((x) => {x.render()});
}