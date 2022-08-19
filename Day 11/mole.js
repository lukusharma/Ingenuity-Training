var mainmole = document.getElementById("mole");
var mainmnud = document.getElementById("mud");
var startbtn = document.getElementById("start");
var mud = document.getElementsByClassName("dirt");
var mole = document.getElementsByClassName("mole"); 
var point = document.querySelectorAll("span");

var mole1 = document.getElementById("mole1");
var mole2 = document.getElementById("mole2");
var mole3 = document.getElementById("mole3");
var mole4 = document.getElementById("mole4");
var mole5 = document.getElementById("mole5");
var mole6 = document.getElementById("mole6");

var count = 0;

function start()
{
    mainmole.style.visibility = "hidden";
    mainmnud.style.visibility = "hidden";
    startbtn.style.visibility = "hidden";
    
    for(var i = 0; i < 5; i++)
    {
        mud[i].style.visibility="visible";
        // mole[i].style.visibility="visible";
        
    }
    for(var i = 0; i < 2; i++)
    {
        point[i].style.visibility="visible";
    }
    setInterval(rand,1600);

};  

function counter()
{
    count++;
    point[1].textContent = count;
    
}

function rand()
{
    
    var random = Math.floor(Math.random()*6);
    var y = random;
    mole[y].style.visibility="visible";
    mole[y].onclick=counter;
    
    function hide()
    {
        mole[y].style.visibility="hidden";
    }
    setTimeout(hide,1500);

}
