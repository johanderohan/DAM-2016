alert('Sceneencontra.js loaded');
var diputados2 = [];
var page2 = 0;

function Sceneencontra() {

};

Sceneencontra.prototype.initialize = function () {
	alert("Sceneencontra.initialize()");
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
				$("#titulo2").html("En contra");
				for(var i=0; i<data.result[0].xml.resultado.votaciones.votacion.length;i++){
					if(data.result[0].xml.resultado.votaciones.votacion[i].voto=="No"){
						diputados2.push(data.result[0].xml.resultado.votaciones.votacion[i].diputado);
					}
				}
				max=data.result[0].xml.resultado.totales.encontra;
				page2=Math.ceil(max/10);
				$('#encontra').sfList('clear');
				$('#encontra').sfList({
				    data : diputados2
				});
				$('#encontra').sfList('focus');
				
				$('#scrollbar2').sfPageIndicator({index: 0, count: page2});
			},
			error: function(){
				alert('error');
			}
		});
};

Sceneencontra.prototype.handleShow = function (data) {
	alert("Sceneencontra.handleShow()");
	// this function will be called when the scene manager show this scene
};

Sceneencontra.prototype.handleHide = function () {
	alert("Sceneencontra.handleHide()");
	// this function will be called when the scene manager hide this scene
};

Sceneencontra.prototype.handleFocus = function () {
	alert("Sceneencontra.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

Sceneencontra.prototype.handleBlur = function () {
	alert("Sceneencontra.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

Sceneencontra.prototype.handleKeyDown = function (keyCode) {
	alert("Sceneencontra.handleKeyDown(" + keyCode + ")");
	// TODO : write an key event handler when this scene get focued
	switch (keyCode) {
		case sf.key.LEFT:
			break;
		case sf.key.RIGHT:
			break;
		case sf.key.UP:
            var idx = $('#encontra').sfList('getIndex');
            alert( "idx = " + idx);
            if (idx>0){
            if((idx)%10 == 0)$('#scrollbar2').sfPageIndicator('prev');
            $('#encontra').sfList('prev');
            }
			break;
		case sf.key.DOWN:
            var idx = $('#encontra').sfList('getIndex');
            alert( "idx = " + idx);
            if(idx<max-1){
            if((idx+1)%10 == 0)$('#scrollbar2').sfPageIndicator('next');
            $('#encontra').sfList('next');
            }
			break;
		case sf.key.ENTER:
			break;
		case sf.key.RETURN:
			event.preventDefault();
			sf.scene.hide('encontra');
			sf.scene.show('Scene2');
			sf.scene.focus('Scene2');
			break;
		default:
			alert("handle default key event, key code(" + keyCode + ")");
			break;
	}
};
