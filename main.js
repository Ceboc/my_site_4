// create object

let temp = {
    c: 24,
    f: function () {
        return Math.round((this.c) * 9 / 5 + 32)
    }
}

// initialize dashboard

document.getElementById("F").innerHTML = temp.f() + " &deg;F"
document.getElementById("C").innerHTML = temp.c + " &deg;C"

// modify dashboard

function warmer() {
    temp.c++;
    document.getElementById("F").innerHTML = temp.f() + " &deg;F";
    document.getElementById("C").innerHTML = temp.c + " &deg;C";
}

function cooler() {
    temp.c--;
    document.getElementById("F").innerHTML = temp.f() + " &deg;F";
    document.getElementById("C").innerHTML = temp.c + " &deg;C";
}