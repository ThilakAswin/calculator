var numberOfButtons = document.querySelectorAll(".button").length;

for(var i = 0;i<numberOfButtons;i++)
{
    document.querySelectorAll(".button")[i].addEventListener("click", function()
    {
        var buttonPressed = this.innerHTML;
        buttonAction(buttonPressed);

    });

}

function buttonAction(key)
{
    var expression = "";

  switch(key)
  {
    case "1":
        var innerExp = document.getElementById("display").innerHTML;
        expression = innerExp.concat("1");
        document.querySelector("#display").innerHTML = expression;
        // alert(expression);
        break;

    case "+":
        var innerExp = document.getElementById("display").innerHTML;
        expression = innerExp.concat("+");
        document.querySelector("#display").innerHTML = expression;
        // alert(expression);
        break;

    
    case "=":
        expression = document.getElementById("display").innerHTML;
        const arr = expression.split("+");
        var a = parseInt(arr[0]);
        var b = parseInt(arr[1]);
        // alert(a);
        // alert(b);
        calulate(a,b);

       
  }


}

function calulate(a,b)
{
    var result = (a + b);
    document.querySelector("#display").innerHTML =result ;
}


// document.querySelector("body").style.backgroundColor = " blue ";