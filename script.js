// alert('Welcome to "Matrix Calculator"!!');

// const mathematicalOperation = 
//  prompt('Please enter a symbol of mathematical operation wich ' 
//  + 'you would like to perform with two matrices:\n• + (for addition)' 
//  + '\n• - (for substraction)\n• * (for multiplication)').trim();

// if (mathematicalOperation === '+' || mathematicalOperation === '-' || mathematicalOperation === '*') 
// {
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
      firstMatrix[i] = firstMatrix[i].split(' ');
    }
    console.log(firstMatrix);
  }
  else
  {
    alert('Error!');
  }

// }
// else 
// {
//   alert('Oops.. an error occurred!');
// }