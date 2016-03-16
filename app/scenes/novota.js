alert('Scenenovota.js loaded');
var diputados4 = [];
var page4 = 0;

function Scenenovota() {

};

Scenenovota.prototype.initialize = function () {
	alert("Scenenovota.initialize()");
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
				//page4=Math.ceil(data.result[0].xml.resultado.totales.novotan/10);
				$("#titulo4").html("No votan");
				for(var i=0; i<data.result[0].xml.resultado.votaciones.votacion.length;i++){
					if(data.result[0].xml.resultado.votaciones.votacion[i].voto=="No vota"){
						diputados4.push(data.result[0].xml.resultado.votaciones.votacion[i].diputado);
					}
				}
				max=data.result[0].xml.resultado.totales.novotan-1;
				page4=Math.ceil(max/10);
				$('#novota').sfList('clear');
				$('#novota').sfList({data : diputados4});
				$('#novota').sfList('focus');

				$('#scrollbar4').sfPageIndicator({index: 0, count: page4});
			},
			error: function(){
				alert('error');
			}
		});
	
};

Scenenovota.prototype.handleShow = function (data) {
	alert("Scenenovota.handleShow()");
	// this function will be called when the scene manager show this scene
	
};

Scenenovota.prototype.handleHide = function () {
	alert("Scenenovota.handleHide()");
	// this function will be called when the scene manager hide this scene
};

Scenenovota.prototype.handleFocus = function () {
	alert("Scenenovota.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

Scenenovota.prototype.handleBlur = function () {
	alert("Scenenovota.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

Scenenovota.prototype.handleKeyDown = function (keyCode) {
	alert("Scenenovota.handleKeyDown(" + keyCode + ")");
	// TODO : write an key event handler when this scene get focued
	switch (keyCode) {
		case sf.key.LEFT:
			break;
		case sf.key.RIGHT:
			break;
		case sf.key.UP:
            var idx = $('#novota').sfList('getIndex');
            alert( "idx = " + idx);
            if (idx>0){
            if((idx)%10 == 0)$('#scrollbar4').sfPageIndicator('prev');
            $('#novota').sfList('prev');
            }
			break;
		case sf.key.DOWN:
            var idx = $('#novota').sfList('getIndex');
            alert( "idx = " + idx);
            if(idx<max-1){
            if((idx+1)%10 == 0)$('#scrollbar4').sfPageIndicator('next');
            $('#novota').sfList('next');
            }
			break;
		case sf.key.ENTER:
			break;
		case sf.key.RETURN:
			event.preventDefault();
			sf.scene.hide('novota');
			sf.scene.show('Scene2');
			sf.scene.focus('Scene2');
			break;
		default:
			alert("handle default key event, key code(" + keyCode + ")");
			break;
	}
};
