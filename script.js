alert('Welcome to "Matrix Calculator"!!');

const mathematicalOperation = 
 prompt('Please enter a symbol of mathematical operation which ' 
 + 'you would like to perform with two matrices:\n• + (for addition)' 
 + '\n• - (for subtraction)\n• * (for multiplication)').trim();

document.getElementById('mathematical-operation').innerText = mathematicalOperation;

try 
{
  if (mathematicalOperation === '+' 
   || mathematicalOperation === '-') 
  {
    const strMatrixDimension = 
     prompt('Please enter the number of rows and the number of columns ' 
     + 'separated by space (first rows, then columns, e.g. 2 2)').trim();

    const matrixDimension = CreateMatrixDimension(strMatrixDimension);

    alert('Enter the first matrix.');
    
    // Create first matrix
    const firstMatrix = [];
    CreateMatrix(firstMatrix, matrixDimension[0]);

    // Check if first matrix was entered without mistakes
    CheckMatrix(firstMatrix, matrixDimension);

    // Convert values of first matrix to "number" type
    ConvertMatrixToNumber(firstMatrix, matrixDimension);

    alert('Enter the second matrix.');

    // Create second matrix
    const secondMatrix = [];
    CreateMatrix(secondMatrix, matrixDimension[0]);

    // Check if second matrix was entered without mistakes
    CheckMatrix(secondMatrix, matrixDimension);

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
  else if (mathematicalOperation === '*') 
  {
    const strFirstMatrixDimension = 
     prompt('Please enter the number of rows and the number of columns ' 
     + 'of the first matrix separated by space (e.g. 2 2)').trim();
 
    const firstMatrixDimension = CreateMatrixDimension(strFirstMatrixDimension);
 
    alert('Enter the first matrix.');
     
    // Create first matrix
    const firstMatrix = [];
    CreateMatrix(firstMatrix, firstMatrixDimension[0]);

    // Check if first matrix was entered without mistakes
    CheckMatrix(firstMatrix, firstMatrixDimension);
 
    // Convert values of first matrix to "number" type
    ConvertMatrixToNumber(firstMatrix, firstMatrixDimension);
 
    const strSecondMatrixDimension = 
     prompt('Please enter the number of rows and the number of columns ' 
     + 'of the second matrix separated by space (e.g. 2 2)').trim();
   
    const secondMatrixDimension = CreateMatrixDimension(strSecondMatrixDimension);

    // Check if it is possible to multiply two matrices
    if (firstMatrixDimension[1] !== secondMatrixDimension[0]) 
    {
      throw 'The number of columns of the first matrix doesn\'t'
      + ' match the number of rows of the second matrix!';
    }
 
    alert('Enter the second matrix.');
 
    // Create second matrix
    const secondMatrix = [];
    CreateMatrix(secondMatrix, secondMatrixDimension[0]);

    // Check if second matrix was entered without mistakes
    CheckMatrix(secondMatrix, secondMatrixDimension);
 
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
    alert('Oops.. that operation doesn\'t exist!');
  }
}
catch (err) 
{
  alert('Error! ' + err);
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
  for (let i = 0; i < matrixDimension[1]; i++) 
  {
    let strColumn = '';
    for (let j = 0; j < matrixDimension[0]; j++) 
    {
      strColumn += `<div>${matrix[j][i]}</div>`;
    }
    // Display the (i+1)-th column of matrix
    document.getElementById(strMatrixName).innerHTML += `<div class="column">${strColumn.trim()}</div>`;
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

function CreateMatrixDimension(strMatrixDimension) 
{
  // Convert string containing number of rows and
  // number of columns of the matrix to an array
  const matrixDimension = strMatrixDimension.split(' ');

  // Check if matrix dimension has enough values
  if (matrixDimension.length !== 2) 
  {
    throw 'You should have entered two values! '
     + '(first number of rows, then number of columns)';
  }

  // Convert number of rows and number of columns to "number" type
  matrixDimension[0] = Number.parseInt(matrixDimension[0]); // rows
  matrixDimension[1] = Number.parseInt(matrixDimension[1]); // columns

  // Check if user has entered number values
  if (Number.isNaN(matrixDimension[0]) || Number.isNaN(matrixDimension[1])) 
  {
    throw 'Values should be numbers!';
  }

  // Check if values are not too small
  if (matrixDimension[0] < 1 || matrixDimension[1] < 1) 
  {
    throw 'Values should not be less than 1!';
  }

  return matrixDimension;
}

function CheckMatrix(matrix, matrixDimension) 
{
  for (let i = 0; i < matrixDimension[0]; i++) 
  {
    // Check if each matrix row has enough columns
    if (matrix[i].length !== matrixDimension[1]) 
    {
      throw 'Sorry, your input doesn\'t match expected number' 
       + ' of columns.';
    }

    // Check if matrix values are numbers
    for (let j = 0; j < matrixDimension[1]; j++) 
    {
      if (Number.isNaN(matrix[i][j])) 
      {
        throw 'Values for your matrix should be numbers!';
      }
    }
  }
}