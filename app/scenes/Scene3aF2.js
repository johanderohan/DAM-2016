alert('SceneScene3aF2.js loaded');

function SceneScene3aF2() {

};

SceneScene3aF2.prototype.initialize = function () {
	alert("SceneScene3aF2.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called
	var filtro = "Sí";
	$.ajax({
		type: "GET",
		crossDomain: true,
		async: true,
		dataType: "json",
		url: API+"/votaciones",
		success: function(data){
				alert('success' + data.result[0].xml.resultado.votaciones.votacion.length);
				alert('filtro' +filtro);
				var votos = data.result[0].xml.resultado.votaciones.votacion;
				alert('tamaño' + votos.length);
				var totalInsertados = 0;
				for (var i = 0; i < votos.length; i++) {
					if(votos[i].voto == filtro){
						alert("totalInsertados" +totalInsertados);
						totalInsertados++;
						if(totalInsertados>89 && totalInsertados<135){
							alert("Entre aqui 3");
							$("#SceneScene3aF2 .cuadroDiputado").append('<div class="diputado" idDip="'+votos[i].asiento+'">\
							'+votos[i].diputado+'('+votos[i].grupo+')</div>');
						}
					}
				}
			},
			error: function(){
				alert('error');
			}
		});
};

SceneScene3aF2.prototype.handleShow = function (data) {
	alert("SceneScene3aF2.handleShow()");
	// this function will be called when the scene manager show this scene
};

SceneScene3aF2.prototype.handleHide = function () {
	alert("SceneScene3aF2.handleHide()");
	// this function will be called when the scene manager hide this scene
};

SceneScene3aF2.prototype.handleFocus = function () {
	alert("SceneScene3aF2.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneScene3aF2.prototype.handleBlur = function () {
	alert("SceneScene3aF2.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

SceneScene3aF2.prototype.handleKeyDown = function (keyCode) {
	alert("SceneScene3aF2.handleKeyDown(" + keyCode + ")");
	// TODO : write an key event handler when this scene get focued
	switch (keyCode) {
		case sf.key.LEFT:
			break;
		case sf.key.RIGHT:
			break;
		case sf.key.UP:
			sf.scene.hide('Scene3aF2');
			sf.scene.show('Scene3aF1');
			sf.scene.focus('Scene3aF1');
			break;
		case sf.key.DOWN:
			sf.scene.hide('Scene3aF2');
			sf.scene.show('Scene3aF3');
			sf.scene.focus('Scene3aF3');
			break;
		case sf.key.ENTER:
			break;
		case sf.key.RETURN:
			event.preventDefault();
			sf.scene.hide('Scene3aF2');
			sf.scene.show('Scene0');
			sf.scene.focus('Scene0');
			break;
		default:
			alert("handle default key event, key code(" + keyCode + ")");
			break;
	}
};
