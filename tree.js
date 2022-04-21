const assert = require("assert");

class treeAdd {
    static operatorString = '+'
    static left = null
    static right = null
    static result = null

    static calculate(left, right) {
        this.left = left
        this.right = right

        this.result = this.left + this.right
        return this.result
    }

    static getResult() {
        return this.result
    }

    static toString() {
        console.log(`(${this.left} ${this.operatorString} ${this.right})`)
        return `(${this.left} ${this.operatorString} ${this.right})`
    }
}

class treeMinus extends treeAdd {
    static operatorString = '-'

    static calculate(left, right) {
        this.left = left
        this.right = right

        this.result = this.left - this.right
        return this.result
    }
}

class treeDivide extends treeAdd {
    static operatorString = '÷'

    static calculate(left, right) {
        this.left = left
        this.right = right

        this.result = this.left / this.right
        return this.result
    }
}

class treeMultiply extends treeAdd {
    static operatorString = 'x'

    static calculate(left, right) {
        this.left = left
        this.right = right

        this.result = this.left * this.right
        return this.result
    }
}

// const add = () => {}
// add.prototype.result = (left, right) => {
//     return left.result() + right.result()
// }
//
// add.prototype.toString = (left, right) => {
//     return `(${left.toString()} + ${right.toString()})`
// }
// tc1 = new treeAdd(3, 2)
// console.log(tc1.getResult())
// console.log(tc1.toString())
//
// tc2 = new treeMinus(3, 2)
// console.log(tc2.getResult())
// console.log(tc2.toString())
//
// tc3 = new treeMultiply(3, 2)
// console.log(tc3.getResult())
// console.log(tc3.toString())
//
// tc4 = new treeDivide(3, 2)
// console.log(tc4.getResult())
// console.log(tc4.toString())

//     const result = function () {
//         switch (this.operator) {
//             case "+":
//                 return left.result() + right.result();
//             case "-":
//                 return left.result() - right.result();
//             case "x":
//                 return left.result() * right.result();
//             case "÷":
//                 return left.result() / right.result();
//             default:
//                 return value;
//         }
//     };
//
//     const toString = function () {
//         switch (this.operator) {
//             case "+":
//                 return `(${left.toString()} + ${right.toString()})`;
//             case "-":
//                 return `(${left.toString()} - ${right.toString()})`;
//             case "x":
//                 return `(${left.toString()} x ${right.toString()})`;
//             case "÷":
//                 return `(${left.toString()} ÷ ${right.toString()})`;
//             default:
//                 return value.toString();
//         }
//     };
//
//     return {
//         operator,
//         value,
//         left,
//         right,
//         result,
//         toString
//     };
// };





// const tree = Node(
//     "÷",
//     null,
//     Node(
//         "+",
//         null,
//         Node("", 7, null, null),
//         Node(
//             "x",
//             null,
//             Node("-", null, Node("", 3, null, null), Node("", 2, null, null)),
//             Node("", 5, null, null)
//         )
//     ),
//     Node("", 6, null, null)
// );

console.log(treeAdd.calculate(3,2))

const tree = treeDivide.calculate(
    treeAdd.calculate(7,
        treeMultiply.calculate(
            treeMinus.calculate(3,2)
        , 5)
    ), 6)

// assert.strictEqual("((7 + ((3 - 2) x 5)) ÷ 6)", tree.toString());
assert.strictEqual(2, tree);