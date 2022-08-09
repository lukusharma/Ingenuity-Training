var today = new Date();
const weekday = [   "Sunday","Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"]
var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
document.write("Today's Date: "+date+"<br>")
var day = weekday[today.getDay()];
document.write("Today's Day: "+day)
document.body.style.backgroundColor="gray";
document.body.style.fontSize="50px";
document.body.style.textAlign="center";
document.body.style.paddingTop="50px";
document.body.style.color="cyan";
document.body.style.fontStyle="cursive";
