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
    let words = string.split(/[_-]/);

    let result = [];
    for (let item of words) {
        if(item === words[0]) {
            result.push(item);
            continue;
        }
        result.push(item[0].toUpperCase() + item.slice(1));
    }

    return result.join('');
}

// just added implementation with spaces between words in the final output :)
const toCamelCaseModified = (string) => {
    let words = string.split(/[_-]/);

    let result = [];
    for (let item of words) {
        if (item === words[0]) {
            result.push(`${item} `);
            continue;
        }
        result.push(`${item[0].toUpperCase()}${item.slice(1)} `);
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
    const result = [];

    for (let i = 0; i < string.length; i++) {
        if(!isNaN(string[i]) && isNaN(string[i + 1])) {
            for (let j = 0; j < string[i]; j++) {
                result.push(string[i + 1]);
            }
            i++;
        } else if (isNaN(string[i])){
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

const sumModified = (...args) => args.reduce((total, current) => total + current, 0)

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