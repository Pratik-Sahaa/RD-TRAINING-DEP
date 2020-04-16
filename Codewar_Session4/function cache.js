// If you are calculating complex things or execute time-consuming API calls, you sometimes want to cache the results. In this case we want you to create a function wrapper, which takes a function and caches its results depending on the arguments, that were applied to the function.

// Usage example:

// var complexFunction = function(arg1, arg2) { /* complex calculation in here */ };
// var cachedFunction = cache(complexFunction);

// cachedFunction('foo', 'bar'); // complex function should be executed
// cachedFunction('foo', 'bar'); // complex function should not be invoked again, instead the cached result should be returned
// cachedFunction('foo', 'baz'); // should be executed, because the method wasn't invoked before with these arguments


function cache(func) {
    let memory = {};
    return (arg1, arg2) => {
        let key = '';
        if (typeof arg1 === 'object') {
            key += Object.keys(arg1);
        } else {
            key += arg1;
        }
        if (typeof arg2 === 'object') {
            key += Object.keys(arg2);
        } else {
            key += arg2;
        }
        if (!(key in memory)) {
            memory[key] = func(arg1, arg2);
        }
        console.log(memory);
        return memory[key];
    }
}

//ALTERNATIVE ANSWER
// function cache(func) {
//     let function_memory = {};
//     return function() {
//         let cache_key = JSON.stringify(arguments);
//         if (cache_key in function_memory) return function_memory[cache_key];
//         return function_memory[cache_key] = func.apply(this, arguments);
//     };
// }