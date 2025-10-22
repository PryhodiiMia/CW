let cnv = document.getElementById("canvas");
let ctx = cnv.getContext("2d");
ctx.lineWidth = 4;
let colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];
for (let i = 1; i < colors.length; i++){
    ctx.strokeStyle = colors[i];
    ctx.beginPath();
    ctx.arc(100, 100, i*10, 0, Math.PI*2, false);
    ctx.stroke();
}