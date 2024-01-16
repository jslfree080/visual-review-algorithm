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

import { codePageRecursionSubPageMain } from './page-main-section/code-page-subpage/code-page-recursion-subpage-main.js';
import { codePageBinarySearchSubPageMain } from './page-main-section/code-page-subpage/code-page-binary-search-subpage-main.js';
import { codePageHashTablesSubPageMain } from './page-main-section/code-page-subpage/code-page-hash-tables-subpage-main.js';
import { PageConverter } from './page-converter.js';

class CodePageSubPageConverter {
    #pageSection;
    #clickCodePageRecursionSubPage;
    #clickCodePageBinarySearchSubPage;
    #clickCodePageHashTablesSubPage;
    #pageMainSection;
    #myPageConverter;

    static content = {
        codePageRecursionSubPage: {
            index: 0,
            id: "code-page-recursion-subpage",
            main: codePageRecursionSubPageMain
        },
        codePageBinarySearchSubPage: {
            index: 1,
            id: "code-page-binary-search-subpage",
            main: codePageBinarySearchSubPageMain
        },
        codePageHashTablesSubPage: {
            index: 2,
            id: "code-page-hash-tables-subpage",
            main: codePageHashTablesSubPageMain
        }
    }

    constructor(
        pageSection = document.getElementsByClassName("page"),
        clickCodePageRecursionSubPage = document.getElementById("click-code-page-recursion-subpage"),
        clickCodePageBinarySearchSubPage = document.getElementById("click-code-page-binary-search-subpage"),
        clickCodePageHashTablesSubPage = document.getElementById("click-code-page-hash-tables-subpage"),
        pageMainSection = document.getElementsByClassName("page-main")
    ) {
        this.#pageSection = pageSection;
        this.#setClickCodePageRecursionSubPage(clickCodePageRecursionSubPage);
        this.#setClickCodePageBinarySearchSubPage(clickCodePageBinarySearchSubPage);
        this.#setClickCodePageHashTablesSubPage(clickCodePageHashTablesSubPage);
        this.#pageMainSection = pageMainSection;

        this.#myPageConverter = new PageConverter();
    }

    #setClickCodePageRecursionSubPage(value) {
        this.#clickCodePageRecursionSubPage = value;
        this.#clickCodePageRecursionSubPage.addEventListener("click", () => this.#displayContent("codePageRecursionSubPage"));
    }

    #setClickCodePageBinarySearchSubPage(value) {
        this.#clickCodePageBinarySearchSubPage = value;
        this.#clickCodePageBinarySearchSubPage.addEventListener("click", () => this.#displayContent("codePageBinarySearchSubPage"));
    }

    #setClickCodePageHashTablesSubPage(value) {
        this.#clickCodePageHashTablesSubPage = value;
        this.#clickCodePageHashTablesSubPage.addEventListener("click", () => this.#displayContent("codePageHashTablesSubPage"));
    }

    #displayContent(key) {
        this.#highlightButton(key);
        this.#pageSection[0].setAttribute("id", CodePageSubPageConverter.content[key].id);
        this.#pageMainSection[0].innerHTML = CodePageSubPageConverter.content[key].main;
    }

    #highlightButton(key) {
        // Clear all existing styling / highlights
        for (const page of this.#myPageConverter.pages) {
            page.setAttribute("class", "");
        }
        for (const page of this.pages) {
            page.setAttribute("class", "");
        }
        // set new style / highlight
        let index = CodePageSubPageConverter.content[key].index;
        this.pages[index].setAttribute("class", "active");
    }

    get pages() {
        return [this.#clickCodePageRecursionSubPage, this.#clickCodePageBinarySearchSubPage, this.#clickCodePageHashTablesSubPage];
    }
}

new CodePageSubPageConverter();