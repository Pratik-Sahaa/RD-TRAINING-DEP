// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Divison should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

var value;
function zero(operation) {
    value = typeof arguments[0] === 'undefined' ? 0 : arguments[0](0);
    return value;
}

function one() {
    value = typeof arguments[0] === 'undefined' ? 1 : arguments[0](1);
    return value;
}

function two() {
    value = typeof arguments[0] === 'undefined' ? 2 : arguments[0](2);
    return value;
}

function three() {
    value = typeof arguments[0] === 'undefined' ? 3 : arguments[0](3);
    return value;
}

function four() {
    value = typeof arguments[0] === 'undefined' ? 4 : arguments[0](4);
    return value;
}

function five() {
    value = typeof arguments[0] === 'undefined' ? 5 : arguments[0](5);
    return value;
}

function six() {
    value = typeof arguments[0] === 'undefined' ? 6 : arguments[0](6);
    return value;
}

function seven() {
    value = typeof arguments[0] === 'undefined' ? 7 : arguments[0](7);
    return value;
}

function eight() {
    value = typeof arguments[0] === 'undefined' ? 8 : arguments[0](8);
    return value;
}

function nine() {
    value = typeof arguments[0] === 'undefined' ? 9 : arguments[0](9);
    return value;
}

function plus() {
    var a = arguments[0];
    return function (b) { return b + a; };
}
function minus() {
    var a = arguments[0];
    return function (b) { return b - a; };
}
function times() {
    var a = arguments[0];
    return function (b) { return b * a; };
}
function dividedBy() {
    var a = arguments[0];
    return function (b) { return parseInt(b / a) };
}

