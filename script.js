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
    keprajzol(200,250,100,'blue',0.5);
    keprajzol(300,250,100,'red',0.5);
}
function Unio(){
    clearCanvas();
    keprajzol(300,250,100,'red',0.75);
    keprajzol(200,250,100,'blue',0.75);
}

function Kulonbseg(){
    clearCanvas();
    keprajzol(200,250,100,'blue',1);
    ctx.globalCompositeOperation = 'destination-out';
    keprajzol(300,250,100,'red',1);
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


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const halmaz1 = document.getElementById("halmazA");
const halmaz2 = document.getElementById("halmazB");
const gomb = document.getElementById("szamolas");
const eredmenySzoveg = document.getElementById("eredmenySzoveg");

gomb.addEventListener("click", () => {
    let a = halmazBeolvas(halmaz1.value);
    let b = halmazBeolvas(halmaz2.value);
    let eredmeny;
    if (select.value === 'metszet') {
        Metszet();
        eredmeny = Array.from(metszet(a, b));
    } else if (select.value === 'unio') {
        Unio();
        eredmeny = Array.from(egyesites(a, b));
    } else if (select.value === 'kulonbseg') {
        Kulonbseg();
        eredmeny = Array.from(kulonbseg(a, b));
    }
    eredmenySzoveg.textContent = eredmeny.length ? eredmeny.join(", ") : "Ø";
    console.log("Halmaz 1:", a);
    console.log("Halmaz 2:", b);
});

function halmazBeolvas(bemenetek) {
    let halmaz = new Set();
    // Vesszővel elválasztott elemek beolvasása
    bemenetek.split(',').map(e => e.trim()).filter(e => e).forEach(e => halmaz.add(e));
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