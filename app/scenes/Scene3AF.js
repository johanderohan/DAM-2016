alert('SceneScene3AF.js loaded');

function SceneScene3AF() {

};

SceneScene3AF.prototype.initialize = function () {
	$.ajax({
		type: "GET",
		crossDomain: true,
		async: true,
		dataType: "json",
		url: API+"/votaciones",
		success: function(data){
				alert('success--');	
				//alert(data.result[0].xml.resultado.votaciones.votacion.length);	
				for(var i = 0 ;i < data.result[0].xml.resultado.votaciones.votacion.length;i++){
					if (data.result[0].xml.resultado.votaciones.votacion[i].voto=="Sí"){
						alert(data.result[0].xml.resultado.votaciones.votacion[i].diputado);
						$("#SceneScene3AF").append("<h5>"+data.result[0].xml.resultado.votaciones.votacion[i].diputado+"</h5>");
					}
				
				}
			
			},
			error: function(){
				alert('error');
			}
		});


};


SceneScene3AF.prototype.handleShow = function (data) {
	alert("SceneScene3AF.handleShow()");
	// this function will be called when the scene manager show this scene
};

SceneScene3AF.prototype.handleHide = function () {
	alert("SceneScene3AF.handleHide()");
	// this function will be called when the scene manager hide this scene
};

SceneScene3AF.prototype.handleFocus = function () {
	alert("SceneScene3AF.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneScene3AF.prototype.handleBlur = function () {
	alert("SceneScene3AF.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

SceneScene3AF.prototype.handleKeyDown = function (keyCode) {
	alert("SceneScene3AF.handleKeyDown(" + keyCode + ")");
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
			sf.scene.hide('Scene3AF');
			sf.scene.show('Scene2');
			sf.scene.focus('Scene2');
			break;	
		default:
			alert("handle default key event, key code(" + keyCode + ")");
			break;
	}
};
