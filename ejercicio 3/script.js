var button = $("button.enviar")

button.on('click', function(e) {
	e.preventDefault();
	var value = $("#valor").val();
	//var ivalue = parseInt(value);
	var final = $("#result");
	var resultado = (value*1.19);
	final.val(resultado);
});