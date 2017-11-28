var button = $("button.enviar");

button.on('click', function(e) {
	e.preventDefault();
	
	var name = $("#nombre").val();
	var lastname = $("#apellido").val();
	var final = $("#final");

	var resultado = final.val(name + ' ' + lastname);

});

var fin = $("input");

fin.on('keyup', function () {
	var name = $("#nombre").val();
	var lastname = $("#apellido").val();
	var final = $("#final");

	var resultado = final.val(name + ' ' + lastname);
})

