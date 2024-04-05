function Add()
{
    
    var num1Location = document.getElementById("number1");
    var num2Location = document.getElementById("number2");
    var num1ErrLocation = document.getElementById("number1Error");
    var num2ErrLocation = document.getElementById("number2Error");
    var resultLoc = document.getElementById("resultId");

    var IsNum1Empty = IsEmpty(num1Location,num1ErrLocation,"Number 1 is required");
    if(IsNum1Empty == false)
    {
        var IsNum1Number = IsNumber(num1Location,num1ErrLocation,"Value should be number");
    }

    var IsNum2Empty = IsEmpty(num2Location,num2ErrLocation,"Number 2 is required");
    if(IsNum2Empty == false)
    {    
        var IsNum2Number = IsNumber(num2Location,num2ErrLocation,"Value should be number");
    }

    if(IsNum1Number == true && IsNum2Number == true)
    {
        var Num1Data = num1Location.value;
        var Num2Data = num2Location.value;
        var result = parseFloat(Num1Data) + parseFloat(Num2Data);
        resultLoc.innerText = result;
    }
    else
    {
        resultLoc.innerText = "";
    }
}

function Substrct()
{
    
    var num1Location = document.getElementById("number1");
    var num2Location = document.getElementById("number2");
    var num1ErrLocation = document.getElementById("number1Error");
    var num2ErrLocation = document.getElementById("number2Error");
    var resultLoc = document.getElementById("resultId");

    var IsNum1Empty = IsEmpty(num1Location,num1ErrLocation,"Number 1 is required");
    if(IsNum1Empty == false)
    {
        var IsNum1Number = IsNumber(num1Location,num1ErrLocation,"Value should be number");
    }

    var IsNum2Empty = IsEmpty(num2Location,num2ErrLocation,"Number 2 is required");
    if(IsNum2Empty == false)
    {    
        var IsNum2Number = IsNumber(num2Location,num2ErrLocation,"Value should be number");
    }

    if(IsNum1Number == true && IsNum2Number == true)
    {
        var Num1Data = num1Location.value;
        var Num2Data = num2Location.value;
        var result = parseFloat(Num1Data) - parseFloat(Num2Data);
        resultLoc.innerText = result;
    }
    else
    {
        resultLoc.innerText = "";
    }
}

function Multiply()
{
    
    var num1Location = document.getElementById("number1");
    var num2Location = document.getElementById("number2");
    var num1ErrLocation = document.getElementById("number1Error");
    var num2ErrLocation = document.getElementById("number2Error");
    var resultLoc = document.getElementById("resultId");

    var IsNum1Empty = IsEmpty(num1Location,num1ErrLocation,"Number 1 is required");
    if(IsNum1Empty == false)
    {
        var IsNum1Number = IsNumber(num1Location,num1ErrLocation,"Value should be number");
    }

    var IsNum2Empty = IsEmpty(num2Location,num2ErrLocation,"Number 2 is required");
    if(IsNum2Empty == false)
    {    
        var IsNum2Number = IsNumber(num2Location,num2ErrLocation,"Value should be number");
    }

    if(IsNum1Number == true && IsNum2Number == true)
    {
        var Num1Data = num1Location.value;
        var Num2Data = num2Location.value;
        var result = parseFloat(Num1Data) * parseFloat(Num2Data);
        resultLoc.innerText = result;
    }
    else
    {
        resultLoc.innerText = "";
    }
}

function Divide()
{
    var num1Location = document.getElementById("number1");
    var num2Location = document.getElementById("number2");
    var num1ErrLocation = document.getElementById("number1Error");
    var num2ErrLocation = document.getElementById("number2Error");
    var resultLoc = document.getElementById("resultId");

    var IsNum1Empty = IsEmpty(num1Location,num1ErrLocation,"Number 1 is required");
    if(IsNum1Empty == false)
    {
        var IsNum1Number = IsNumber(num1Location,num1ErrLocation,"Value should be number");
    }

    var IsNum2Empty = IsEmpty(num2Location,num2ErrLocation,"Number 2 is required");
    if(IsNum2Empty == false)
    {    
        var IsNum2Number = IsNumber(num2Location,num2ErrLocation,"Value should be number");
    }

    if(IsNum1Number == true && IsNum2Number == true)
    {
        var Num1Data = num1Location.value;
        var Num2Data = num2Location.value;
        if(parseFloat(Num2Data) == 0)
        {
            var rsltErrLoc = document.getElementById("resultErrId");
            rsltErrLoc.innerText = "Division by zero is undefined";
            resultLoc.innerText = "";
        }
        else
        {
            
            var result = parseFloat(Num1Data) / parseFloat(Num2Data);
            resultLoc.innerText = result;
        }
        
    }
    else
    {
        resultLoc.innerText = "";
    }
    
}

function IsEmpty(numLoc,numErr,errMsg)
{
    var numValue = numLoc.value;
    var isBoxEmpty = true;
    if(numValue == "")
    {
        numErr.innerText = errMsg;
        isBoxEmpty=true;
    }
    else
    {
        numErr.innerText = "";
        isBoxEmpty = false;
    }

    return isBoxEmpty;
}   

function IsNumber(numLoc,numErr,errMsg)
{
    var NumValue = numLoc.value;
    var IsItNum = false;
    if(isNaN(NumValue))
    {
        numErr.innerText = errMsg;
        IsItNum = false;
    }
    else
    {
        numErr.innerText = "";
        IsItNum = true;
    }

    return IsItNum;
}