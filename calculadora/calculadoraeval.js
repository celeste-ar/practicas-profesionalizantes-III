let result;
let displayOperator = 0;

function clickBtn9()
{	
	let btn9 = document.getElementById("btn9");
	display.value +="9"; 
}

function clickBtn8()
{
	let btn8 = document.getElementById("btn8");
	display.value +="8"
}

function clickBtn7()
{
	let btn7 = document.getElementById("btn7");
	display.value +="7"
}

function clickBtn6()
{
	let btn6 = document.getElementById("btn6");
	display.value +="6"
}

function clickBtn5()
{
	let btn5 = document.getElementById("btn5");
	display.value +="5"
}

function clickBtn4()
{
	let btn4 = document.getElementById("btn4");
	display.value +="4"
}

function clickBtn3()
{
	let btn3 = document.getElementById("btn3");
	display.value +="3"
}

function clickBtn2()
{
	let btn2 = document.getElementById("btn2");
	display.value +="2"
}

function clickBtn1()
{
	let btn1 = document.getElementById("btn1");
	display.value +="1"
}

function clickBtn0()
{
	let btn0 = document.getElementById("btn0");
	display.value +="0"	
}

function clickBtnAdd()
{
	let btnAdd = document.getElementById("btnAdd");
	if(displayOperator == 0)
	{
		display.value += "+";
	}
	displayOperator = 1;
}	

function clickBtnSubstract()
{
	let btnSubs = document.getElementById("btnASubs");
	if(displayOperator == 0)
	{
		display.value += "-";
	}
	displayOperator = 1;
}	

function clickBtnMultiply()
{
	let btnMult = document.getElementById("btnMult");
	if(displayOperator == 0)
	{
		display.value += "*";
	}
	displayOperator = 1;
}	

function clickBtnDivide()
{
	let btnDiv = document.getElementById("btnDiv");
	if(displayOperator == 0)
	{
		display.value += "/";
	}
	displayOperator = 1;
}	

function clickBtnDecimalPoint()
{
	let btnDecimalPoint = document.getElementById("btnDecimalPoint");
	display.value += ".";
}	

function clickBtnEqual()
{
	result = display.value;
	display.value = eval(result); 
	displayOperator = 0;
}

function clickBtnErase()
{
	display.value = "";
	result = 0;
displayOperator = 0;
}

function mainfx()
{
	btn9.addEventListener("click", clickBtn9);
	btn8.addEventListener("click", clickBtn8);
	btn7.addEventListener("click", clickBtn7);
	btn6.addEventListener("click", clickBtn6);
	btn5.addEventListener("click", clickBtn5);
	btn4.addEventListener("click", clickBtn4);
	btn3.addEventListener("click", clickBtn3);
	btn2.addEventListener("click", clickBtn2);
	btn1.addEventListener("click", clickBtn1);
	btn0.addEventListener("click", clickBtn0);
	btnAdd.addEventListener("click", clickBtnAdd);
	btnSubs.addEventListener("click", clickBtnSubstract);
	btnMult.addEventListener("click", clickBtnMultiply);
	btnDiv.addEventListener("click", clickBtnDivide);
	btnDecimalPoint.addEventListener("click", clickBtnDecimalPoint);
	btnEqual.addEventListener("click", clickBtnEqual);
	btnErase.addEventListener("click", clickBtnErase);

}
window.addEventListener("load", mainfx );
