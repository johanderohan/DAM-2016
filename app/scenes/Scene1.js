alert('SceneScene1.js loaded');

function SceneScene1() {

};

SceneScene1.prototype.initialize = function () {
	alert("SceneScene1.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called
	$.ajax({
	type: "GET",
	crossDomain: true,
	async: true,
	dataType: "json",
	url: API+"/grupos",
	
	success: function(data){
		alert('Contenido de data[i]: '+data);	
			alert('success');
			var total = 0;
			for (var i = 0; i < data.length; i++) {
				if(data[i].num_diputados > total) total = data[i].num_diputados;
			}
			
			alert('Contenido de data[i]: '+data);	
			for (var i = 0; i < data.length; i++) {
				if(data[i].num_diputados < 50){
					$(".chart").append('<li class="bar '+data[i].nombre+'" style="height:'+((100*data[i].num_diputados)/total)*4+'%">\
																<div class="percent">'+data[i].num_diputados+'</div>\
																<div class="skill">'+data[i].nombre+'</div>\
															</li>');
				} else {
					$(".chart").append('<li class="bar '+data[i].nombre+'" style="height:'+((100*data[i].num_diputados)/total)*0.9+'%">\
																<div class="percent">'+data[i].num_diputados+'</div>\
																<div class="skill">'+data[i].nombre+'</div>\
															</li>');
				}

			}
		},
		error: function(){
			alert('error');
		}
	});

};

SceneScene1.prototype.handleShow = function (data) {
	alert("SceneScene1.handleShow()");
	// this function will be called when the scene manager show this scene
};

SceneScene1.prototype.handleHide = function () {
	alert("SceneScene1.handleHide()");
	// this function will be called when the scene manager hide this scene
};

SceneScene1.prototype.handleFocus = function () {
	alert("SceneScene1.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneScene1.prototype.handleBlur = function () {
	alert("SceneScene1.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

SceneScene1.prototype.handleKeyDown = function (keyCode) {
	alert("SceneScene1.handleKeyDown(" + keyCode + ")");
	// TODO : write an key event handler when this scene get focued
	switch (keyCode) {
		case sf.key.LEFT:
		var currentSelect = $('#SceneScene1 ul > .selected');
		if (currentSelect.prev().length == 0) { $('#SceneScene1 ul > li:last').addClass('selected');}
		else { currentSelect.prev().addClass('selected'); }
		currentSelect.removeClass('selected');
			break;
		case sf.key.RIGHT:
			var currentSelect = $('#SceneScene1 ul > .selected');
			if (currentSelect.next().length == 0) { $('#SceneScene1 ul > li:first').addClass('selected');}
			else { currentSelect.next().addClass('selected'); }
			currentSelect.removeClass('selected');
			break;
		case sf.key.UP:
			break;
		case sf.key.DOWN:
			break;
		case sf.key.ENTER:
			break;
		case sf.key.TOOLS:
			break;
		case sf.key.RETURN:
			event.preventDefault();
			sf.scene.hide('Scene1');
			sf.scene.show('Scene0');
			sf.scene.focus('Scene0');
			break;
		default:
			alert("handle default key event, key code(" + keyCode + ")");
			break;
	}
};