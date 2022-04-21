const assert = require("assert");

class treeAdd {
    static operatorString = '+'
    static left = null
    static right = null
    static result = null
    static stringified = ''

    static setValues(left, right) {
        this.left = left
        this.right = right

        this.stringified = String(`(${this.stringified} ${this.left} ${this.operatorString} ${this.right})`)
        return this
    }

    static calculate() {
        this.result = this.left + this.right
        return this.result
    }

    static getResult() {
        return this.result
    }

    static toString() {
        return this.stringified
    }
}

class treeMinus extends treeAdd {
    static operatorString = '-'

    static calculate() {
        this.result = this.left - this.right
        return this.result
    }
}

class tree extends treeAdd {
    static operatorString = '÷'

    static calculate() {
        this.result = this.left / this.right
        return this.result
    }
}

class treeMultiply extends treeAdd {
    static operatorString = 'x'

    static calculate() {
        this.result = this.left * this.right
        return this.result
    }
}

tree.setValues(
    treeAdd.setValues(7,
        treeMultiply.setValues(
            treeMinus.setValues(3,2).calculate()
        , 5).calculate()
    ).calculate(),
6).calculate()

assert.strictEqual("((7 + ((3 - 2) x 5)) ÷ 6)", treeMultiply.toString());
assert.strictEqual(2, tree.getResult());