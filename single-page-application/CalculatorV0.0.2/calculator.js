window.addEventListener("load", ()=>
{
	let calculator = document.createElement("div");
	calculator.classList.add("calculator");
	
	let display = document.createElement("input");
	display.classList.add("display");
	
	let btn7 = document.createElement("button");
	btn7.innerText = "7";
	btn7.classList.add("button","numberbutton","fontbutton");
	
	let btn8 = document.createElement("button");
	btn8.innerText = "8";
	btn8.classList.add("button","numberbutton","fontbutton");
	
	let btn9 = document.createElement("button");
	btn9.innerText = "9";
	btn9.classList.add("button","numberbutton","fontbutton");
	
	let btnAdd = document.createElement("button");
	btnAdd.innerText = "+";
	btnAdd.classList.add("button","operatorbutton","fontbutton");
	
	let btn4 = document.createElement("button");
	btn4.innerText = "4";
	btn4.classList.add("button","numberbutton","fontbutton");
	
	let btn5 = document.createElement("button");
	btn5.innerText = "5";
	btn5.classList.add("button","numberbutton","fontbutton");
	
	let btn6 = document.createElement("button");
	btn6.innerText = "6";
	btn6.classList.add("button","numberbutton","fontbutton");
	
	let btnSubstract = document.createElement("button");
	btnSubstract.innerText = "-";
	btnSubstract.classList.add("button","operatorbutton","fontbutton");
	
	let btn1 = document.createElement("button");
	btn1.innerText = "1";
	btn1.classList.add("button","numberbutton","fontbutton");
	
	let btn2 = document.createElement("button");
	btn2.innerText = "2";
	btn2.classList.add("button","numberbutton","fontbutton");
	
	let btn3 = document.createElement("button");
	btn3.innerText = "3";
	btn3.classList.add("button","numberbutton","fontbutton");
	
	let btnMultiply = document.createElement("button");
	btnMultiply.innerText = "*";
	btnMultiply.classList.add("button","operatorbutton","fontbutton");
	
	let btn0 = document.createElement("button");
	btn0.innerText = "0";
	btn0.classList.add("button","numberbutton","fontbutton");
	
	let btnDecimal = document.createElement("button");
	btnDecimal.innerText = ".";
	btnDecimal.classList.add("button","operatorbutton","fontbutton");
	
	let btnEqual = document.createElement("button");
	btnEqual.innerText = "=";
	btnEqual.classList.add("button","equalbutton","fontbutton");
	
	let btnDivide = document.createElement("button");
	btnDivide.innerText = "/";
	btnDivide.classList.add("button","operatorbutton","fontbutton");
	
	let btnErase = document.createElement("button");
	btnErase.innerText = "Borrar";
	btnErase.classList.add("button","erasebutton","fontbutton");
	
	let br = document.createElement("br");
	let br1 = document.createElement("br");
	let br2 = document.createElement("br");
	let br3 = document.createElement("br");
	let br4 = document.createElement("br");
	

	document.body.appendChild(calculator);
	calculator.appendChild(display);
	calculator.appendChild(br);
	calculator.appendChild(btn7);
	calculator.appendChild(btn8);
	calculator.appendChild(btn9);
	calculator.appendChild(btnAdd);
	calculator.appendChild(br1);
	calculator.appendChild(btn4);
	calculator.appendChild(btn5);
	calculator.appendChild(btn6);
	calculator.appendChild(btnSubstract);
	calculator.appendChild(br2);
	calculator.appendChild(btn1);
	calculator.appendChild(btn2);
	calculator.appendChild(btn3);
	calculator.appendChild(btnMultiply);
	calculator.appendChild(br3);
	calculator.appendChild(btn0);
	calculator.appendChild(btnDecimal);
	calculator.appendChild(btnEqual);
	calculator.appendChild(btnDivide);
	calculator.appendChild(br4);
	calculator.appendChild(btnErase);
	
  

	
	
	
})
