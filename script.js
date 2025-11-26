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