function biggestDigit(x)
 {
     var num = x;
   var maxDigit = 0
while(num >= 10)
   {
    var lastDigit = num%10
        if(lastDigit>maxDigit)
            {maxDigit = lastDigit;}
     
     num = (num - num%10)/10
    }

return maxDigit;
 }

console.log(biggestDigit(1283))
