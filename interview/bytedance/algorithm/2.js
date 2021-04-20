function BinarySearchTree() {
    var Node = function (key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
    var root = null;
    this.inOrderTraverseNode = function (callback) {
        inOrderTraverseNode(root, callback)
    }
    var inOrderTraverseNode = function (node, callback) {
        if (node != null) {
            inOrderTraverseNode(node.left, callback);
            callback(node.key)
            inOrderTraverseNode(node.right, callback);
        }
    }
    this.preOrderTraverseNode = function () {

    }
    this.postOrderTraverseNode = function () {

    }
    this.insert = function (key) {
        var newNode = new Node(key);
        if (root === null) {
            root = newNode
        } else {
            insertNode(root, newNode);
        }
    }

    function insertNode(node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode
            } else {
                insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
            }
        }
    }

    var searchNode = function (node, key) {
        if (node === null) {
            return false;
        }
        if (node < node.key) {
            return searchNode(node.left, key);
        } else if (key > node.key) {
            return searchNode(node.right, key);
        } else {
            return true
        }
    }

    this.search = function (key) {
        return searchNode(root, key);
    }
    this.remove = function () {

    }
}
const tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);
var printNode = function (val) {
    console.log(val);
}
tree.inOrderTraverseNode(printNode);
console.log(tree.search(13));
console.log(tree.max());
console.log(tree.min());
console.log(tree.remove());
