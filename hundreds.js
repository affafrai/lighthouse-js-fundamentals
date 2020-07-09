

const howManyHundreds = function (num){

  let x = (num % 100);
  let result = 0;

  if(x == 0){
    result = num / 100;
  }
  else result = (num - x)/100;

return result;
}	

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);
howManyHundreds(1000);
howManyHundreds(894);
howManyHundreds(520);
howManyHundreds(99);
howManyHundreds(0);
