let wallpaper = {
    isOpen : false,
    status : 0,
    open() {
        this.isOpen = true;
    },
    close() {
        this.isOpen = false;
    },

    update() {
        if (this.isOpen) {
            if (this.status < 60) {
                this.status += 1;
            }
        } else {
            if (this.status > 0) {
                this.status -= 1;
            }
        }
    },
    render() {
        if (this.isOpen) {
            let today = new Date(),
                dd = today.getDate() < 10 ? "0" + today.getDate() : today.getDate(),
                dm = (today.getMonth() + 1) < 10 ? "0" + (today.getMonth() + 1) : (today.getMonth() + 1),
                dy = today.getFullYear() < 10 ? "0" + today.getFullYear() : today.getFullYear(),
                date = dd + '.' + dm + '.' + dy,
                th = today.getHours() < 10 ? "0" + today.getHours() : today.getHours(),
                tm = today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes(),
                ts = today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds(),
                time = th + ":" + tm + ":" + ts,
                dateTime = time + ' ' + date;
            document.getElementById("t7DT").innerText = dateTime;
            if (window.sessionStorage.getItem("SavedUName")) {
                document.getElementById("t7N").innerText = window.sessionStorage.getItem("SavedUName");
            } else {
                document.getElementById("t7N").innerText = "";
            }
        }
       document.getElementById("wallpaperHolder").style.setProperty("top",(Math.pow(this.status*3456000,1/4)-120)+"%");
       document.getElementById("wallpaperHolder").childNodes[1].style.setProperty("top",(Math.pow(this.status*3456000,1/4)-120)+"%");
    }
}
toUpdate.push(wallpaper);
toRender.push(wallpaper);


function menu7() {
    
    menuItemsOff()
    document.getElementById("window7").style.setProperty("display", "block");
    
    
}

function task7() {
    wallpaper.open();
}