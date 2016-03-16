alert('Sceneabstencion.js loaded');
var diputados3 = [];
var page3 = 0;

function Sceneabstencion() {

};

Sceneabstencion.prototype.initialize = function () {
	alert("Sceneabstencion.initialize()");
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
				alert('success');
				$("#titulo3").html("Abstención");
				for(var i=0; i<data.result[0].xml.resultado.votaciones.votacion.length;i++){
					if(data.result[0].xml.resultado.votaciones.votacion[i].voto=="Abstención"){
						diputados3.push(data.result[0].xml.resultado.votaciones.votacion[i].diputado);
					}
				}
				max=data.result[0].xml.resultado.totales.abstenciones;
				page3=Math.ceil(max/10);
				$('#abstencion').sfList('clear');
				$('#abstencion').sfList({
				    data : diputados3
				});
				$('#abstencion').sfList('focus');
				$('#scrollbar3').sfPageIndicator({index: 0, count: page3});
			},
			error: function(){
				alert('error');
			}
		});
};

Sceneabstencion.prototype.handleShow = function (data) {
	alert("Sceneabstencion.handleShow()");
	// this function will be called when the scene manager show this scene
};

Sceneabstencion.prototype.handleHide = function () {
	alert("Sceneabstencion.handleHide()");
	// this function will be called when the scene manager hide this scene
};

Sceneabstencion.prototype.handleFocus = function () {
	alert("Sceneabstencion.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

Sceneabstencion.prototype.handleBlur = function () {
	alert("Sceneabstencion.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

Sceneabstencion.prototype.handleKeyDown = function (keyCode) {
	alert("Sceneabstencion.handleKeyDown(" + keyCode + ")");
	// TODO : write an key event handler when this scene get focued
	switch (keyCode) {
		case sf.key.LEFT:
			break;
		case sf.key.RIGHT:
			break;
		case sf.key.UP:
            var idx = $('#abstencion').sfList('getIndex');
            alert( "idx = " + idx);
            if (idx>0){
            if((idx)%10 == 0)$('#scrollbar3').sfPageIndicator('prev');
            $('#abstencion').sfList('prev');
            }
			break;
		case sf.key.DOWN:
            var idx = $('#abstencion').sfList('getIndex');
            alert( "idx = " + idx);
            if(idx<max-1){
            if((idx+1)%10 == 0)$('#scrollbar3').sfPageIndicator('next');
            $('#abstencion').sfList('next');
            }
			break;
		case sf.key.ENTER:
			break;
		case sf.key.RETURN:
			event.preventDefault();
			sf.scene.hide('abstencion');
			sf.scene.show('Scene2');
			sf.scene.focus('Scene2');
			break;
		default:
			alert("handle default key event, key code(" + keyCode + ")");
			break;
	}
};
