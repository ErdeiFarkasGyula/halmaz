const canvas=document.getElementById('myCanvas');
const ctx=canvas.getContext('2d');

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function keprajzol(x,y,radius,color,opacity){
    ctx.beginPath();
    ctx.arc(x,y,radius,0,Math.PI*2);
    ctx.fillStyle=color;
    ctx.globalAlpha=opacity;
    ctx.fill();
    ctx.closePath();
}

function Metszet(){
    clearCanvas();
    drawCircle(200,250,100,'blue',0.5);
    drawCircle(300,250,100,'red',0.5);
}
function Unio(){
    clearCanvas();
    drawCircle(300,250,100,'red',0.75);
    drawCircle(200,250,100,'blue',0.75);
}

function Kulonbseg(){
    clearCanvas();
    drawCircle(200,250,100,'blue',1);
    ctx.globalCompositeOperation = 'destination-out';
    drawCircle(300,250,100,'red',1);
    ctx.globalCompositeOperation = 'source-over';
}

const select = document.getElementById('muvelet');
if (select) {
    select.addEventListener('change', function() {
        if (select.value === 'metszet') Metszet();
        else if (select.value === 'unio') Unio();
        else if (select.value === 'kulonbseg') Kulonbseg();
    });
    if (select.value === 'metszet') Metszet();
    else if (select.value === 'unio') Unio();
    else if (select.value === 'kulonbseg') Kulonbseg();
}
