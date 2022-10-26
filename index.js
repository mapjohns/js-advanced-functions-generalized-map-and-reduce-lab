// Add your functions here

function map(array, func) {
    return array.map(a => func(a))
}

function reduce(array, func, startVal=array[0]) {
    return array.reduce((startVal, curr) => func(startVal, curr), startVal)
}