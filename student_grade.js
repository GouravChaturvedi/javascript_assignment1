let grade;
const marks = 50;
if(marks>90){
    grade = 'A grade';
}else if(marks>70){
    grade = 'B grade';
}else if(marks>=50){
    grade = 'C grade';
}else{
    grade = 'D grade';
}
console.log('Your grade is : ' ,  grade );