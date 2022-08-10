var sum=0;

alert("This will Print the total Sum");
alert("Enter any Negative number to Stop");
while(true){
    var a=Number(prompt("Enter the Number"));
    if(a<0){
        break;
    }
    sum+=a;
}
document.write("The Total Sum is: "+sum);

   document.body.style.fontSize="30px";
document.body.style.textAlign="center";
document.body.style.paddingTop="100px";
document.body.style.color="white";
document.body.style.fontStyle="cursive";
document.body.style.backgroundColor="black";

