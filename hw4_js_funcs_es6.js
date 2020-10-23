//1. splitAndMerge function
function splitAndMerge(str, sp) {
    const words = str.split(' '); // splitting a string into words

    let letters = []; // array for letters selected from word
    for (let word of words) {
        letters.push(word.split(''));
    }

    let result = [];
    for (let letter of letters) {
        result.push(letter.join(sp));
    }

    return result.join(' ');
}

// ---------------------

//2. convert function
function convert(hash) {
    return Object.entries(hash);
}

// ---------------------

//3. toCamelCase function
function toCamelCase(string) {
    let arr = string.split(''); // array for splitted into chars string
    let result = []; // array where we put our chars according to the task rules before merging it

    for(let i = 0; i < arr.length; i++) {
        if(arr[i].includes('-') || arr[i].includes('_')){
            result.push(arr[i + 1].toUpperCase());
            i++; // if we met '-' or '_' we have to skip next char to avoid repeating it
        } else {
            result.push(arr[i]);
        }
    }
    return result.join('');
}

// just added implementation with spaces between words in the final output :)
function toCamelCaseModified(string) {
    let arr = string.split('');
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].includes('-') || arr[i].includes('_')){
            result.push(` ${arr[i + 1].toUpperCase()}`);
            i++;
        } else {
            result.push(arr[i]);
        }
    }
    return result.join('');
}

// ---------------------

//4. reverse function
function reverseEachWord(string) {
    let words = string.split(' '); // splitting a string into words

    let letters = []; // array for letters selected from word
    for (let word of words) {
        letters.push(word.split(''));
    }

    //this loop is the only difference between reverseEachWord and splitAndMerge
    //it's cool when it's possible to reuse code that was written before :)
    for(let letter of letters) {
        letter.reverse();
    }

    let result = [];
    for (let letter of letters) {
        result.push(letter.join(''));
    }
    return result.join(' ');
}

// ---------------------

//5. stringExpansion function
function stringExpansion(string) {
    let result = [];
    for (let i = 0; i < string.length; i++) {
        if (Number.isNaN(Number.parseInt(string[i])) === false &&
            Number.isNaN(Number.parseInt(string[i + 1]))) {
            let currentNum = Number.parseInt(string[i]);
            for (let j = 0; j < currentNum; j++) {
                result.push(string[i + 1]);
            }
            i++; //if we find a 'number-letter' pair, we do +1 step to avoid duplicating the letter
        } else if (Number.isNaN(Number.parseInt(string[i]))) {
            result.push(string[i]);
        }
    }
    return result.join('');
}

// ---------------------

//6. largest and smallest functions
function smallest (...args) {
    // let args = [].slice.call(arguments);
    let min = args[0];

    for (let item of args) {
        if (item < min) {
            min = item;
        }
    }

    return min;
}

function largest (...args) {
    let max = args[0];

    for (let item of args) {
        if (item > max) {
            max = item;
        }
    }

    return max;
}

// ---------------------

//7. transform function
const transform = (arr) => {
    let transformedArr = arr.map(function (item) {
        return function () {
            return item;
        }
    })
    return transformedArr;
}

// ---------------------

//8. sum function
function sum(...args) {
    if (args.length === 0) {
        return 0;
    }

    return args.shift() + sum.apply(null, args);
}

// ---------------------

//9. countDown function
const countDown = (number) => {
    if (number < 0) return 0;

    setTimeout(() => {
        console.log(number);
        --number;
        countDown(number)
    }, 1000);
}