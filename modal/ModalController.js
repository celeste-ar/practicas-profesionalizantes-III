class ModalController
{

	
	constructor(ModalView, ModalModel)
	{
		this.view = ModalView;
		this.model = ModalModel;
	}

	btnShowClick()
	{   	
		this.view.openDialog();
	}

	btnOkClick()
	{
		this.view.btnOkClick();
	}
	
	btnCancelClick()
	{
		this.view.btnCancelClick();
	}
}


export {ModalController};
