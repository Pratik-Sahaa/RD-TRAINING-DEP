// This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

// Explanation:

// square() must return a copy of the array, containing all values squared
// cube() must return a copy of the array, containing all values cubed
// average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
// sum() must return the sum of all array values
// even() must return an array of all even numbers
// odd() must return an array of all odd numbers
// Note: the original array must not be changed in any case!

// Example
// var numbers = [1, 2, 3, 4, 5];

// numbers.square();  // must return [1, 4, 9, 16, 25]
// numbers.cube();    // must return [1, 8, 27, 64, 125]
// numbers.average(); // must return 3
// numbers.sum();     // must return 15
// numbers.even();    // must return [2, 4]
// numbers.odd();     // must return [1, 3, 5]


Array.prototype.square = function () {
    let input = this;
    var holder = [];
    for (let i = 0; i < input.length; i++) {
        holder[i] = input[i] * input[i];
    }
    return holder;
}

Array.prototype.cube = function () {
    let input = this;
    var holder = [];
    for (let i = 0; i < input.length; i++) {
        holder[i] = input[i] * input[i] * input[i];
    }
    return holder;
}


Array.prototype.average = function () {
    let input = this;
    let l = input.length;
    var sum = 0;
    for (let i = 0; i < l; i++) {
        sum = sum + input[i];
    }
    return sum / l;
}


Array.prototype.sum = function () {
    let input = this;
    var sum = 0;
    for (let i = 0; i < input.length; i++) {
        sum = sum + input[i];
    }
    return sum;
}

Array.prototype.even = function () {
    let input = this;
    var holder = [];
    let index = 0;
    for (let i = 0; i < input.length; i++) {
        if ((input[i] % 2) == 0) {
        holder[index] = input[i];
            index++;
        }
    }
    return holder;
}


Array.prototype.odd = function () {
    let input = this;
    var holder = [];
    let index = 0;
    for (let i = 0; i < input.length; i++) {
        if (!(input[i] % 2) == 0) {
        holder[index] = input[i];
            index++;
        }
    }
    return holder;
}