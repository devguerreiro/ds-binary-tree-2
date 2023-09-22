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

    inOrderTraversal(node: Node | null = null) {}
    preOrderTraversal(node: Node | null = null) {}
    postOrderTraversal(node: Node | null = null) {}
    height(node: Node | null = null) {}
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
