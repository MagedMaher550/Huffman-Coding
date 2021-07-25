import {PriorityQueue as Queue, Node}  from './dataStructures.js';   // used for building the huffman tree
const huffmanCode = {}; // will be filled with the codes of the chars.
let frequencyObject = {}; // will be filled with the frequency of each character
let huffmanTree;    // will hold huffman tree

// check whether a node is a leaf node or not
const isLeaf = node => node.left == null && node.right == null;

// Create the frequency object of the characters
const countFrequency = text => {
    let freqObject = {};
    for(let char of text) {
        if(Object.keys(freqObject).includes(char)) {
            freqObject[char] += 1;
        } else {
            freqObject[char] = 1;
        }
    }
    frequencyObject = {...freqObject};
    return freqObject;
}

// Create the priority queue to store the nodes
const createPriorityQueue = text => {
    const freqObj = countFrequency(text);
    const nodesQueue = new Queue();
    for(let key in freqObj) {
        // fill the priority queue with frequency and nodes in which every node holds the character and its children
        nodesQueue.enqueue(new Node(key, freqObj[key]), freqObj[key]);
    }
    return nodesQueue;
}


// Create the huffman tree
const createHuffmanTree = (text) => {
    const nodesQueue = createPriorityQueue(text);

    // special case where the input is one character repeated like aa, aaa, bbbb, ccccc, ...etc
    if(nodesQueue.size() == 1) 
        return nodesQueue.dequeue().element;

    let left, right, totalFreq, newNode, root;
    while(nodesQueue.size() > 1) {
        // get the two elements with least frequency and combine them in one node with null charcter and the sum
        // of their frequency
        left = nodesQueue.dequeue();
        right = nodesQueue.dequeue();
        totalFreq = left.element.freq + right.element.freq;
        newNode = new Node(null, totalFreq, left.element, right.element);
        nodesQueue.enqueue(newNode, totalFreq);
    }
    // the remaining node will hold the entire tree
    root = nodesQueue.dequeue().element;
    return root;
}

// Traverse the huffman tree and stroe the codes
const assignCodes = (root, str, huffman_code) => {
    // The stopping condition for this recursive function
    if(root == null) { 
        return;
    } else {
        // found a leaf node ...
        if(isLeaf(root))
            if (str.length > 0) {
                huffman_code[root.char] = str;
            } else if(str.length < 0){
                huffman_code[root.char] = 1;
            } else {
                huffman_code[root.char] = 1
                return;
            }
        assignCodes(root.left, str + '0', huffman_code);
        assignCodes(root.right, str + '1', huffman_code);
    }    
}

// convert text into codded text
const encode = (text) => {
    // step 1: create the huffman tree
    huffmanTree = createHuffmanTree(text);

    // step 2: assign the codes and fill the huffman code object
    assignCodes(huffmanTree, "", huffmanCode);
    
    // step 3: use the huffmanCode object to encrypt the text
    let result = "", index;
    for(let i=0; i<text.length; i++) {
        index = Object.keys(huffmanCode).indexOf(text[i]);
        result += huffmanCode[Object.keys(huffmanCode)[index]];
    }

    return {
        result: result,
        huffmanCode: huffmanCode
    }; // enctypted text
}

            
const decode_text = (encodedText) => {
    let result = "";
    // special case where the input is one character repeated like aa, aaa, bbbb, ccccc, ...etc
    if( new Set(encodedText.split("")).size === 1) {
        for(let i=0; i<encodedText.length; i++) 
            result += Object.keys(frequencyObject)[0];
    } else {
        // Step 1: get the huffman tree and make a copy of it.
        let root = huffmanTree;
        let rootCopy = root;

        // Step 2: iterate over the string, and go left when 0 found, else go right.
        for(let i=0; i<encodedText.length; i++) {        
            if(encodedText[i] == '0')
                root = root.left;
            else
                root = root.right;
            // if leaf node is found, get the character.
            if(isLeaf(root)) {
                result += root.char;
                root = rootCopy
            }
        }        
    }
    return result;
}

// calculate the compression ratio by dividning the decompressed text size by the compressed text size
const calcCompressionRation = (text, huffmanCode) => {
    let uncompressedTextSize = 8 * text.length; // each character is represented by 8 bits of ascii code
    let compressedTextSize = 0;
    
    if( new Set(text.split("")).size === 1) {
        return 8;
    } else {
        let char, codeLength, charFreq;
        for(let i=0; i<Object.keys(frequencyObject).length; i++) {
            char = Object.keys(frequencyObject)[i]; // character from the frequency object
            charFreq = frequencyObject[Object.keys(frequencyObject)[i]];    // the frequency of the character
            codeLength = huffmanCode[char].length;  // the length of the bits assigned to this character in the huffmanCode object
            compressedTextSize += charFreq * codeLength;
        }
        return (uncompressedTextSize/compressedTextSize).toFixed(4);
    }
}

// creates an object that contains the byte, ascii code, and the hufmman code of the character
const compareAsciiToHuffman = (huffman_code, ascii_object) => {
    let resultObj = {};
    let char;
    for(let i=0; i<Object.keys(huffman_code).length; i++) {
        char = Object.keys(huffman_code)[i];
        try {
            resultObj[char] = {
                byte: ascii_object[char].byte,
                oldCode: ascii_object[char].code,
                newCode: huffman_code[char]
            }
        } catch (error) {
            console.log("char: ", char)
        }
    }
    return resultObj;
}


export {encode, calcCompressionRation, decode_text, compareAsciiToHuffman}