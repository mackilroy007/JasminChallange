const removeFromArray = function (...args) {

    /* for (let i = 0; i < array.length; i++) {
        if (array[i] === values) {
            array.splice(i, 1);
        } else { }
        
    }
    return array; */

    const array = args[0];
    const newArray = [];

    array.forEach((x) => {
        if (!args.includes(x)) {
            newArray.push(x);
        }
    });
    return newArray;
}



module.exports = removeFromArray
