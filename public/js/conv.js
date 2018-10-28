//let fibonacci = documment.getElementById("fib");

function fibonacci(num) {
    var a = 1, finalValue = 0, temp;
    if (num < 0) {
        throw Error ("you must choose between >=0");
    }
    while (num >= 0) {
        temp = a;
        a = a + finalValue;
        finalValue = temp;
        num--;
    }

    return finalValue;
}

function factorial(num){
  {
    var rval=1;
    for (var i = 2; i <= num; i++)
        rval = rval * i;
    return "You have selected Factorial function. The result for given number "+num+" is: "+rval;
}
  // if (num <= 1){
  //   let x =1
  //   return "You have selected Factorial function.\n The result for given number "+num+" is: "+x
  // }
  // else{
  //   return (num * factorial  (num - 1));
  // } 
  
}

function palindrome(num){
    let a,b,temp=0;  
    b=num;
    while(num>0){
      a=num%10;
      num=parseInt(num/10);
      temp=temp*10+a;
    }
    if(temp==b){
    return "The given number "+b+" is a Palindrome number"
    }
    else
    {
    return("The given number "+b+" is Not a Palindrome number");
    }
}



function calculator(){
  var radiSelect
  if(document.getElementById("valueFact").checked){
      radiSelect = "Factorial";
  }
  else if(document.getElementById("valueFibbo").checked){
    radiSelect = "Fibanoci";
  }
  else if(document.getElementById("valuePal").checked){
    radiSelect = "palin";
  }
  const n = document.getElementById("num").value;
  switch(radiSelect){

    case "Fibanoci":  
                    document.getElementById("result").innerHTML= fibonacci(n);
                    break;
   case "Factorial" :
                    document.getElementById("result").innerHTML= factorial(n);
                    break;
    case "palin": document.getElementById("result").innerHTML = palindrome(n);
                    break;
  }
}

$('.menu').click(function () {
    $('.navMobileList').slideToggle();
})

