const ask = require("p-readline")
const cTable = require('console.table');

playGame = async () => {
  const row = await ask("Please enter the no of rows");
  const col = await ask("Please enter the no of coloumns");
  const matrix = [];
  const finalMatrix = [];
  console.log("================================")
  console.error("Note: greater than 0 is consider as a Mine and space or 0 is empty place.")
  console.log("================================")
  for (i = 0; i < row; i++) {
    matrix[i] = [];
    for (j = 0; j < col; j++) {
      const ele = await ask(`Insert element of matrix a[${i}][${j}]`, { defaultValue: 0 })
      matrix[i][j] = ele;
    }
  }

  for (i = 0; i < row; i++) {
    finalMatrix[i] = [];
    for (j = 0; j < col; j++) {
      if (+matrix[i][j]) {
        finalMatrix[i][j] = 9;
      } else {
        let count = 0;
        for (k = i - 1; k < i + 2; k++) {
          for (l = j - 1; l < j + 2; l++) {
            const selfEle = (i == k && j == l);
            if (((-1 < k) && (k < row) && (-1 < l) && (l < col)) && !selfEle) {
              if (+matrix[k][l])
                ++count
            }
          }
        }
        finalMatrix[i][j] = count;
      }
    }
  }

  console.log("================================")
  console.table(matrix)
  console.log("================================")
  console.table(finalMatrix)
}

playGame()


