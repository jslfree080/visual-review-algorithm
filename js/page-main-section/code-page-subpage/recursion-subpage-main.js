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
    "Capitalize First": ``,
    "Capitalize Words": ``,
    "Collect Strings": ``,
    "Factorial":
        `function factorial(num) {
    if (num === 1) return 1; // Base Case
    return num * factorial(num - 1); // Recursive Function
}
console.log(factorial(4));`,
    "Fibonacci": ``,
    "First Recursive Function": ``,
    "Flatten": ``,
    "Is Palindrome": ``,
    "Nested Even Sum": ``,
    "Power": ``,
    "Product of Array": ``,
    "Pure Recursion": ``,
    "Recursive Range": ``,
    "Reverse": ``,
    "Some Recursive": ``,
    "Stringify Numbers": ``
};

let recursionSubpageMain = `
<ul id="factorial-sidepage">
                    <section class="sidepage-main">
                        <pre><code>${recursionSubpageItem["Factorial"]}</code></pre>
                    </section>
                    <section class="sidebar">
                        <ul id="recursion-sidemenu" class="sidemenu">
                            <li><a href="#capitalize-first-sidepage">&nbsp;1. Capitalize First</a></li>
                            <li><a href="#capitalize-words-sidepage">&nbsp;2. Capitalize Words</a></li>
                            <li><a href="#collect-strings-sidepage">&nbsp;3. Collect Strings</a></li>
                            <li><a href="#factorial-sidepage">&nbsp;4. Factorial</a></li>
                            <li><a href="#fibonacci-sidepage">&nbsp;5. Fibonacci</a></li>
                            <li><a href="#first-recursive-function-sidepage">&nbsp;6. First Recursive Function</a></li>
                            <li><a href="#flatten-sidepage">&nbsp;7. Flatten</a></li>
                            <li><a href="#is-palindrome-sidepage">&nbsp;8. Is Palindrome</a></li>
                            <li><a href="#nested-even-sum-sidepage">&nbsp;9. Nested Even Sum</a></li>
                            <li><a href="#power-sidepage">10. Power</a></li>
                            <li><a href="#product-of-arrays-sidepage">11. Product of Array</a></li>
                            <li><a href="#pure-recursion-sidepage">12. Pure Recursion</a></li>
                            <li><a href="#recursive-range-sidepage">13. Recursive Range</a></li>
                            <li><a href="#reverse-sidepage">14. Reverse</a></li>
                            <li><a href="#some-recursive-sidepage">15. Some Recursive</a></li>
                            <li><a href="#stringify-numbers-sidepage">16. Stringify Numbers</a></li>
                        </ul>
                    </section>
                </ul>`;

export { recursionSubpageMain };