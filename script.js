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
function halmazBeolvas(bemenetek) {
    let halmaz = new Set();
    for (let i = 0; i < arguments.length; i++) {
        halmaz.add(arguments[i]);
    }
    return halmaz;
}

function egyesites(halmaz1, halmaz2) {
    for (let elem of halmaz2) {
        halmaz1.add(elem);
    }
    return halmaz1;
}

function metszet(halmaz1, halmaz2) {
    let eredmeny = new Set();
    for (let elem of halmaz1) {
        if (halmaz2.has(elem)) {
            eredmeny.add(elem);
        }   
    }
    return eredmeny;
}

function kulonbseg(halmaz1, halmaz2) {
    let eredmeny = new Set();
    for (let elem of halmaz1) {
        if (!halmaz2.has(elem)) {
            eredmeny.add(elem);
        }
    }
    return eredmeny;
}

console.log("Halmaz beolvasás:", halmazBeolvas(1, 2, 3, 4, 5));
console.log("Egyesítés:", egyesites(new Set([1, 2, 3]), new Set([3, 4, 5])));
console.log("Metszet:", metszet(new Set([1, 2, 3]), new Set([3, 4, 5])));
console.log("Különbség:", kulonbseg(new Set([1, 2, 3]), new Set([3, 4, 5])));