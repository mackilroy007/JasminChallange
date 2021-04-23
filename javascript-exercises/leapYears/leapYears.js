const leapYears = function (date) {
    /* if (date % 100 === 0 && date % 400 !== 0) {
        return false;
    } else if (date % 100 === 0 && date % 400 === 0) {
        return true;
    } else if (date % 4 === 0) {
        return true;
    } else {
        return false;
    } */

    return date % 4 === 0 && (date % 100 !== 0 || date % 400 == 0);
}

module.exports = leapYears
