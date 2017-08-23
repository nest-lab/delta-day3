var fs = require("fs");

//Reading Input File
var input = fs.readFileSync("./input.txt").toString();
try {
    
rawRows = input.split("\n");

arr = [];

interestingNumbers = [];


//Making the Matrix
for (var i = 0; i < rawRows.length; i++) {
    arr[i] = []
    var colArr = rawRows[i].split(" ")

    for (var j = 0; j < colArr.length; j++) {
        arr[i][j] = Number(colArr[j].trim());
        
    }
}

function isset (item) {
    if (typeof item !== 'undefined' && item !== null) {
        return true
    }
    else {
        return false;
    }
}

//Filtering Interesting Numbers
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        topCheck = (i !== 0 )? arr[i][j] >= arr[i-1][j] : true;
        leftCheck = (j !== 0)? arr[i][j] >= arr[i][j-1] :true;
        rightCheck = (j !== (arr[i].length - 1)) ? arr[i][j] >= arr[i][j + 1] : true;
        bottomCheck = (i !== (arr.length - 1) ) ? arr[i][j] >= arr[i+1][j] : true;

        if (topCheck && leftCheck && rightCheck && bottomCheck) {
            interestingNumbers.push({
                value : arr[i][j],
                index: `row: ${i}, col: ${j}`
            })
        }
    }
    
}

if (interestingNumbers.length  === 0) {
    console.log(" There are no interesting numbers in the matrix")
}

else {
    console.log("The Interesting Numbers are:");
    for (var k = 0; k < interestingNumbers.length; k++) {
        console.log("\n");
        console.log(`Value: ${interestingNumbers[k].value}`);
        console.log(`Index: ${interestingNumbers[k].index}`)
        
    }
}

}

catch (err) {
    console.log("There is something wrong with your Input File")
}