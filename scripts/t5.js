
class Timer {
    isWork = false;
    time = 0;
    curT = 0;
    constructor() {
        
    };
    start() {

        this.reset();
        this.unpause();
        document.getElementById("start").style.setProperty("display","none");
        document.getElementById("stop").style.setProperty("display","inline");
    };
    unpause(){
        this.isWork = true;
        document.getElementById("unpause").style.setProperty("display","none");
        document.getElementById("pause").style.setProperty("display","inline");
    };
    pause() {
        this.isWork = false;
        document.getElementById("unpause").style.setProperty("display","inline");
        document.getElementById("pause").style.setProperty("display","none");
    };
    stop() {
        this.curT = this.time;
        this.unpause();
        this.render();
        this.pause();
        document.getElementById("unpause").style.setProperty("display","none");
        document.getElementById("start").style.setProperty("display","inline");
        document.getElementById("stop").style.setProperty("display","none");
    };
    reset() {
        let H = Number.parseInt(document.getElementById("t5H").value);
        if (isNaN(H)){
            H = 0;
        }
        let M = Number.parseInt(document.getElementById("t5M").value);
        if (isNaN(M)){
            M = 0;
        }
        let S = Number.parseInt(document.getElementById("t5S").value);
        if (isNaN(S)){
            S = 0;
        }
        this.setTime(H, M, S);
        this.stop();
    }
    update() {
        if (this.isWork) {
            if (this.curT < 1) {
                this.stop();
                alert("Time is out!");
            } else
                this.curT -= 1;
        }
    };
    render() {
        if (this.isWork) {
            document.getElementById("t5H").value = this.getHour();
            document.getElementById("t5M").value = this.getMin();
            document.getElementById("t5S").value = this.getSec();
        }
    }
    getSec() {
        return Math.floor(this.curT / 60) % 60;
    }
    getMin() {
        return Math.floor(this.curT / 3600) % 60;
    }
    getHour() {
        return Math.floor(this.curT / 216000);
    }
    setTime(newTime) {
        this.time = newTime;
    }
    setTime(newH, newM, newS) {
        this.time = (((((newH * 60) + newM) * 60) + newS) * 60);
    }
}
function menu5() {
    menuItemsOff()
    document.getElementById("window5").style.setProperty("display", "block");
}

let timer1 = new Timer();
toUpdate.push(timer1);
toRender.push(timer1);
function task5() {
}


