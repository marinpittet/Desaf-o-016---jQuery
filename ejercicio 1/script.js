var button = $("button.enviar")

button.on('click', function(e) {
	e.preventDefault()
	var color = $("#col").val();
	console.log(color)
	$('body').css('background-color', color);
});

