import math
from typing import TypeVar


TNode = TypeVar("TNode", bound="Node")


class Node:
    right: TNode | None = None
    left: TNode | None = None
    value: int

    def __init__(self, value: int):
        self.value = value


class BinaryTree:
    root: Node | None = None

    def in_order_traversal(self):
        node = self.root
        stack = []
        while node is not None or len(stack) > 0:
            if node is not None:
                stack.insert(0, node)
                # go to the left
                node = node.left
            else:
                # get root leaf
                node: Node = stack.pop(0)
                # print root leaf
                print(node.value, end="->")
                # go to the right
                node = node.right

    def pre_order_traversal(self):
        node = self.root
        stack = []
        while node is not None or len(stack) > 0:
            if node is not None:
                # print root leaf
                print(node.value, end="->")
                stack.insert(0, node)
                # go to the left
                node = node.left
            else:
                # get root leaf
                node: Node = stack.pop(0)
                # go to the right
                node = node.right

    def post_order_traversal(self):
        if self.root is None:
            return

        node = self.root
        traversal_stack = [node]
        visited_stack = []
        while len(traversal_stack) > 0:
            node = traversal_stack.pop(0)
            visited_stack.insert(0, node.value)
            if node.left is not None:
                traversal_stack.insert(0, node.left)
            if node.right is not None:
                traversal_stack.insert(0, node.right)
        while len(visited_stack) > 0:
            print(visited_stack.pop(0), end="->")

    def height(self, node: Node | None = None):
        if self.root is None:
            return 0

        node = self.root
        traversal_stack = [node]
        visited_stack = []
        while len(traversal_stack) > 0:
            node = traversal_stack.pop(0)
            visited_stack.insert(0, node.value)
            if node.left is not None:
                traversal_stack.insert(0, node.left)
            if node.right is not None:
                traversal_stack.insert(0, node.right)
        return math.floor(math.log(len(visited_stack), 2))


binary_tree = BinaryTree()

root = Node(1)

binary_tree.root = root

two = Node(2)
three = Node(3)

four = Node(4)
five = Node(5)

six = Node(6)
seven = Node(7)

root.left = two
root.right = three

two.left = four
two.right = five

three.left = six
three.right = seven

print("in-order traversal")
binary_tree.in_order_traversal()
print("\npre-order traversal")
binary_tree.pre_order_traversal()
print("\npost-order traversal")
binary_tree.post_order_traversal()
print("\nheight")
print(binary_tree.height())
