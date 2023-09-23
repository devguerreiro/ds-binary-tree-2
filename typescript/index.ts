class Node {
    left: Node | null = null;
    right: Node | null = null;
    value: number;

    constructor(value: number) {
        this.value = value;
    }
}

class BinaryTree {
    root: Node | null = null;

    inOrderTraversal() {
        let node = this.root;
        const stack: Node[] = [];
        while (node !== null || stack.length > 0) {
            if (node !== null) {
                stack.unshift(node);
                node = node.left;
            } else {
                node = stack.shift() as Node;
                process.stdout.write(node.value + "->");
                node = node.right;
            }
        }
    }
    preOrderTraversal() {
        let node = this.root;
        const stack: Node[] = [];
        while (node !== null || stack.length > 0) {
            if (node !== null) {
                process.stdout.write(node.value + "->");
                stack.unshift(node);
                node = node.left;
            } else {
                node = stack.shift() as Node;
                node = node.right;
            }
        }
    }
    postOrderTraversal() {
        if (this.root === null) return;

        let node = this.root;
        const traversalStack = [node];
        const visitedStack: number[] = [];
        while (traversalStack.length > 0) {
            node = traversalStack.shift() as Node;
            visitedStack.unshift(node.value);
            if (node.left !== null) {
                traversalStack.unshift(node.left);
            }
            if (node.right !== null) {
                traversalStack.unshift(node.right);
            }
        }
        while (visitedStack.length > 0) {
            process.stdout.write(visitedStack.shift() + "->");
        }
    }
    height() {
        if (this.root === null) return 0;

        let node = this.root;
        const traversalStack = [node];
        const visitedStack: number[] = [];
        while (traversalStack.length > 0) {
            node = traversalStack.shift() as Node;
            visitedStack.unshift(node.value);
            if (node.left !== null) {
                traversalStack.unshift(node.left);
            }
            if (node.right !== null) {
                traversalStack.unshift(node.right);
            }
        }
        return Math.floor(Math.log2(visitedStack.length));
    }
}

export default {};

const binaryTree = new BinaryTree();

const root = new Node(1);

binaryTree.root = root;

const two = new Node(2);
const three = new Node(3);

const four = new Node(4);
const five = new Node(5);

const six = new Node(6);
const seven = new Node(7);

root.left = two;
root.right = three;

two.left = four;
two.right = five;

three.left = six;
three.right = seven;

console.log("in-order traversal");
binaryTree.inOrderTraversal();
console.log("\npre-order traversal");
binaryTree.preOrderTraversal();
console.log("\npost-order traversal");
binaryTree.postOrderTraversal();
console.log("\nheight");
console.log(binaryTree.height());
