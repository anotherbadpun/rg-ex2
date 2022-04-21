const assert = require("assert");

class treeAdd {
    operatorString = '+'
    left = null
    right = null
    result = null

    constructor(left, right) {
        this.left = left
        this.right = right

        this.calculate()
    }

    calculate() {
        this.result = this.left + this.right
    }

    getResult() {
        return this.result
    }

    toString() {
        return `${this.left} ${this.operatorString} ${this.right}`
    }
}

class treeMinus extends treeAdd {
    operatorString = '-'

    calculate() {
        this.result = this.left - this.right
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
tc1 = new treeAdd(3, 2)
console.log(tc1.getResult())
console.log(tc1.toString())

tc2 = new treeMinus(3, 2)
console.log(tc2.getResult())
console.log(tc2.toString())

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

// assert.strictEqual("((7 + ((3 - 2) x 5)) ÷ 6)", tree.toString());
// assert.strictEqual(2, tree.result());