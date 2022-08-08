export const Keys = [1,2,3,4,5,6,7,8,9,"ok",0,"del"];

const sum = (num1,num2) => num1+num2;
const subtract  = (num1,num2) => Math.abs(num1-num2);
const multiply = (num1,num2) => num1*num2;
const divide = (num1,num2) => num1/num2;

export const MATH_OPERATIONS = {
  sum: {
    sign: '+',
    do: sum
  },
  subtract: {
    sign: '-',
    do:  subtract
  },
  multiply: {
    sign: 'x',
    do: multiply
  },
  divide: {
    sign: ':',
    do: divide
  }
}
