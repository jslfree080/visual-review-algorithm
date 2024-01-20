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

let recursionSubpageMain = `
<ul id="capitalize-first-sidepage" class="sidepage">
                    <section class="sidepage-main">
                        <pre><code>${recursionSubpageItem["Capitalize First"]}</code></pre>
                    </section>
                    <section class="sidebar">
                        <ul id="recursion-sidemenu" class="sidemenu">
                            <li><a id="click-capitalize-first-sidepage" href="#capitalize-first-sidepage">&nbsp;1. Capitalize First</a></li>
                            <li><a id="click-capitalize-words-sidepage" href="#capitalize-words-sidepage">&nbsp;2. Capitalize Words</a></li>
                            <li><a id="click-collect-odd-values-sidepage" href="#collect-odd-values-sidepage">&nbsp;3. Collect Odd Values</a></li>
                            <li><a id="click-collect-strings-sidepage" href="#collect-strings-sidepage">&nbsp;4. Collect Strings</a></li>
                            <li><a id="click-factorial-sidepage" href="#factorial-sidepage">&nbsp;5. Factorial</a></li>
                            <li><a id="click-fibonacci-sidepage" href="#fibonacci-sidepage">&nbsp;6. Fibonacci</a></li>
                            <li><a id="click-first-recursive-function-sidepage" href="#first-recursive-function-sidepage">&nbsp;7. First Recursive Function</a></li>
                            <li><a id="click-flatten-sidepage" href="#flatten-sidepage">&nbsp;8. Flatten</a></li>
                            <li><a id="click-is-palindrome-sidepage" href="#is-palindrome-sidepage">&nbsp;9. Is Palindrome</a></li>
                            <li><a id="click-nested-even-sum-sidepage" href="#nested-even-sum-sidepage">10. Nested Even Sum</a></li>
                            <li><a id="click-power-sidepage" href="#power-sidepage">11. Power</a></li>
                            <li><a id="click-product-of-array-sidepage" href="#product-of-array-sidepage">12. Product of Array</a></li>
                            <li><a id="click-recursive-range-sidepage" href="#recursive-range-sidepage">13. Recursive Range</a></li>
                            <li><a id="click-reverse-sidepage" href="#reverse-sidepage">14. Reverse</a></li>
                            <li><a id="click-some-recursive-sidepage" href="#some-recursive-sidepage">15. Some Recursive</a></li>
                            <li><a id="click-stringify-numbers-sidepage" href="#stringify-numbers-sidepage">16. Stringify Numbers</a></li>
                        </ul>
                    </section>
                </ul>`;

export { recursionSubpageItem };
export { recursionSubpageMain };