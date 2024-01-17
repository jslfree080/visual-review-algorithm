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

import { homePageMain } from './page-main-section/home-page-main.js';
import { codePageMain } from './page-main-section/code-page-main.js';
import { visualizationPageMain } from './page-main-section/visualization-page-main.js';
import { myCodePageSubPageConverter } from './code-page-sub-page-converter.js';

class PageConverter {
    #pageSection;
    #clickHomePage;
    #clickCodePage;
    #clickVisualizationPage;
    #clickGithubPage;
    #pageMainSection;

    static content = {
        homePage: {
            index: 0,
            id: "home-page",
            main: homePageMain
        },
        codePage: {
            index: 1,
            id: "code-page",
            main: codePageMain
        },
        visualizationPage: {
            index: 2,
            id: "visualization-page",
            main: visualizationPageMain
        },
        githubPage: {
            index: 3
        }
    }

    constructor(
        pageSection = document.getElementsByClassName("page"),
        clickHomePage = document.getElementById("click-home-page"),
        clickCodePage = document.getElementById("click-code-page"),
        clickVisualizationPage = document.getElementById("click-visualization-page"),
        clickGithubPage = document.getElementById("click-github-page"),
        pageMainSection = document.getElementsByClassName("page-main")
    ) {
        this.#pageSection = pageSection;
        this.#setClickHomePage(clickHomePage);
        this.#setClickCodePage(clickCodePage);
        this.#setClickVisualizationPage(clickVisualizationPage);
        this.#setClickGithubPage(clickGithubPage);
        this.#pageMainSection = pageMainSection;

        this.#displayContent("homePage");
    }

    #setClickHomePage(value) {
        this.#clickHomePage = value;
        this.#clickHomePage.addEventListener("click", () => this.#displayContent("homePage"));
    }

    #setClickCodePage(value) {
        this.#clickCodePage = value;
        this.#clickCodePage.addEventListener("click", () => this.#displayContent("codePage"));
    }

    #setClickVisualizationPage(value) {
        this.#clickVisualizationPage = value;
        this.#clickVisualizationPage.addEventListener("click", () => this.#displayContent("visualizationPage"));
    }

    #setClickGithubPage(value) {
        this.#clickGithubPage = value;
        this.#clickGithubPage.addEventListener("click", () => this.#displayContent("githubPage"));
    }

    #displayContent(key) {
        this.#highlightButton(key);
        if (key !== "githubPage") {
            this.#pageSection[0].setAttribute("id", PageConverter.content[key].id);
            this.#pageMainSection[0].innerHTML = PageConverter.content[key].main;
        }
    }

    #highlightButton(key) {
        // Clear all existing styling / highlights
        for (const page of this.pages) {
            page.setAttribute("class", "");
        }
        for (const page of myCodePageSubPageConverter.pages) {
            page.setAttribute("class", "");
        }
        // set new style / highlight
        let index = PageConverter.content[key].index;
        this.pages[index].setAttribute("class", "active");
    }

    get pages() {
        return [
            this.#clickHomePage,
            this.#clickCodePage,
            this.#clickVisualizationPage,
            this.#clickGithubPage
        ];
    }
}

new PageConverter();