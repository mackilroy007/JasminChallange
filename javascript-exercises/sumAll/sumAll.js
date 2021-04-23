const sumAll = function (...arr) {

    let lower;
    let upper;

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]) === true) {
            return "ERROR";
        } else if (typeof (arr[i]) === "number") {
            lower = Math.min(arr[0], arr[1]);
            upper = Math.max(arr[0], arr[1]);
        } else {
            return "ERROR";
        }
    }


    var total = 0;

    if (lower <= 0) {
        return "ERROR";

    } else {
        for (let i = lower; i <= upper; i++) {
            total += i;
        }

        return total;
    }
}
module.exports = sumAll
