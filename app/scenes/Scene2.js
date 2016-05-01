alert('SceneScene2.js loaded');

function SceneScene2() {

};

SceneScene2.prototype.initialize = function () {
	alert("SceneScene2.initialize()");
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
				$("#titulo").html(data.result[0].xml.resultado.informacion.textoexpediente+' '+data.result[0].xml.resultado.informacion.titulosubgrupo);
				$(".chart").append('<li data-id="1" class="bar afavor" style="height:'+((100*data.result[0].xml.resultado.totales.afavor)/data.result[0].xml.resultado.totales.presentes)*1.2+'%">\
															<div class="percent">'+data.result[0].xml.resultado.totales.afavor+'</div>\
															<div class="skill">A favor</div>\
														</li>');
				$(".chart").append('<li data-id="2" class="bar encontra" style="height:'+((100*data.result[0].xml.resultado.totales.encontra)/data.result[0].xml.resultado.totales.presentes)*1.2+'%">\
															<div class="percent">'+data.result[0].xml.resultado.totales.encontra+'</div>\
															<div class="skill">En contra</div>\
														</li>');
				$(".chart").append('<li data-id="3" class="bar abstenciones" style="height:'+((100*data.result[0].xml.resultado.totales.abstenciones)/data.result[0].xml.resultado.totales.presentes)*1.2+'%">\
															<div class="percent">'+data.result[0].xml.resultado.totales.abstenciones+'</div>\
															<div class="skill">Abstenciones</div>\
														</li>');
				$(".chart").append('<li data-id="4" class="bar novotan" style="height:'+((100*data.result[0].xml.resultado.totales.novotan)/data.result[0].xml.resultado.totales.presentes)*1.2+'%">\
															<div class="percent">'+data.result[0].xml.resultado.totales.novotan+'</div>\
															<div class="skill">No votan</div>\
														</li>');
			},
			error: function(){
				alert('error');
			}
		});
//	$('#svecHScrollbar_3l15').sfHScroll({
//		pages:10,
//		currentPage:0
//	});
};

SceneScene2.prototype.handleShow = function (data) {
	alert("SceneScene2.handleShow()");
	// this function will be called when the scene manager show this scene
};

SceneScene2.prototype.handleHide = function () {
	alert("SceneScene2.handleHide()");
	// this function will be called when the scene manager hide this scene
};

SceneScene2.prototype.handleFocus = function () {
	alert("SceneScene2.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneScene2.prototype.handleBlur = function () {
	alert("SceneScene2.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

SceneScene2.prototype.handleKeyDown = function (keyCode) {
	alert("SceneScene2.handleKeyDown(" + keyCode + ")");
	// TODO : write an key event handler when this scene get focued
	switch (keyCode) {
		case sf.key.LEFT:
			var currentSelect = $('#SceneScene2 ul > .selected');
			if (currentSelect.prev().length == 0) { $('#SceneScene2 ul > li:last').addClass('selected');}
			else { currentSelect.prev().addClass('selected'); }
			currentSelect.removeClass('selected');
			
			break;
		case sf.key.RIGHT:
			var currentSelect = $('#SceneScene2 ul > .selected');
			if (currentSelect.next().length == 0) { $('#SceneScene2 ul > li:first').addClass('selected');}
			else { currentSelect.next().addClass('selected'); }
			currentSelect.removeClass('selected');
			break;
		case sf.key.UP:
			break;
		case sf.key.DOWN:
			break;
		case sf.key.ENTER:
			event.preventDefault();
			var scene_id = $('#SceneScene2 ul > .selected').attr("data-id");
			if(scene_id == "1") {
				sf.scene.hide('Scene2');
				sf.scene.show('SceneAFavorV2');
				sf.scene.focus('SceneAFavorV2');
			} else if(scene_id == "2") {
				sf.scene.hide('Scene2');
				sf.scene.show('SceneEnContra');
				sf.scene.focus('SceneEnContra');
			} else if(scene_id == "3") {
				sf.scene.hide('Scene2');
				sf.scene.show('SceneAbstencion');
				sf.scene.focus('SceneAbstencion');
			} else if(scene_id == "4") {
				sf.scene.hide('Scene2');
				sf.scene.show('SceneNoFue');
				sf.scene.focus('SceneNoFue');
			} else{}
	
			break;
		case sf.key.RETURN:
			event.preventDefault();
			sf.scene.hide('Scene2');
			sf.scene.show('Scene0');
			sf.scene.focus('Scene0');
			break;
		default:
			alert("handle default key event, key code(" + keyCode + ")");
			break;
	}
};