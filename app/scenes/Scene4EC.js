alert('SceneScene4EC.js loaded');

function SceneScene4EC() {

};

SceneScene4EC.prototype.initialize = function () {
	alert("SceneScene4EC.initialize()");
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
				var elementos_columna = 0;	
				for(var i = 0 ;i < data.result[0].xml.resultado.votaciones.votacion.length;i++){
					if (data.result[0].xml.resultado.votaciones.votacion[i].voto=="No"){
						elementos_columna++;
						if (elementos_columna <= 24) {
							if (elementos_columna == 1) $("#SceneScene4EC").append("<div class='col_1'>");
							$(".col_1").append("<h5>"+data.result[0].xml.resultado.votaciones.votacion[i].diputado+"</h5>");
							if (elementos_columna == 24) $("#SceneScene4EC").append("</div>");
						}else if (elementos_columna > 25 && elementos_columna < 50) {
							if (elementos_columna == 26) $("#SceneScene4EC").append("<div class='col_2'>");
							$(".col_2").append("<h5>"+data.result[0].xml.resultado.votaciones.votacion[i].diputado+"</h5>");
							if (elementos_columna == 50) $("#SceneScene4EC").append("</div>");
						}else if (elementos_columna > 50 && elementos_columna <= 75) {
							if (elementos_columna == 51) $("#SceneScene4EC").append("<div class='col_3'>");
							$(".col_3").append("<h5>"+data.result[0].xml.resultado.votaciones.votacion[i].diputado+"</h5>");
							if (elementos_columna == 75) {
								$("#SceneScene4EC").append("</div>");
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

SceneScene4EC.prototype.handleShow = function (data) {
	alert("SceneScene4EC.handleShow()");
	// this function will be called when the scene manager show this scene
};

SceneScene4EC.prototype.handleHide = function () {
	alert("SceneScene4EC.handleHide()");
	// this function will be called when the scene manager hide this scene
};

SceneScene4EC.prototype.handleFocus = function () {
	alert("SceneScene4EC.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneScene4EC.prototype.handleBlur = function () {
	alert("SceneScene4EC.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

SceneScene4EC.prototype.handleKeyDown = function (keyCode) {
	alert("SceneScene4EC.handleKeyDown(" + keyCode + ")");
	// TODO : write an key event handler when this scene get focued
	switch (keyCode) {
		case sf.key.LEFT:
			break;
		case sf.key.RIGHT:
			break;
		case sf.key.UP:
			break;
		case sf.key.DOWN:
			break;
		case sf.key.ENTER:
			break;
		case sf.key.RETURN:
			event.preventDefault();
			sf.scene.hide('Scene4EC');
			sf.scene.show('Scene2');
			sf.scene.focus('Scene2');
			break;		
		default:
			alert("handle default key event, key code(" + keyCode + ")");
			break;
	}
};
