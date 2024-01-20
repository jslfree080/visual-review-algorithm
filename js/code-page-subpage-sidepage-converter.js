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

import { recursionSubpageItem } from './page-main-section/code-page-subpage/recursion-subpage-main.js';

export class CodePageSubpageSidepageConverter {
    #sidepageSection;
    #recursionSubpageItem;
    #sidepageMainSection;

    constructor(
        sidepageSection = document.getElementsByClassName("sidepage"),
        sidepageMainSection = document.getElementsByClassName("sidepage-main")
    ) {
        this.#sidepageSection = sidepageSection;
        this.#setClickCodePageSubpageSidepage(recursionSubpageItem);
        this.#sidepageMainSection = sidepageMainSection;
    }

    #setClickCodePageSubpageSidepage(value) {
        this.#recursionSubpageItem = value;
        for (const key of Object.keys(this.#recursionSubpageItem)) {
            const key2 = "click-" + key.toLowerCase().replace(/ /g, "-") + "-sidepage";
            document.getElementById(key2).addEventListener("click", () => this.#displayContent(key));
        }
    }

    #displayContent(key) {
        this.#sidepageSection[0].setAttribute("id", key.toLowerCase().replace(/ /g, "-"));
        this.#sidepageMainSection[0].innerHTML = `<pre><code>${this.#recursionSubpageItem[key]}</code></pre>`;
    }
}