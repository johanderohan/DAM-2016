alert('SceneScene3.js loaded');
var diputados = [];
var page1 = 0;

function SceneScene3() {

};

SceneScene3.prototype.initialize = function () {
	alert("SceneScene3.initialize()");
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
				$("#titulo1").html("A favor");
				for(var i=0; i<data.result[0].xml.resultado.votaciones.votacion.length;i++){
					if(data.result[0].xml.resultado.votaciones.votacion[i].voto=="Sí"){
						diputados.push(data.result[0].xml.resultado.votaciones.votacion[i].diputado);
					}
				}
				max=data.result[0].xml.resultado.totales.afavor;
				page1=Math.ceil(max/10);
				$('#afavor').sfList('clear');
				$('#afavor').sfList({
				    data : diputados
				});
				$('#afavor').sfList('focus');
				$('#scrollbar1').sfPageIndicator({index: 0, count: page1});
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
        var idx = $('#afavor').sfList('getIndex');
        alert( "idx = " + idx);
        if (idx>0){
        if((idx)%10 == 0)$('#scrollbar1').sfPageIndicator('prev');
        $('#afavor').sfList('prev');
        }
		break;
	case sf.key.DOWN:
        var idx = $('#afavor').sfList('getIndex');
        alert( "idx = " + idx);
        if(idx<max-1){
        if((idx+1)%10 == 0)$('#scrollbar1').sfPageIndicator('next');
        $('#afavor').sfList('next');
        }
		break;
	case sf.key.ENTER:
		break;
	case sf.key.RETURN:
		event.preventDefault();
		sf.scene.hide('Scene3');
		sf.scene.show('Scene2');
		sf.scene.focus('Scene2');
		break;
	case sf.key.TOOLS:
		break;
	default:
		alert("handle default key event, key code(" + keyCode + ")");
		break;
	}
};
