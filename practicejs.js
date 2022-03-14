function getSelectedNumberValue(val) {
    document.getElementById("result").value += val
}

function getSelectedSymbol(val) {
    document.getElementById("result").value += val
}

function getoutput() {

    var x = document.getElementById("result").value
    var y = eval(x)
    document.getElementById("result").value = y
}

function getSelectedNumberclear() {
    document.getElementById("result").value = ""
}

function getSelectedNumberdelete() {
    var value = document.getElementById("result").value;
    document.getElementById("result").value = value.substr(0, value.length - 1);
}