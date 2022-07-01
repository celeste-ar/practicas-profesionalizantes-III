import {CalculatorModel} from "./CalculatorModel.js";
import {CalculatorView} from "./CalculatorView.js";

function startGUIApplication()
{
	let myCalculatorModel = new CalculatorModel();
	let myCalculator = new CalculatorView(myCalculatorModel);
	document.body.appendChild(myCalculator);
}

customElements.define('x-calculator-view', CalculatorView);

window.addEventListener('load',startGUIApplication );



