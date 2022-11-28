alert('Welcome to "Matrix Calculator"!!');

const mathematicalOperation = 
 prompt('Please enter a symbol of mathematical operation which ' 
 + 'you would like to perform with two matrices:\n• + (for addition)' 
 + '\n• - (for subtraction)\n• * (for multiplication)').trim();

document.getElementById('mathematical-operation').innerText = mathematicalOperation;

if (mathematicalOperation === '+' 
 || mathematicalOperation === '-') 
{
  const strMatrixDimension = 
   prompt('Please enter the number of rows and the number of columns ' 
   + 'separated by space (first rows, then columns, e.g. 2 2)').trim();
  
  // Make an array from string where the first value is a number of rows 
  // and the second value is a number of columns
  const matrixDimension = strMatrixDimension.split(' ');

  if (matrixDimension.length === 2)
  {
    // Convert number of rows and number of columns to "number" type
    matrixDimension[0] = Number.parseInt(matrixDimension[0]); // rows
    matrixDimension[1] = Number.parseInt(matrixDimension[1]); // columns

    alert('Enter the first matrix.');
    
    // Create first matrix
    const firstMatrix = [];
    CreateMatrix(firstMatrix, matrixDimension[0]);

    // Convert values of first matrix to "number" type
    ConvertMatrixToNumber(firstMatrix, matrixDimension);

    alert('Enter the second matrix.');

    // Create second matrix
    const secondMatrix = [];
    CreateMatrix(secondMatrix, matrixDimension[0]);

    // Convert values of second matrix to "number" type
    ConvertMatrixToNumber(secondMatrix, matrixDimension);

    const resultMatrix = [];
    switch (mathematicalOperation) 
    {
      case '+':
        // Calculate the result of adding two matrices
        for (let i = 0; i < matrixDimension[0]; i++) 
        {
          resultMatrix[i] = [];
          for (let j = 0; j < matrixDimension[1]; j++) 
          {
            resultMatrix[i][j] = firstMatrix[i][j] + secondMatrix[i][j];
          }
        }
        break;
      case '-':
        // Calculate the result of subtracting two matrices
        for (let i = 0; i < matrixDimension[0]; i++) 
        {
          resultMatrix[i] = [];
          for (let j = 0; j < matrixDimension[1]; j++) 
          {
            resultMatrix[i][j] = firstMatrix[i][j] - secondMatrix[i][j];
          }
        }
        break;
      default:
        break;
    }

    // Display first matrix
    DisplayMatrix('first', firstMatrix, matrixDimension);
    // Display second matrix
    DisplayMatrix('second', secondMatrix, matrixDimension);
    // Display result matrix
    DisplayMatrix('result', resultMatrix, matrixDimension);
  }
  else
  {
    alert('Error!');
  }
}
else if (mathematicalOperation === '*') 
{
  const strFirstMatrixDimension = 
   prompt('Please enter the number of rows and the number of columns ' 
   + 'of the first matrix separated by space (e.g. 2 2)').trim();

  // Convert string containing nsecondumber of rows and number of columns
  // of the first matrix to an array
  const firstMatrixDimension = strFirstMatrixDimension.split(' ');

  // Convert number of rows and number of columns to "number" type
  firstMatrixDimension[0] = Number.parseInt(firstMatrixDimension[0]); // rows
  firstMatrixDimension[1] = Number.parseInt(firstMatrixDimension[1]); // columns

  alert('Enter the first matrix.');
    
  // Create first matrix
  const firstMatrix = [];
  CreateMatrix(firstMatrix, firstMatrixDimension[0]);

  // Convert values of first matrix to "number" type
  ConvertMatrixToNumber(firstMatrix, firstMatrixDimension);

  const strSecondMatrixDimension = 
   prompt('Please enter the number of rows and the number of columns ' 
   + 'of the second matrix separated by space (e.g. 2 2)').trim();
  
  // Convert string containing number of rows and number of columns
  // of the second matrix to an array
  const secondMatrixDimension = strSecondMatrixDimension.split(' ');

  // Convert number of rows and number of columns to "number" type
  secondMatrixDimension[0] = Number.parseInt(secondMatrixDimension[0]); // rows
  secondMatrixDimension[1] = Number.parseInt(secondMatrixDimension[1]); // columns

  alert('Enter the second matrix.');

  // Create second matrix
  const secondMatrix = [];
  CreateMatrix(secondMatrix, secondMatrixDimension[0]);

  // Convert values of second matrix to "number" type
  ConvertMatrixToNumber(secondMatrix, secondMatrixDimension);

  // Calculate the result of multiplying two matrices
  const resultMatrix = [];
  for (let i = 0; i < firstMatrixDimension[0]; i++) 
  {
    resultMatrix[i] = [];
    for (let j = 0; j < secondMatrixDimension[1]; j++) 
    {
      resultMatrix[i][j] = 0;
      for (let k = 0; k < firstMatrixDimension[1]; k++) 
      {
        resultMatrix[i][j] += firstMatrix[i][k] * secondMatrix[k][j];
      }
    }
  }

  // Create an array of result matrix number of rows and 
  // number of columns in order to display result matrix
  const resultMatrixDimension = [];
  resultMatrixDimension.push(firstMatrixDimension[0]);
  resultMatrixDimension.push(secondMatrixDimension[1]);
  
  // Display first matrix
  DisplayMatrix('first', firstMatrix, firstMatrixDimension);
  // Display second matrix
  DisplayMatrix('second', secondMatrix, secondMatrixDimension);
  // Display result matrix
  DisplayMatrix('result', resultMatrix, resultMatrixDimension);
}
else 
{
  alert('Oops.. an error occurred!');
}

function ConvertMatrixToNumber(matrix, matrixDimension) 
{
  // Convert values of matrix to "number" type
  for (let i = 0; i < matrixDimension[0]; i++) 
  {
    for (let j = 0; j < matrixDimension[1]; j++) 
    {
      matrix[i][j] = Number.parseFloat(matrix[i][j]);
    }
  }
}

function DisplayMatrix(strMatrixPrefix, matrix, matrixDimension) 
{
  const strMatrixName = strMatrixPrefix + '-matrix';
  for (let i = 0; i < matrixDimension[0]; i++) 
  {
    let strRow = '';
    for (let j = 0; j < matrixDimension[1]; j++) 
    {
      strRow += matrix[i][j] + ' ';
    }
    // Display the (i+1)-th row of matrix
    document.getElementById(strMatrixName).innerHTML += `<div>${strRow.trim()}</div>`;
  }
}

function CreateMatrix(matrix, numberOfRows) 
{
  for (let i = 0; i < numberOfRows; i++) 
  {
    matrix[i] = 
     prompt(`Please enter the ${i+1}-th row of the matrix.`).trim();
    matrix[i] = matrix[i].split(' ');
  }
}