function halmazBeolvas(input) {
    let halmaz = new Set();
    for (let i = 0; i < arguments.length; i++) {
        halmaz.add(arguments[i]);
    }
    return halmaz;
}