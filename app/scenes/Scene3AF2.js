alert('SceneScene3AF2.js loaded');

function SceneScene3AF2() {

};

SceneScene3AF2.prototype.initialize = function () {
	alert("SceneScene3AF2.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called
	
	$.ajax({
		type: "GET",
		crossDomain: true,
		async: true,
		dataType: "json",
		url: API+"/votaciones",
		success: function(data){
				var elementos_columna = 70;	
				for(var i = 176 ;i < data.result[0].xml.resultado.votaciones.votacion.length ;i++){
					if (data.result[0].xml.resultado.votaciones.votacion[i].voto=="Sí"){
						elementos_columna++;
						if (elementos_columna > 70 && elementos_columna < 94 ) {
							if (elementos_columna == 71) $("#SceneScene3AF2").append("<div class='col_7'>");
							$(".col_7").append("<h5>"+data.result[0].xml.resultado.votaciones.votacion[i].diputado+"</h5>");
							if (elementos_columna == 94) $("#SceneScene3AF2").append("</div>");
						}else if (elementos_columna > 94 && elementos_columna < 118) {
							if (elementos_columna == 95) $("#SceneScene3AF2").append("<div class='col_8'>");
							$(".col_8").append("<h5>"+data.result[0].xml.resultado.votaciones.votacion[i].diputado+"</h5>");
							if (elementos_columna == 118) $("#SceneScene3AF2").append("</div>");
						}else if (elementos_columna > 118 && elementos_columna < 142) {
							if (elementos_columna == 119) $("#SceneScene3AF2").append("<div class='col_9'>");
							$(".col_9").append("<h5>"+data.result[0].xml.resultado.votaciones.votacion[i].diputado+"</h5>");
							if (elementos_columna == 142) {
								$("#SceneScene3AF2").append("</div>");
							}
							alert(i);
						}
					}
				
				}
				elementos_columna = 0;
			
			},
			error: function(){
				alert('error');
			}
		});

};

SceneScene3AF2.prototype.handleShow = function (data) {
	alert("SceneScene3AF2.handleShow()");
	// this function will be called when the scene manager show this scene
};

SceneScene3AF2.prototype.handleHide = function () {
	alert("SceneScene3AF2.handleHide()");
	// this function will be called when the scene manager hide this scene
};

SceneScene3AF2.prototype.handleFocus = function () {
	alert("SceneScene3AF2.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneScene3AF2.prototype.handleBlur = function () {
	alert("SceneScene3AF2.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

SceneScene3AF2.prototype.handleKeyDown = function (keyCode) {
	alert("SceneScene3AF2.handleKeyDown(" + keyCode + ")");
	// TODO : write an key event handler when this scene get focued
	switch (keyCode) {
		case sf.key.LEFT:
			sf.scene.hide('Scene3AF2');
			sf.scene.show('Scene3AF');
			sf.scene.focus('Scene3AF');
			break;
		case sf.key.RIGHT:
			sf.scene.hide('Scene3AF2');
			sf.scene.show('Scene3AF3');
			sf.scene.focus('Scene3AF3');
			break;
		case sf.key.UP:
			break;
		case sf.key.DOWN:
			break;
		case sf.key.ENTER:
			break;
		case sf.key.RETURN:
			event.preventDefault();
			sf.scene.hide('Scene3AF2');
			sf.scene.show('Scene2');
			sf.scene.focus('Scene2');
			break;		
		default:
			alert("handle default key event, key code(" + keyCode + ")");
			break;
	}
};
