var CarXPos = 8;
var CarYPos = 40;
var QueArray = new Array();
var rot = 0;
var Xvalue = document.getElementById("xAxisBox");
var Yvalue = document.getElementById("yAxisBox");
var CarDivPos = document.getElementById("mycar");
var carImgPos = document.getElementById("carImg");
function Move()
{
    var QueNo = setInterval(KeepMoving,100);
    QueArray.push(QueNo);
    console.log(QueNo);
}

function Stop()
{
    for(var i=0;i<QueArray.length;i++)
    {
        var QToStop = QueArray[i];
        clearInterval(QToStop);
        console.log(QToStop);
    }
}

function KeepMoving()
{
    
    if(CarXPos < 1050)
    {
        CarXPos = CarXPos+1;
        CarDivPos.style.left = CarXPos + "px";
        Xvalue.innerText = CarXPos;
        if(CarXPos>991)
        {
            rot = rot + 0.2;
            CarDivPos.style.rotate = rot + "deg";
        }
        
    }
    else if(CarXPos<1500 && CarYPos<500)
    {
        CarXPos = CarXPos+1;
        CarYPos = CarYPos+1;
        rot = rot + 1;
        CarDivPos.style.rotate = rot + "deg";
        CarDivPos.style.left = CarXPos + "px";
        CarDivPos.style.top = CarYPos + "px";
        Xvalue.innerText = CarXPos;
        Yvalue.innerText = CarYPos;
        if(CarYPos==490)
        {
            rot = 0;
            carImgPos.src = "YQDj.gif";
            CarDivPos.style.rotate = rot + "deg";
        }
    }
    else
    {
        Stop();
    }
}