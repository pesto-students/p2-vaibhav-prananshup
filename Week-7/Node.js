class Node {
    #data;
    #next;

    constructor (data) {
        this.#data = data;
        this.#next = null;
    }

    set data(data) {
        this.#data = data;
    }

    get data() {
        return this.#data;
    }

    set next(next) {
        this.#next = next;
    }

    get next() {
        return this.#next;
    }
}

export default Node;