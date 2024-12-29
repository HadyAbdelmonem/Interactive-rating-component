let submit = document.getElementById("sub");
let container1 = document.getElementsByClassName("container1")[0];
let container2 = document.getElementsByClassName("container2")[0];
let span = document.getElementById("span");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");
let num4 = document.getElementById("num4");
let num5 = document.getElementById("num5");


window.setInterval(function () {
    window .location.reload();
}, 6000); 	
    


submit.onclick= function () {
    container1.classList.add("hide");
    container2.classList.remove("hide");
}

num1.onclick= function () {
    span.innerHTML=this.innerHTML;
    this.style.backgroundColor='#f97c26';
    this.style.color=' #ffffff';
}
num2.onclick= function () {
    span.innerHTML=this.innerHTML;
    this.style.backgroundColor='#f97c26';
    this.style.color=' #ffffff';
}
num3.onclick= function () {
    span.innerHTML=this.innerHTML;
    this.style.backgroundColor='#f97c26';
    this.style.color=' #ffffff';
}
num4.onclick= function () {
    span.innerHTML=this.innerHTML;
    this.style.backgroundColor='#f97c26';
    this.style.color=' #ffffff';
}
num5.onclick= function () {
    span.innerHTML=this.innerHTML;
    this.style.backgroundColor='#f97c26';
    this.style.color=' #ffffff';
}

