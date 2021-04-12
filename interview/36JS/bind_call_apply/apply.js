var array = ['a', 'b'];
var elements = [0, 1, 2];

function add() {
    console.log(this);
    array.push.apply(array, elements);
}



console.info(array); // ["a", "b", 0, 1, 2]