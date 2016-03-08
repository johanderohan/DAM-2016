alert('SceneScene3AF3.js loaded');

function SceneScene3AF3() {

};

SceneScene3AF3.prototype.initialize = function () {
	alert("SceneScene3AF3.initialize()");
	
	$.ajax({
		type: "GET",
		crossDomain: true,
		async: true,
		dataType: "json",
		url: API+"/votaciones",
		success: function(data){
				var elementos_columna = 142;	
				for(var i = 247 ;i < data.result[0].xml.resultado.votaciones.votacion.length;i++){
					if (data.result[0].xml.resultado.votaciones.votacion[i].voto=="Sí"){
						elementos_columna++;
						if (elementos_columna > 142 && elementos_columna < 166) {
							if (elementos_columna == 143) $("#SceneScene3AF3").append("<div class='col_10'>");
							$(".col_10").append("<h5>"+data.result[0].xml.resultado.votaciones.votacion[i].diputado+"</h5>");
							if (elementos_columna == 166) $("#SceneScene3AF3").append("</div>");
						}else if (elementos_columna > 166 && elementos_columna < 189) {
							if (elementos_columna == 167) $("#SceneScene3AF3").append("<div class='col_11'>");
							$(".col_11").append("<h5>"+data.result[0].xml.resultado.votaciones.votacion[i].diputado+"</h5>");
							if (elementos_columna == 189) $("#SceneScene3AF3").append("</div>");
							alert(elementos_columna);
						}
					}
				
				}
			
			},
			error: function(){
				alert('error');
			}
		});

};

SceneScene3AF3.prototype.handleShow = function (data) {
	alert("SceneScene3AF3.handleShow()");
	// this function will be called when the scene manager show this scene
};

SceneScene3AF3.prototype.handleHide = function () {
	alert("SceneScene3AF3.handleHide()");
	// this function will be called when the scene manager hide this scene
};

SceneScene3AF3.prototype.handleFocus = function () {
	alert("SceneScene3AF3.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneScene3AF3.prototype.handleBlur = function () {
	alert("SceneScene3AF3.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

SceneScene3AF3.prototype.handleKeyDown = function (keyCode) {
	alert("SceneScene3AF3.handleKeyDown(" + keyCode + ")");
	// TODO : write an key event handler when this scene get focued
	switch (keyCode) {
		case sf.key.LEFT:
			sf.scene.hide('Scene3AF3');
			sf.scene.show('Scene3AF2');
			sf.scene.focus('Scene3AF2');
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
			sf.scene.hide('Scene3AF3');
			sf.scene.show('Scene2');
			sf.scene.focus('Scene2');
			break;		
		default:
			alert("handle default key event, key code(" + keyCode + ")");
			break;
	}
};
