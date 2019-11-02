generateUserId = function() {
    var a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
        b = [],
        d;
    b[8] = b[13] = b[18] = b[23] = "-";
    b[14] = "4";
    for (var c = 0; c < 36; c++) if (!b[c]) {
        d = 0 | Math.random() * 16;
        b[c] = a[c == 19 ? d & 3 | 8 : d]
    }
    return b.join("")
}

console.log(generateUserId())