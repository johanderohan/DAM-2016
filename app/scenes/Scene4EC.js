alert('SceneScene4EC.js loaded');

function SceneScene4EC() {

};

SceneScene4EC.prototype.initialize = function () {
	alert("SceneScene4EC.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called

};

SceneScene4EC.prototype.handleShow = function (data) {
	alert("SceneScene4EC.handleShow()");
	// this function will be called when the scene manager show this scene
};

SceneScene4EC.prototype.handleHide = function () {
	alert("SceneScene4EC.handleHide()");
	// this function will be called when the scene manager hide this scene
};

SceneScene4EC.prototype.handleFocus = function () {
	alert("SceneScene4EC.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneScene4EC.prototype.handleBlur = function () {
	alert("SceneScene4EC.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

SceneScene4EC.prototype.handleKeyDown = function (keyCode) {
	alert("SceneScene4EC.handleKeyDown(" + keyCode + ")");
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
			sf.scene.hide('Scene4EC');
			sf.scene.show('Scene2');
			sf.scene.focus('Scene2');
			break;		
		default:
			alert("handle default key event, key code(" + keyCode + ")");
			break;
	}
};
