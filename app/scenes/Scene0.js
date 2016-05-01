alert('SceneScene0.js loaded');

function SceneScene0() {

};

SceneScene0.prototype.initialize = function () {
	alert("SceneScene0.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called

};

SceneScene0.prototype.handleShow = function (data) {
	alert("SceneScene0.handleShow()");
	// this function will be called when the scene manager show this scene
};

SceneScene0.prototype.handleHide = function () {
	alert("SceneScene0.handleHide()");
	// this function will be called when the scene manager hide this scene
};

SceneScene0.prototype.handleFocus = function () {
	alert("SceneScene0.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneScene0.prototype.handleBlur = function () {
	alert("SceneScene0.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

SceneScene0.prototype.handleKeyDown = function (keyCode) {
	alert("SceneScene0.handleKeyDown(" + keyCode + ")");
	// TODO : write an key event handler when this scene get focued
	switch (keyCode) {
	case sf.key.LEFT:
		var currentSelect = $('#SceneScene0 ul > .selected');
		if (currentSelect.prev().length == 0) { $('#SceneScene0 ul > li:last').addClass('selected');}
		else { currentSelect.prev().addClass('selected'); }
		currentSelect.removeClass('selected');
		break;
	case sf.key.RIGHT:
		var currentSelect = $('#SceneScene0 ul > .selected');
		if (currentSelect.next().length == 0) { $('#SceneScene0 ul > li:first').addClass('selected');}
		else { currentSelect.next().addClass('selected'); }
		currentSelect.removeClass('selected');
		break;
	case sf.key.UP:
		break;
	case sf.key.DOWN:
		break;
	case sf.key.ENTER:
		event.preventDefault();
		var scene_id = $('#SceneScene0 ul > .selected').attr("data-id");
		if(scene_id == "1") {
			sf.scene.hide('Scene0');
			sf.scene.show('Scene1');
			sf.scene.focus('Scene1');
		} else {
			sf.scene.hide('Scene0');
			sf.scene.show('Scene2');
			sf.scene.focus('Scene2');
		}

		break;
	case sf.key.TOOLS:
		break;
	default:
		alert("handle default key event, key code(" + keyCode + ")");
		break;
}
};