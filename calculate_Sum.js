/**
 * Q8.You are creating a program to calculate the sum of numbers. Write a JavaScript program that takes a
positive integer as input and uses a do-while loop to calculate and print the sum of all numbers from 1 to the
given integer.
 */
const input = 10
let sum = 0
let start=1;
do{
    sum+=start;
    start++;
}while(start<=input)

console.log('The sum is: ' , sum)