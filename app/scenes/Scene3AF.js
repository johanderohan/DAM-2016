alert('SceneScene3AF.js loaded');

function SceneScene3AF() {

};

SceneScene3AF.prototype.initialize = function () {
	alert("SceneScene3AF.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called

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
