alert('Welcome to "Matrix Calculator"!!');

const mathematicalOperation = 
 prompt('Please enter a symbol of mathematical operation which ' 
 + 'you would like to perform with two matrices:\n• + (for addition)' 
 + '\n• - (for subtraction)\n• * (for multiplication)').trim();

if (mathematicalOperation === '+' 
 || mathematicalOperation === '-' 
 || mathematicalOperation === '*') 
{
  // future realisation
}
else 
{
  alert('Oops.. an error occurred!');
}