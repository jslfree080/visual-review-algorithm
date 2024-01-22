// MIT License

// Copyright (c) 2024 Jung Soo Lee

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

const recursionSubpageItem = {
    "Ackermann":
        `function ackermann(m, n) {
    if (m == 0) {
        return n + 1;
    } else if (n == 0) {
        return ackermann(m - 1, 1);
    } else {
        return ackermann(m - 1, ackermann(m, n - 1));
    }
}`,
    "Capitalize First":
        `function capitalizeFirst(arrayOfStrings) {
    let newArray = [];
    function helper(helperInput) {
        if (helperInput.length === 0) return;
        newArray.push(helperInput[0][0].toUpperCase() + helperInput[0].substring(1));
        helper(helperInput.slice(1));
    }
    helper(arrayOfStrings);
    return newArray;
}`,
    "Capitalize Words":
        `function capitalizeWords(arrayOfWords) {
    let newArray = [];
    function helper(helperInput) {
        if (helperInput.length === 0) return;
        newArray.push(helperInput[0].toUpperCase());
        helper(helperInput.slice(1));
    }
    helper(arrayOfWords);
    return newArray;
}`,
    "Collect Odd Values":
        `function collectOddValues(arr) {
    let result = [];
    function helper(helperInput) {
        if (helperInput.length === 0) return;
        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0]);
        }
        helper(helperInput.slice(1));
    }
    helper(arr);
    return result;
}`,
    "Collect Strings":
        `function collectStrings(object) {
    let newArray = [];
    function helper(helperInput) {
        for (var key in helperInput) {
            if (typeof helperInput[key] === "string") {
                newArray.push(helperInput[key]);
            } else if (typeof helperInput[key] === "object") {
                helper(helperInput[key]);
            } else if (Array.isArray(helperInput[key])) {
                for (var element in helperInput[key]) {
                    helper(element);
                }
            } else return;
        }
    }
    helper(object);
    return newArray;
}`,
    "Factorial":
        `function factorial(num) {
    if (num === 1) return 1;
    return num * factorial(num - 1);
}`,
    "Fibonacci":
        `function fibonacci(n) {
    if (n <= 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}`,
    "First Recursive Function":
        `function countDown(num) {
    if (num <= 0) {
        console.log('All done!');
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}`,
    "Flatten":
        `function flatten(arrayOfArrays) {
    let newArray = [];
    function helper(helperInput) {
        for (let i = 0; i < helperInput.length; i++) {
            if (Array.isArray(helperInput[i])) {
                helper(helperInput[i]);
            } else newArray.push(helperInput[i]);
        }
    }
    helper(arrayOfArrays);
    return newArray;
}`,
    "Is Palindrome":
        `function isPalindrome(string) {
    let newString = "";
    function helper(helperInput) {
        if (helperInput.length === 0) return;
        newString += helperInput[helperInput.length - 1];
        helper(helperInput.slice(0, -1));
    }
    helper(string);
    if (string === newString) return true;
    else return false;
}`,
    "Nested Even Sum":
        `function nestedEvenSum(object) {
    let newNumber = 0;
    function helper(helperInput) {
        if (typeof helperInput !== "object") return;
        for (let i = 0; i < Object.keys(helperInput).length; i++) {
            if (helperInput[Object.keys(helperInput)[i]] % 2 === 0) {
                newNumber += helperInput[Object.keys(helperInput)[i]];
            } else {
                helper(helperInput[Object.keys(helperInput)[i]]);
            }
        }
    }
    helper(object);
    return newNumber;
}`,
    "Power":
        `function power(a, b) {
    if (b === 0) return 1;
    return a * power(a, b - 1);
}`,
    "Product of Array":
        `function productOfArray(array) {
    if (array.length === 0) return 1;
    return array[0] * productOfArray(array.slice(1));
}`,
    "Recursive Range":
        `function recursiveRange(n) {
    if (n === 0) return 0;
    return n + recursiveRange(n - 1);
}`,
    "Reverse":
        `function reverse(string) {
    if (string.length <= 1) return string;
    return reverse(string.slice(1)) + string[0];
}`,
    "Some Recursive":
        `function someRecursive(array, callback) {
    if (array.length === 0) return false;
    return callback(array[0]) || someRecursive(array.slice(1), callback);
}`,
    "Stringify Numbers":
        `function stringifyNumbers(object) {
    let newObject = {};
    for (var key in object) {
        if (typeof object[key] === "number") {
            newObject[key] = object[key].toString();
        } else if (typeof object[key] === "object" && !Array.isArray(object[key])) {
            newObject[key] = stringifyNumbers(object[key]);
        } else newObject[key] = object[key];
    }
    return newObject;
}`
};

let recursionSubpageItemTranslated = ``;
let counter = 1;
let space = "";
for (const key of Object.keys(recursionSubpageItem)) {
    if (counter < 10) {
        space = "&nbsp;";
    } else {
        space = "";
    }
    recursionSubpageItemTranslated += `<li><a id="click-${key.toLowerCase().replace(/ /g, "-")}-sidepage" href="#${key.toLowerCase().replace(/ /g, "-")}-sidepage">${space}${counter}. ${key}</a></li>`;
    counter++;
}

let recursionSubpageMain = `
<ul id="capitalize-first-sidepage" class="sidepage">
                    <section class="sidepage-main">
                        <pre><code>${recursionSubpageItem["Capitalize First"]}</code></pre>
                    </section>
                    <section class="sidebar">
                        <ul id="recursion-sidemenu" class="sidemenu">` + recursionSubpageItemTranslated + `</ul>
                    </section>
                </ul>`;

export { recursionSubpageItem };
export { recursionSubpageMain };