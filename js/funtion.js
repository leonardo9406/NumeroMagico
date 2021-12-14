	var aleatorio = parseInt( Math.random()*1000+1 ); 
	var contador = 1;
	
	function generar(){
		
		var entrada = document.getElementById("dato").value;
		var cuenta = document.getElementById('count');
		cuenta.innerText = contador;
	
		if(entrada == aleatorio){  
			swal("Felicitaciones","Has acertado, el número es " + aleatorio ,"success");
			contador=0;
		}
		else if(entrada>aleatorio){                 
			swal("","El número ingresado es mayor","info");			
		}
		else if(entrada<aleatorio){                 
			swal("","El número ingresado es menor","info");			
		}
	contador=contador+1;
	
	if (contador == 11){
		swal("Lo sentimos!", "Has agotado todos los intentos!", "error");
		contador = 1;
		setTimeout(recargar , 3000);
		
	}
}

function recargar(){
	location.reload()
}

