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
   + 'separated by space (e.g. 2 2)').trim();
  
  // Make an array from string where the first value is a number of rows 
  // and the second value is a number of columns
  const matrixDimension = strMatrixDimension.split(' ');

  if (matrixDimension.length === 2)
  {
    // Convert number of rows and number of columns to "number" type
    matrixDimension[0] = Number.parseInt(matrixDimension[0]);
    matrixDimension[1] = Number.parseInt(matrixDimension[1]);

    alert('Enter the first matrix.');
    
    // Create first matrix
    const firstMatrix = [];
    for (let i = 0; i < matrixDimension[0]; i++) 
    {
      firstMatrix[i] = 
       prompt(`Please enter the ${i+1}-th row of the matrix.`).trim();

      // Display (i+1)-th row of first matrix
      document.getElementById('first-matrix').innerHTML += `<div>${firstMatrix[i]}</div>`;

      firstMatrix[i] = firstMatrix[i].split(' ');
    }
    console.log(firstMatrix);

    // Convert values of first matrix to "number" type
    for (let i = 0; i < matrixDimension[0]; i++) 
    {
      for (let j = 0; j < matrixDimension[1]; j++) 
      {
        firstMatrix[i][j] = Number.parseFloat(firstMatrix[i][j]);
      }
    }
    console.log(firstMatrix);

    alert('Enter the second matrix.');

    // Create second matrix
    const secondMatrix = [];
    for (let i = 0; i < matrixDimension[0]; i++) 
    {
      secondMatrix[i] = 
       prompt(`Please enter the ${i+1}-th row of the matrix.`).trim();

      // Display the (i+1)-th row of second matrix
      document.getElementById('second-matrix').innerHTML += `<div>${secondMatrix[i]}</div>`;

      secondMatrix[i] = secondMatrix[i].split(' ');
    }
    console.log(secondMatrix);

    // Convert values of second matrix to "number" type
    for (let i = 0; i < matrixDimension[0]; i++) 
    {
      for (let j = 0; j < matrixDimension[1]; j++) 
      {
        secondMatrix[i][j] = Number.parseFloat(secondMatrix[i][j]);
      }
    }
    console.log(secondMatrix);

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
    console.log(resultMatrix);

    // Display the (i+1)-th row of result matrix
    for (let i = 0; i < matrixDimension[0]; i++) 
    {
      let strRow = '';
      for (let j = 0; j < matrixDimension[1]; j++) 
      {
        strRow += resultMatrix[i][j] + ' ';
      }
      document.getElementById('result-matrix').innerHTML += `<div>${strRow.trim()}</div>`;
    }
  }
  else
  {
    alert('Error!');
  }
}
else 
{
  alert('Oops.. an error occurred!');
}