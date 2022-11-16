class Controller
{

	
	constructor(View, Model)
	{
		this.view = View;
		this.model = Model
	}

	// Script to open and close sidebar
	w3_open() 
	{
		document.getElementById("mySidebar").style.display = "block";
		document.getElementById("myOverlay").style.display = "block";
	}
 
	w3_close() 
	{
		this.view.style.display = "none";
		this.view.style.display = "none";
	}


	/*btn0Click()
	{   	
		this.view.display.value += '0';
	}*/

}


export {Controller};




/*class listadesplegable extends htmlelement
 * {
 * 	construct(){div = doc.createElement('div')}
 * 
 * }
 * 
 * addItem(nombre){
 * 	buton = document.createElement('button')
 * button.innerText = nombre
 * div.appendChild(button)
 * }
*/
