alert('SceneScene5.js loaded');

function SceneScene5() {

};

SceneScene5.prototype.initialize = function () {
	alert("SceneScene5.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called
	// A favor
		$.ajax({
		type: "GET",
		crossDomain: true,
		async: true,
		dataType: "json",
		url: API+"/votaciones",
		success: function(data){
				alert('success');
				var n = 0;
				for (var i = 0; i < data.result[0].xml.resultado.votaciones.length || n < 4; i++) {
					if (data.result[0].xml.resultado.votaciones.votacion[i].voto=="Abstención"){
						//$(".listaNo").append('<li'>+data.result[0].xml.votaciones.votacion[i].diputado+'</li>');
				          $("#header ul").append('<li>'+data.result[0].xml.resultado.votaciones.votacion[i].diputado+'</li>');
				          n+1;
					}
				}
				
				
			
			
			
			},
			error: function(){
				alert('error');
			}
		});
	
};

SceneScene5.prototype.handleShow = function (data) {
	alert("SceneScene5.handleShow()");
	// this function will be called when the scene manager show this scene
};

SceneScene5.prototype.handleHide = function () {
	alert("SceneScene5.handleHide()");
	// this function will be called when the scene manager hide this scene
};

SceneScene5.prototype.handleFocus = function () {
	alert("SceneScene5.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneScene5.prototype.handleBlur = function () {
	alert("SceneScene5.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

SceneScene5.prototype.handleKeyDown = function (keyCode) {
	alert("SceneScene5.handleKeyDown(" + keyCode + ")");
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
			event.preventDefault();
			sf.scene.hide('Scene5');
			sf.scene.show('Scene2');
			sf.scene.focus('Scene2');
			break;
		case sf.key.TOOLS:
			break;
		case sf.key.RETURN:
			event.preventDefault();
			sf.scene.hide('Scene5');
			sf.scene.show('Scene2');
			sf.scene.focus('Scene2');
			break;
		default:
			alert("handle default key event, key code(" + keyCode + ")");
			break;
	}
};
