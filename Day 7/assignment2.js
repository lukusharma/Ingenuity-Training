var y = Math.floor(Math.random() * 10 + 1);
var guess = 3;
var flag = 0;      

while(x != y){ 
   var x = prompt("Enter the number");
  
   if(x == y)
   {    
       alert("CONGRATULATIONS! YOU GUESSED IT WITH "
               + guess + " GUESSES LEFT ");
               flag = 1;
               break;
        
   }
   
   if(x > y)
   {    
       guess--;
       alert("WRONG! TRY A SMALLER NUMBER");
   }
   else if(x < y)
   {
       guess--;
       alert("WRONG! TRY A GREATER NUMBER")
   }
   if(guess == 0)
   {
    var u = "Sorry, you lost!"
    break;  
   }
   } 
  if(flag == 1){
   document.body.innerHTML="<h1 style = color:black>The Random Number was: "  + y +  "</h1>"  +  "<br>"  +  "<h1 style = color:black>Number of guesses left were: "  +  guess;
  }
  else{
    document.body.innerHTML="<h1 style = color:black>Sorry! you lost. " +  "</h1>" ;

  }
   document.body.style.background = "url('./i1.png')";
   document.body.style.backgroundRepeat = "no-repeat";
   document.body.style.backgroundSize = "200vh";
//    document.body.style.fontSize="30px";
document.body.style.textAlign="center";
// document.body.style.paddingTop="50px";
document.body.style.color="black";
document.body.style.fontStyle="cursive";