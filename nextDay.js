// this is for going forward
// both r === 6 and ary[r + 1]
// work together

// when r === 6
// the next day has to be sun

var nextX = function (x) {
    var ary = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var result;
    var r = ary.indexOf(x);
    if (r === 6) {
        result = "Sun"; // next day has to be sun
    }
    else {
        result = ary[r + 1]; // okay to get next day
    }
    return result;
};
console.log(nextX("Sat"));
