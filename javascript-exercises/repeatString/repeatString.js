const repeatString = function (word, times) {
    
    /* word = "hey"; */
    string = "";

    if (times == -1) {
        return string = "ERROR";
    }

    for (let i = 0; i < times; i++) {
        string += word;
    }
    return string;
}

module.exports = repeatString
