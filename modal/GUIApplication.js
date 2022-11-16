import {ModalModel} from "./ModalModel.js";
import {ModalView} from "./ModalView.js";

function startGUIApplication()
{
	let WindowModel = new ModalModel();
	let window = new ModalView(WindowModel);
	document.body.appendChild(window);
}

customElements.define('x-model-view', ModalView);

window.addEventListener('load',startGUIApplication );



