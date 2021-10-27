
// canvas greater than symbol
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
ctx.lineCap = "round";
ctx.moveTo(2, 2);
ctx.lineTo(9, 9);
ctx.lineTo(2, 17);
ctx.lineWidth = 3;
ctx.strokeStyle = 'white';
ctx.stroke();
