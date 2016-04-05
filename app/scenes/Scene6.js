alert('SceneScene6.js loaded');

function SceneScene6() {

};

SceneScene6.prototype.initialize = function () {
	alert("SceneScene6.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called
	var filtro = "No vota";
	$.ajax({
		type: "GET",
		crossDomain: true,
		async: true,
		dataType: "json",
		url: API+"/votaciones",
		success: function(data){
				var votos = data.result[0].xml.resultado.votaciones.votacion;
				// var totalInsertados = 0;
				for (var i = 0; i < votos.length; i++) {
					if(votos[i].voto == filtro){
						//totalInsertados++;
						//if(totalInsertados<45){
							$("#SceneScene6 .cuadroDiputado").append('<div class="diputado" idDip="'+votos[i].asiento+'">\
								'+votos[i].diputado+' - '+votos[i].grupo+'</div>');
						//}
					}
				}
			},
			error: function(){
				alert('error');
			}
		});
};

SceneScene6.prototype.handleShow = function (data) {
	alert("SceneScene6.handleShow()");
	// this function will be called when the scene manager show this scene
};

SceneScene6.prototype.handleHide = function () {
	alert("SceneScene6.handleHide()");
	// this function will be called when the scene manager hide this scene
};

SceneScene6.prototype.handleFocus = function () {
	alert("SceneScene6.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneScene6.prototype.handleBlur = function () {
	alert("SceneScene6.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

SceneScene6.prototype.handleKeyDown = function (keyCode) {
	alert("SceneScene6.handleKeyDown(" + keyCode + ")");
	// TODO : write an key event handler when this scene get focued
	switch (keyCode) {
		case sf.key.LEFT:
			break;
		case sf.key.RIGHT:
			break;
		case sf.key.UP:
			/*var primero = $('diputado:first').attr('idDup');
			var actual = $("visibleOn:first").attr("idDup");
			var newPos = actual - 9;
			if(newPos<0) newPos=0;
			$('diputado').addClass('visibleOff');
			for (var i = newPos; i < newPos-9 || i<; i++) {
				$('diputado[idDup='+i+']').addClass('visibleOn');
			}*/
			break;
		case sf.key.DOWN:
			/*var ultimo = $('diputado:last').attr('idDup');
			var actual = $("visibleOn:first").attr("idDup");
			var newPos = actual + 9;
			if(newPos> data.result[0].xml.resultado.votaciones.votacion.length) newPos= data.result[0].xml.resultado.votaciones.votacion.length;
			$("diputado").css("display", "none");
			for (var i = newPos; i < newPos+9 || i<; i++) {
				$('diputado[idDup='+i+']').addClass('visibleOn');
			}*/
			break;
		case sf.key.ENTER:
			break;
		case sf.key.RETURN:
			event.preventDefault();
			sf.scene.hide('Scene6');
			sf.scene.show('Scene0');
			sf.scene.focus('Scene0');
			break;
		default:
			alert("handle default key event, key code(" + keyCode + ")");
			break;
	}
};
