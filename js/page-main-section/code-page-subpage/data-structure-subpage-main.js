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

const dataStructureSubpageItem = {
    "Singly Linked List (Set)":
        `class Node {
    constructor(value) {
        this.value = value; // piece of data
        this.next = null; // reference to next node
    }
}

class SinglyLinkedList {
    #head;
    #tail;
    #length;

    constructor() {
        this.#head = null;
        this.#tail = null;
        this.#length = 0;
    }

    // retrieving the node by it's position in the linked list
    get(index) {
        if (index < 0 || index >= this.#length || !this.#head) return undefined;
        let currentNode = this.#head;
        for (var i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    // changing the value of a node based on it's position in the linked list
    set(index, value) {
        let currentNode = this.get(index);
        if (!currentNode) return undefined;
        currentNode.value = value;
    }
}`,
    "Singly Linked List (Insert)":
        `class Node {
    constructor(value) {
        this.value = value; // piece of data
        this.next = null; // reference to next node
    }
}

class SinglyLinkedList {
    #head;
    #tail;
    #length;

    constructor() {
        this.#head = null;
        this.#tail = null;
        this.#length = 0;
    }

    // adding a node to the tail of the linked list
    push(value) {
        const newNode = new Node(value);
        if (!this.#head) {
            this.#head = newNode;
            this.#tail = newNode;
        } else {
            this.#tail.next = newNode;
            this.#tail = newNode;
        }
        this.#length++;
        return value;
    }

    // adding a new node to the beginning of the linked list
    unshift(value) {
        const newNode = new Node(value);
        if (!this.#head) {
            this.#head = newNode;
            this.#tail = newNode;
        } else {
            const previousHead = this.#head;
            this.#head = newNode;
            this.#head.next = previousHead;
        }
        this.#length++;
        return value;
    }

    // retrieving the node by it's position in the linked list
    get(index) {
        if (index < 0 || index >= this.#length || !this.#head) return undefined;
        let currentNode = this.#head;
        for (var i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    // adding a node to the linked list at a specific position
    insert(index, value) {
        if (index < 0 || index > this.#length) return undefined;
        if (index === 0) return this.unshift(value);
        if (index === this.#length) return this.push(value);
        const newNode = new Node(value);
        let currentNode = this.get(index - 1);
        const afterNode = currentNode.next;
        currentNode.next = newNode;
        currentNode.next.next = afterNode;
        this.#length++;
        return value;
    }
}`,
    "Singly Linked List (Remove)":
        `class Node {
    constructor(value) {
        this.value = value; // piece of data
        this.next = null; // reference to next node
    }
}

class SinglyLinkedList {
    #head;
    #tail;
    #length;

    constructor() {
        this.#head = null;
        this.#tail = null;
        this.#length = 0;
    }

    // removing a node from the tail of the linked list
    pop() {
        if (!this.#head) return undefined;
        const poppedNode = this.#tail;
        if (this.#length === 1) {
            this.#head = null;
            this.#tail = null;
        } else {
            let currentNode = this.#head;
            while (currentNode.next.next) {
                currentNode = currentNode.next;
            }
            this.#tail = currentNode;
            this.#tail.next = null;
        }
        this.#length--;
        return poppedNode.value;
    }

    // removing a new node from the beginning of the linked list
    shift() {
        if (!this.#head) return undefined;
        const poppedNode = this.#head;
        if (this.#length === 1) {
            this.#head = null;
            this.#tail = null;
        } else {
            let currentNode = this.#head;
            currentNode = currentNode.next;
            this.#head = currentNode;
        }
        this.#length--;
        return poppedNode.value;
    }

    // retrieving the node by it's position in the linked list
    get(index) {
        if (index < 0 || index >= this.#length || !this.#head) return undefined;
        let currentNode = this.#head;
        for (var i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    // removing a node from the linked list at a specific position
    remove(index) {
        if (index < 0 || index >= this.#length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.#length - 1) return this.pop();
        let currentNode = this.get(index - 1);
        const poppedNode = currentNode.next;
        const afterNode = poppedNode.next;
        currentNode.next = afterNode;
        this.#length--;
        return poppedNode.value;
    }
}`,
    "Singly Linked List (Reverse)":
        `class Node {
    constructor(value) {
        this.value = value; // piece of data
        this.next = null; // reference to next node
    }
}

class SinglyLinkedList {
    #head;
    #tail;
    #length;

    constructor() {
        this.#head = null;
        this.#tail = null;
        this.#length = 0;
    }

    // reversing the linked list in place
    reverse() {
        if (!this.#head || !this.#head.next) return this;
        let currentNode = this.#head;
        let previousNode = null;
        let afterNode = null;
        while (currentNode) {
            afterNode = currentNode.next;
            currentNode.next = previousNode;
            previousNode = currentNode;
            currentNode = afterNode;
        }
        [this.#head, this.#tail] = [this.#tail, this.#head];
        return this;
    }
}`,
    "Stack":
        `class Node {
    constructor(value) {
        this.value = value; // piece of data
        this.next = null; // reference to next node
    }
}

// LIFO (Last-In First-Out)
class Stack {
    #first;
    #last;
    #size;

    constructor() {
        this.#first = null;
        this.#last = null;
        this.#size = 0;
    }

    // similar to the linked list's unshift method
    push(value) {
        const newNode = new Node(value);
        if (!this.#first) {
            this.#first = newNode;
            this.#last = newNode;
        } else {
            const preNode = this.#first;
            this.#first = newNode;
            this.#first.next = preNode;
        }
        return ++this.#size;
    }

    // similar to the linked list's shift method
    pop() {
        if (!this.#first) return undefined;
        const poppedNode = this.#first;
        if (this.#size === 1) {
            this.#first = null;
            this.#last = null;
        } else {
            this.#first = poppedNode.next;
        }
        this.#size--;
        return poppedNode.value;
    }
}`
};

let dataStructureSubpageItemTranslated = ``;
let counter = 1;
let space = "";
for (const key of Object.keys(dataStructureSubpageItem)) {
    if (counter < 10) {
        space = "&nbsp;";
    } else {
        space = "";
    }
    dataStructureSubpageItemTranslated += `<li><a id="click-${key.toLowerCase().replace(/ /g, "-")}-sidepage" href="#${key.toLowerCase().replace(/ /g, "-")}-sidepage">${space}${counter}. ${key}</a></li>`;
    counter++;
}

let dataStructureSubpageMain = `
<ul id="${Object.keys(dataStructureSubpageItem)[0].toLowerCase().replace(/ /g, "-")}-sidepage" class="sidepage">
                    <section class="sidepage-main">
                        <pre><code>${dataStructureSubpageItem[Object.keys(dataStructureSubpageItem)[0]]}</code></pre>
                    </section>
                    <section class="sidebar">
                        <ul id="data-structure-sidemenu" class="sidemenu">` + dataStructureSubpageItemTranslated + `</ul>
                    </section>
                </ul>`;

export { dataStructureSubpageItem };
export { dataStructureSubpageMain };