import {encode, calcCompressionRation, decode_text, compareAsciiToHuffman} from './project.js';
import {asciiTableObject} from './asciiTable.js';

document.getElementById("submitFile").addEventListener("click", () => {
    let start = window.performance.now(); // measure the start time of functions

    let text = document.getElementById("textAreaValue").value;
    const compressionText = encode(text).result;
    const huffmanCodes = encode(text).huffmanCode;
    let asciiAndHuffmanObject = compareAsciiToHuffman(huffmanCodes, asciiTableObject);
    let decodedText = decode_text(compressionText, text);
    let compressionRatio = calcCompressionRation(text, huffmanCodes);

    let end = window.performance.now(); // measure the end time of functions
    let execTime = (end - start).toFixed(5);    // measure the execution time
    
    document.querySelector("thead").innerHTML = "";
    document.querySelector("tbody").innerHTML = "";

    document.getElementById("OriginalTextValue").innerHTML = "<span class='textHeader'>Original Text: </span>" + text;
    document.getElementById("compressedTextValue").innerHTML = "<span class='textHeader'> Compressed Text: </span> " + compressionText;
    document.getElementById("compressionRatio").innerHTML = "<span class='textHeader'> Compression Ratio: </span>" + compressionRatio;
    document.getElementById("decompressedText").innerHTML = "<span class='textHeader'> Decompressed Text: </span>" + decodedText;
    document.getElementById("executionTime").innerHTML = "<span class='textHeader'> Execution Time:</span>" + execTime + " ms";

    const tableHeader = document.getElementById("tableHeader");
    const tableBody = document.getElementById("tableBody");

    const headerTrElement = document.createElement('tr');

    const charThElement = document.createElement("th")
    charThElement.innerHTML = "Character";
    const byteThElement = document.createElement("th")
    byteThElement.innerHTML = "Byte";
    const oldCodeThElement = document.createElement("th")
    oldCodeThElement.innerHTML = "Old Code";
    const newCodeThElement = document.createElement("th")
    newCodeThElement.innerHTML = "New Code";

    headerTrElement.appendChild(charThElement)
    headerTrElement.appendChild(byteThElement)
    headerTrElement.appendChild(oldCodeThElement)
    headerTrElement.appendChild(newCodeThElement)

    tableHeader.appendChild(headerTrElement);

    let dataTrElement, dataTdElementChar, dataTdElementByte, dataTdElementOldCode, dataTdElementNewCode;
    for(let i in asciiAndHuffmanObject) {
        if(text.split("").includes(i)) {
            dataTrElement = document.createElement("tr");

            dataTdElementChar = document.createElement("td");
            switch(i) {
                case " ":
                    dataTdElementChar.innerHTML = "Blank Space";
                    break;
                case "\n":
                    dataTdElementChar.innerHTML = "Line Break";
                    break;
                default:
                    dataTdElementChar.innerHTML = i;
                    break;
            }
    
            dataTdElementByte = document.createElement("td");
            dataTdElementByte.innerHTML = asciiAndHuffmanObject[i].byte
    
            dataTdElementOldCode = document.createElement("td");
            dataTdElementOldCode.innerHTML = asciiAndHuffmanObject[i].oldCode
            
            dataTdElementNewCode = document.createElement("td");
            dataTdElementNewCode.innerHTML = asciiAndHuffmanObject[i].newCode
    
            dataTrElement.appendChild(dataTdElementChar);
            dataTrElement.appendChild(dataTdElementByte);
            dataTrElement.appendChild(dataTdElementOldCode);
            dataTrElement.appendChild(dataTdElementNewCode);
    
            tableBody.appendChild(dataTrElement);
    
        }
      }
})
