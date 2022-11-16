import {Model} from "./model.js";
import {View} from "./view.js";

function startGUIApplication()
{
	let myModel = new Model();
	let myPageView = new View(myModel);
	document.body.appendChild(myPageView);
}

customElements.define('x-page-view', View);

window.addEventListener('load',startGUIApplication );



