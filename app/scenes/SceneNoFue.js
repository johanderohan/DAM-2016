alert('SceneSceneNoFue.js loaded');

var todo4=[];
var numPag4=0;
function SceneSceneNoFue() {

};

SceneSceneNoFue.prototype.initialize = function () {
	alert("SceneSceneNoFue.initialize()");
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
				
			$("#SceneSceneEnContra #titu").html("Ultima votacion: En Contra");
			//Este codigo busca en la pagina web y extrae la inofrmacion, guardandola en una lista local
			for(var i4=0;i4<data.result[0].xml.resultado.votaciones.votacion.length;i4++){					
				if(data.result[0].xml.resultado.votaciones.votacion[i4].voto=="No vota"){
					todo4.push(data.result[0].xml.resultado.votaciones.votacion[i4].diputado);
					todo4.push(data.result[0].xml.resultado.votaciones.votacion[i4].grupo);
					}
				}
			alert('Contenid de todo4'+todo4);
			alert('Elementos de todo4'+todo4.length);
			//Este codigo agrega filas a una tabla de 10 elementos(porque es lo que cabe en la pantalla)
			$(".tabla4").append('<tr><td scope="col">Apellidos,Nombre</td><td scope="col">Grupo</td></tr>');
				for(var i4=0;i4<((numPag4/10)+1)*20;i4=i4+2){
					$(".tabla4").append('<tr><td scope="col">'+todo4[i4]+'</td><td scope="col">'+todo4[i4+1]+'</td></tr>');
					}
					numPag4=i4/20;
					$(".tabla4").append('<tr><td></td><td scope="col">Pagina'+numPag4+'de'+Math.floor(((todo4.length/2)/10)+1)+'</td></tr>');				
		},
		error: function(){alert('error');}
		});
};

avancePagina4 = function (data) {	
	alert("Avante toda la pagina");
	$(".tabla4").empty();
	$(".tabla4").append('<tr><td scope="col">Apellidos,Nombre</td><td scope="col">Grupo</td></tr>');
	if(numPag4*20>todo4.length)numPag4=0;
	
	for(var i4=numPag4*20;i4<(numPag4+1)*20;i4=i4+2){
		alert('Valor i: '+i4);
		alert('NUmero pagina:'+numPag4 );
		if(i4==todo4.length)break;
		$(".tabla4").append('<tr><td scope="col">'+todo4[i4]+'</td><td scope="col">'+todo4[i4+1]+'</td></tr>');
		}
	//alert('Valor i : '+i);
	
		if(i4=todo4.length){numPag4++; }
		else {numPag4=i4/20;}
		$(".tabla4").append('<tr><td></td><td scope="col">Pagina'+numPag4+'de'+Math.floor(((todo4.length/2)/10)+1)+'</td></tr>');
};
		
retrocesoPagina4 = function (data) {
	alert("Patrás toda la pagina");
	$(".tabla4").empty();
	$(".tabla4").append('<tr><td scope="col">Apellidos,Nombre</td><td scope="col">Grupo</td></tr>');
	numPag4=numPag4-2;
	if(numPag4<0)numPag4=(Math.floor(todo4.length/20));
	for(var i4=numPag4*20;i4<(numPag4+1)*20;i4=i4+2){
		alert('Valor i: '+i4);
		alert('NUmero pagina:'+numPag4 );
		if(i4==todo4.length)break;
		$(".tabla4").append('<tr><td scope="col">'+todo4[i4]+'</td><td scope="col">'+todo4[i4+1]+'</td></tr>');
		}
	alert('Valor i : '+i4);
	
		if(i4=todo4.length)numPag4++; 
		else numPag4=i4/20;
		$(".tabla4").append('<tr><td></td><td scope="col">Pagina'+numPag4+'de'+Math.floor(((todo4.length/2)/10)+1)+'</td></tr>');
};

SceneSceneNoFue.prototype.handleShow = function (data) {
	alert("SceneSceneNoFue.handleShow()");
	// this function will be called when the scene manager show this scene
};

SceneSceneNoFue.prototype.handleHide = function () {
	alert("SceneSceneNoFue.handleHide()");
	// this function will be called when the scene manager hide this scene
};

SceneSceneNoFue.prototype.handleFocus = function () {
	alert("SceneSceneNoFue.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneSceneNoFue.prototype.handleBlur = function () {
	alert("SceneSceneNoFue.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

SceneSceneNoFue.prototype.handleKeyDown = function (keyCode) {
	alert("SceneSceneNoFue.handleKeyDown(" + keyCode + ")");
	// todo4 : write an key event handler when this scene get focued
	switch (keyCode) {
		case sf.key.LEFT:
			retrocesoPagina4();
			sf.scene.show('SceneNoFue');
			break;
		case sf.key.RIGHT:
			avancePagina4();
			sf.scene.show('SceneNoFue');
			break;
		case sf.key.UP:
			break;
		case sf.key.DOWN:
			break;
		case sf.key.ENTER:
			break;
		case sf.key.RETURN:
			event.preventDefault();
			sf.scene.hide('SceneNoFue');
			sf.scene.show('Scene2');
			sf.scene.focus('Scene2');
			break;
		default:
			alert("handle default key event, key code(" + keyCode + ")");
			break;
	}
};
