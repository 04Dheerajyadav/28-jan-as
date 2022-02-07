var a =0;
var b=1;
var i =1;
var n = prompt("Enter a number");
n = parseInt(n);
while(i<=n){
  sum = a+b;
  a = b;
  b = sum;
console.log(sum);
}