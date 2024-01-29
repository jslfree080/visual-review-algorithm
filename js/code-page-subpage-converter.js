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

import { recursionSubpageMain } from './page-main-section/code-page-subpage/recursion-subpage-main.js';
import { dataStructureSubpageMain } from './page-main-section/code-page-subpage/data-structure-subpage-main.js';

class CodePageSubpageConverter {
    #pageSection;
    #clickRecursionSubpage;
    #clickDataStructureSubpage;
    #pageMainSection;
    #sideMenuSection;

    static content = {
        recursionSubpage: {
            index: 0,
            id: "recursion-subpage",
            main: recursionSubpageMain,
            sideMenuFontSize: "1.2vw"
        },
        dataStructureSubpage: {
            index: 1,
            id: "data-structure-subpage",
            main: dataStructureSubpageMain,
            sideMenuFontSize: "0.89vw"
        }
    }

    constructor(
        pageSection = document.getElementsByClassName("page"),
        clickRecursionSubpage = document.getElementById("click-recursion-subpage"),
        clickDataStructureSubpage = document.getElementById("click-data-structure-subpage"),
        pageMainSection = document.getElementsByClassName("page-main"),
        sideMenuSection = document.getElementsByClassName("sidemenu")
    ) {
        this.#pageSection = pageSection;
        this.#setClickRecursionSubpage(clickRecursionSubpage);
        this.#setClickDataStructureSubpage(clickDataStructureSubpage);
        this.#pageMainSection = pageMainSection;
        this.#sideMenuSection = sideMenuSection;
    }

    #setClickRecursionSubpage(value) {
        this.#clickRecursionSubpage = value;
        this.#clickRecursionSubpage.addEventListener("click", () => this.#displayContent("recursionSubpage"));
    }

    #setClickDataStructureSubpage(value) {
        this.#clickDataStructureSubpage = value;
        this.#clickDataStructureSubpage.addEventListener("click", () => this.#displayContent("dataStructureSubpage"));
    }

    async #displayContent(key) {
        this.#highlightButton(key);
        this.#pageSection[0].style.backgroundColor = "#FFFEE9";
        this.#pageSection[0].setAttribute("id", CodePageSubpageConverter.content[key].id);
        this.#pageMainSection[0].innerHTML = CodePageSubpageConverter.content[key].main;
        this.#sideMenuSection[0].style.fontSize = CodePageSubpageConverter.content[key].sideMenuFontSize;

        // For "sidepage" and "sidepage-main", getElementsByClassName works only after CodePageSubpageConverter.content[key].main is written
        const { CodePageSubpageSidepageConverter } = await import(`./code-page-subpage-sidepage-converter.js`);
        new CodePageSubpageSidepageConverter();
    }

    #highlightButton(key) {
        // Clear all existing styling / highlights
        for (const page of [
            document.getElementById("click-home-page"),
            document.getElementById("click-code-page"),
            document.getElementById("click-visualization-page")
        ]) {
            page.setAttribute("class", "");
        }
        for (const page of this.pages) {
            page.setAttribute("class", "");
        }
        // set new style / highlight
        let index = CodePageSubpageConverter.content[key].index;
        this.pages[index].setAttribute("class", "active");
        document.getElementById("click-code-page").setAttribute("class", "active");
    }

    get pages() {
        return [
            this.#clickRecursionSubpage,
            this.#clickDataStructureSubpage
        ];
    }
}

const myCodePageSubpageConverter = new CodePageSubpageConverter();

export { myCodePageSubpageConverter };