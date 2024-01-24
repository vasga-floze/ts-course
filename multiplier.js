var multiplicator = function (a, b, printText) {
    console.log(printText, a * b);
};
// multiplicator(2, 4, "Multiplied numbers 2 and 4, result: ")
console.log(process.argv);
var a = Number(process.argv[2]);
var b = Number(process.argv[3]);
multiplicator(a, b, "Multiplied ".concat(a, " and ").concat(b, " and the result is: "));
