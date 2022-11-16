import {ModalController} from "./ModalController.js";

class ModalView extends HTMLElement
{
	constructor(ModalModel)
	{
		super();

		//Acquire model reference
		this.model = ModalModel;
		this.controller = new ModalController(this,this.model);

		//Create UI Elements from HTMLDocument
		this.btnShow = document.createElement("button");
		this.btnShow.innerText = "Abrir La Ventanita";
		this.btnShow.classList.add("button");
		
		this.windowDialog = document.createElement("div");
			this.windowDialog.classList.add("window");
			this.windowBorder = document.createElement("div");
			this.windowBorder.classList.add("windowBorder");
				this.modalButtons = document.createElement("div");
				
					this.btnOk = document.createElement("button");
					this.btnCancel = document.createElement("button");
					this.btnOk.innerText = "Aceptar";
					this.btnOk.classList.add("buttonModal");
					this.btnCancel.innerText = "Cerrar";
					this.btnCancel.classList.add("buttonModal");
	}

	connectedCallback()
	{
		
			this.appendChild(this.btnShow);

		//Attach event-handler functions to each element
		this.btnShow.addEventListener('click', (event) => this.controller.btnShowClick(event) );
		this.btnOk.addEventListener('click', (event) => this.controller.btnOkClick(event) );
		this.btnCancel.addEventListener('click', (event) => this.controller.btnCancelClick(event) );
	}
	
	openDialog(){
		
		this.appendChild(this.windowDialog);
			this.windowDialog.appendChild(this.windowBorder);
			this.windowDialog.appendChild(this.modalButtons);
				this.modalButtons.appendChild(this.btnOk);
				this.modalButtons.appendChild(this.btnCancel);
				this.removeChild(this.btnShow);				
		}
		
	btnOkClick(){
		this.appendChild(this.btnShow);
		this.removeChild(this.windowDialog);
		}
	
	btnCancelClick(){
		this.appendChild(this.btnShow);
		this.removeChild(this.windowDialog);
		}
}

export {ModalView};


