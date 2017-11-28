var button = $("button.enviar")

button.on('click', function(e) {
	e.preventDefault()
	var altura = $("#alt").val();
	var peso = $("#pes").val();
	var alt2 = Math.pow(altura, 2);
	console.log(altura, peso);
	var imc = (peso/alt2);
	var result = $('#result');
	//console.log(imc)
	//$('body').css('background-color', color);
	result.text((imc).toFixed(2));

		if ( imc<24.99 && imc>18.50 ) {
			result.css("color", "green");
		}else{
			result.css("color", "red");
		}
});

