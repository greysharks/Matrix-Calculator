alert('Welcome to "Matrix Calculator"!!');

const mathematicalOperation = 
 prompt('Please enter a symbol of mathematical operation wich ' 
 + 'you would like to perform with two matrices:\n• + (for addition)' 
 + '\n• - (for substraction)\n• * (for multiplication)').trim();

if (mathematicalOperation === '+' || mathematicalOperation === '-' || mathematicalOperation === '*') 
{
  // future realisation
}
else 
{
  alert('Oops.. an error occured!');
}