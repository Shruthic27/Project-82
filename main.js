var mouse= " ";
var last_X = 0;
var last_Y = 0;
var scolor= " ";
var canvas= document.getElementById("canvas1");
var ctx=canvas.getContext("2d");
canvas.addEventListener("mousedown",mousedown_function);
function mousedown_function(e){
mouse="mousedown"
console.log("mousedown");
}
canvas.addEventListener("mouseup",mouseup_function);
function mouseup_function(e){
mouse="mouseup";
console.log("mouseup");
}
canvas.addEventListener("mousemove",mousemove_function);
function mousemove_function(e){
console.log("mousemove");
currentX=e.clientX-canvas.offsetLeft;
currentY=e.clientY-canvas.offsetTop;
if (mouse=="mousedown") {
    ctx.beginPath()
    ctx.strokeStyle = scolor;
    ctx.lineWidth = 5;
    ctx.arc(currentX, currentY, 40 ,0 , 2 * Math.PI);
    ctx.stroke();;
}
last_X=currentX
last_Y=currentY
}
canvas.addEventListener("mouseleave",mouseleave_function);
function mouseleave_function(e){
mouse="mouseleave";
console.log("mouseleave");
}
