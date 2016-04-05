alert('SceneScene3.js loaded');

function SceneScene3() {

};

SceneScene3.prototype.initialize = function () {
	alert("SceneScene3.initialize()");
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
						if(totalInsertados<45){
							alert("Entre aqui");
							$("#SceneScene3 .cuadroDiputado").append('<div class="diputado" idDip="'+votos[i].asiento+'">\
								'+votos[i].diputado+' - '+votos[i].grupo+'</div>');
						}
						/*else if(totalInsertados>45 && totalInsertados<91){
							alert("Entre aqui 2");
							$("#SceneScene3-1 .cuadroDiputado").append('<div class="diputado" idDip="'+votos[i].asiento+'">\
								'+votos[i].diputado+'('+votos[i].grupo+')</div>');
						}else if(totalInsertados>90 && totalInsertados<136){
							alert("Entre aqui 3");
							$("#SceneScene3-2 .cuadroDiputado").append('<div class="diputado" idDip="'+votos[i].asiento+'">\
							'+votos[i].diputado+'('+votos[i].grupo+')</div>');
						}else if(totalInsertados>135 && totalInsertados<181){
							alert("Entre aqui 4");
							$("#SceneScene3-3 .cuadroDiputado").append('<div class="diputado" idDip="'+votos[i].asiento+'">\
							'+votos[i].diputado+'('+votos[i].grupo+')</div>');
						}else if(totalInsertados>180){
							alert("Entre aqui 5");
							$("#SceneScene3-4 .cuadroDiputado").append('<div class="diputado" idDip="'+votos[i].asiento+'">\
									'+votos[i].diputado+'('+votos[i].grupo+')</div>');
						}*/
					}
				}
			},
			error: function(){
				alert('error');
			}
		});

};

SceneScene3.prototype.handleShow = function (data) {
	alert("SceneScene3.handleShow()");
	// this function will be called when the scene manager show this scene
};

SceneScene3.prototype.handleHide = function () {
	alert("SceneScene3.handleHide()");
	// this function will be called when the scene manager hide this scene
};

SceneScene3.prototype.handleFocus = function () {
	alert("SceneScene3.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneScene3.prototype.handleBlur = function () {
	alert("SceneScene3.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

SceneScene3.prototype.handleKeyDown = function (keyCode) {
	alert("SceneScene3.handleKeyDown(" + keyCode + ")");
	// TODO : write an key event handler when this scene get focued
	switch (keyCode) {
		case sf.key.LEFT:
			break;
		case sf.key.RIGHT:
			break;
		case sf.key.UP:
			break;
		case sf.key.DOWN:
			sf.scene.hide('Scene3');
			sf.scene.show('Scene3aF1');
			sf.scene.focus('Scene3aF1');
			break;
		case sf.key.ENTER:
			break;
		case sf.key.RETURN:
			event.preventDefault();
			sf.scene.hide('Scene3');
			sf.scene.show('Scene0');
			sf.scene.focus('Scene0');
			break;
		default:
			alert("handle default key event, key code(" + keyCode + ")");
			break;
	}
};
