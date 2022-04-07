let userNum = document.getElementById("getNumber");
userNum.addEventListener("keydown", function (e) {
    if (e.keyCode == 13) {
        run(e);
    }
});

function run() {
    document.getElementById("paragraph").innerHTML = "Hello World!";                            
    document.getElementById("paragraph").style.backgroundColor = "#00fbff";
    document.getElementById("paragraph").style.color = "gray";
    document.getElementById("paragraph").style.padding = "20px";
    randomNum();
    userNumber();
    compareNumbers();
}

function randomNum() {
    let ran = Math.floor(Math.random() * 10); 
    let x = document.getElementById("random");
    x.innerHTML = ran;
    x.style.backgroundColor = "#00fbff";
    x.style.color = "gray";
    x.style.padding = "20px";
    x.style.textAlign = "center";
    return ran;



}

function userNumber() {
    let user = document.getElementById("getNumber").value;
    let y = document.getElementById("userNumber");
    y.innerHTML = user;
    y.style.color = "white";
    y.style.backgroundColor = "red";
    y.style.padding = "20px";
    y.style.textAlign = "center";
    return user;
}

function compareNumbers() {
    let a = userNumber();
    let b = randomNum();
    let z = document.getElementById("compare");

    if (a!= b) {
        z.innerHTML = "These numbers are not the same, the computer got " + b + ", and user got " + a;
        z.style.color = "black";

        z.style.backgroundColor = "blue";
        z.style.padding = "20px";
        z.style.textAlign = "center";
    } else if (a == b) {
        z.style.color = "black";
        z.innerHTML = "Numbers are the same! You both got " + a;
        z.style.backgroundColor = "blue";
        z.style.padding = "20px";
        z.style.textAlign = "center";
    }

}