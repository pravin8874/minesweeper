const ask = require("p-readline")
const cTable = require('console.table');

playGame = async () => {
  // Here we taking rows and coloumns of board matrix.
  const noOfRows = await ask("Please enter the no of rows");
  const noOfColumns = await ask("Please enter the no of columns");
  const inputMatrix = [];
  const finalMatrix = [];
  console.log("================================")
  console.error("Note: greater than 0 is consider as a Mine and space or 0 is empty place.")
  console.log("================================")
  // Here we taking inputs of board matrix.
  for (let rowIndex = 0; rowIndex < noOfRows; rowIndex++) {
    inputMatrix[rowIndex] = [];
    for (let colIndex = 0; colIndex < noOfColumns; colIndex++) {
      const ele = await ask(`Insert element of matrix a[${rowIndex}][${colIndex}]`, { defaultValue: 0 })
      inputMatrix[rowIndex][colIndex] = ele;
    }
  }

  for (let rowIndex = 0; rowIndex < noOfRows; rowIndex++) {
    finalMatrix[rowIndex] = [];
    for (colIndex = 0; colIndex < noOfColumns; colIndex++) {
      // If element is greater than 0 then set 9 as mine
      if (+inputMatrix[rowIndex][colIndex]) {
        finalMatrix[rowIndex][colIndex] = 9;
      } else {
        let noOfAdjacent = 0;
        // If element is 0 or space than set no of adjacent mines
        for (let adjRowIndex = rowIndex - 1; adjRowIndex < rowIndex + 2; adjRowIndex++) {
          for (let adjColIndex = colIndex - 1; adjColIndex < colIndex + 2; adjColIndex++) {
            // Here we find self element.
            const selfEle = (rowIndex == adjRowIndex && colIndex == adjColIndex);
            if (((-1 < adjRowIndex) && (adjRowIndex < noOfRows) && (-1 < adjColIndex) && (adjColIndex < noOfColumns)) && !selfEle) {
              if (+inputMatrix[adjRowIndex][adjColIndex])
                ++noOfAdjacent
            }
          }
        }
        finalMatrix[rowIndex][colIndex] = noOfAdjacent;
      }
    }
  }

  console.log("================================")
  console.table(inputMatrix)
  console.log("================================")
  console.table(finalMatrix)
}

playGame()


