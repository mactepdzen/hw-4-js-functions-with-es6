//1. splitAndMerge function
const splitAndMerge = (str, sp) => {
    const words = str.split(' ');

    const result = [];
    for (let word of words) {
        result.push(word.split('').join(sp));
    }

    return result.join(' ');
}

// ---------------------

//2. convert function
const convert = (hash) => {
    return Object.entries(hash);
}

// ---------------------

//3. toCamelCase function
const toCamelCase = (string) => {
    let arr = string.split('');
    let result = [];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i].includes('-') || arr[i].includes('_')){
            result.push(arr[i + 1].toUpperCase());
            i++;
        } else {
            result.push(arr[i]);
        }
    }
    return result.join('');
}

// just added implementation with spaces between words in the final output :)
const toCamelCaseModified = (string) => {
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
const reverseEachWord = (string) => {
    let words = string.split(' ');

    let letters = [];
    for (let word of words) {
        letters.push(word.split(''));
    }

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
const stringExpansion = (string) => {
    let result = [];
    for (let i = 0; i < string.length; i++) {
        if (Number.isNaN(Number.parseInt(string[i])) === false &&
            Number.isNaN(Number.parseInt(string[i + 1]))) {
            let currentNum = Number.parseInt(string[i]);
            for (let j = 0; j < currentNum; j++) {
                result.push(string[i + 1]);
            }
            i++;
        } else if (Number.isNaN(Number.parseInt(string[i]))) {
            result.push(string[i]);
        }
    }
    return result.join('');
}

// ---------------------

//6. largest and smallest functions
const smallest = (...args) => {
    let min = args[0];

    for (let item of args) {
        if (item < min) {
            min = item;
        }
    }

    return min;
}

const largest = (...args) => {
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
const sum = (...args) => {
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