alert('SceneScene6NV.js loaded');

function SceneScene6NV() {

};

SceneScene6NV.prototype.initialize = function () {
	alert("SceneScene6NV.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called

};

SceneScene6NV.prototype.handleShow = function (data) {
	alert("SceneScene6NV.handleShow()");
	// this function will be called when the scene manager show this scene
};

SceneScene6NV.prototype.handleHide = function () {
	alert("SceneScene6NV.handleHide()");
	// this function will be called when the scene manager hide this scene
};

SceneScene6NV.prototype.handleFocus = function () {
	alert("SceneScene6NV.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneScene6NV.prototype.handleBlur = function () {
	alert("SceneScene6NV.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

SceneScene6NV.prototype.handleKeyDown = function (keyCode) {
	alert("SceneScene6NV.handleKeyDown(" + keyCode + ")");
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
			sf.scene.hide('Scene6NV');
			sf.scene.show('Scene2');
			sf.scene.focus('Scene2');
			break;		
		default:
			alert("handle default key event, key code(" + keyCode + ")");
			break;
	}
};
