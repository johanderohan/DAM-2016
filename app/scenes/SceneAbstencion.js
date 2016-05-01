alert('SceneSceneAbstencion.js loaded');

var todo3=[];
var numPag3=0;
function SceneSceneAbstencion() {

};

SceneSceneAbstencion.prototype.initialize = function () {
	alert("SceneSceneAbstencion.initialize()");
	
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
			for(var i3=0;i3<data.result[0].xml.resultado.votaciones.votacion.length;i3++){					
				if(data.result[0].xml.resultado.votaciones.votacion[i3].voto=="Abstención"){
					todo3.push(data.result[0].xml.resultado.votaciones.votacion[i3].diputado);
					todo3.push(data.result[0].xml.resultado.votaciones.votacion[i3].grupo);
					}
				}
			alert('Contenid de todo3'+todo3);
			alert('Elementos de todo3'+todo3.length);
			//Este codigo agrega filas a una tabla de 10 elementos(porque es lo que cabe en la pantalla)
			$(".tabla3").append('<tr><td scope="col">Apellidos,Nombre</td><td scope="col">Grupo</td></tr>');
				for(var i3=0;i3<((numPag3/10)+1)*20;i3=i3+2){
					$(".tabla3").append('<tr><td scope="col">'+todo3[i3]+'</td><td scope="col">'+todo3[i3+1]+'</td></tr>');
					}
					numPag3=i3/20;
					$(".tabla3").append('<tr><td></td><td scope="col">Pagina'+numPag3+'de'+Math.floor(((todo3.length/2)/10)+1)+'</td></tr>');				
		},
		error: function(){alert('error');}
		});
};

avancePagina3 = function (data) {	
	alert("Avante toda la pagina");
	$(".tabla3").empty();
	$(".tabla3").append('<tr><td scope="col">Apellidos,Nombre</td><td scope="col">Grupo</td></tr>');
	if(numPag3*20>todo3.length)numPag3=0;
	
	for(var i3=numPag3*20;i3<(numPag3+1)*20;i3=i3+2){
		//alert('Valor i: '+i3);
		alert('NUmero pagina:'+numPag3 );
		if(i3==todo3.length)break;
		$(".tabla3").append('<tr><td scope="col">'+todo3[i3]+'</td><td scope="col">'+todo3[i3+1]+'</td></tr>');
		}
	//alert('Valor i : '+i);
	
		if(i3=todo3.length){numPag3++; }
		else {numPag3=i3/20;}
		$(".tabla3").append('<tr><td></td><td scope="col">Pagina'+numPag3+'de'+Math.floor(((todo3.length/2)/10)+1)+'</td></tr>');
};
		
retrocesoPagina3 = function (data) {
	alert("Patrás toda la pagina");
	$(".tabla3").empty();
	$(".tabla3").append('<tr><td scope="col">Apellidos,Nombre</td><td scope="col">Grupo</td></tr>');
	numPag3=numPag3-2;
	if(numPag3<0)numPag3=(Math.floor(todo3.length/20));
	for(var i3=numPag3*20;i3<(numPag3+1)*20;i3=i3+2){
		alert('Valor i: '+i3);
		alert('NUmero pagina:'+numPag3 );
		if(i3==todo3.length)break;
		$(".tabla3").append('<tr><td scope="col">'+todo3[i3]+'</td><td scope="col">'+todo3[i3+1]+'</td></tr>');
		}
	alert('Valor i : '+i3);
	
		if(i3=todo3.length)numPag3++; 
		else numPag3=i3/20;
		$(".tabla3").append('<tr><td></td><td scope="col">Pagina'+numPag3+'de'+Math.floor(((todo3.length/2)/10)+1)+'</td></tr>');
};


SceneSceneAbstencion.prototype.handleShow = function (data) {
	alert("SceneSceneAbstencion.handleShow()");
	// this function will be called when the scene manager show this scene
};

SceneSceneAbstencion.prototype.handleHide = function () {
	alert("SceneSceneAbstencion.handleHide()");
	// this function will be called when the scene manager hide this scene
};

SceneSceneAbstencion.prototype.handleFocus = function () {
	alert("SceneSceneAbstencion.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneSceneAbstencion.prototype.handleBlur = function () {
	alert("SceneSceneAbstencion.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

SceneSceneAbstencion.prototype.handleKeyDown = function (keyCode) {
	alert("SceneSceneAbstencion.handleKeyDown(" + keyCode + ")");
	// todo3 : write an key event handler when this scene get focued
	switch (keyCode) {
		case sf.key.LEFT:
			retrocesoPagina3();
			sf.scene.show('SceneAbstencion');
			break;
		case sf.key.RIGHT:
			avancePagina3();
			sf.scene.show('SceneAbstencion');
			break;
		case sf.key.UP:
			break;
		case sf.key.DOWN:
			break;
		case sf.key.ENTER:
			break;
		case sf.key.RETURN:
			event.preventDefault();
			sf.scene.hide('SceneAbstencion');
			sf.scene.show('Scene2');
			sf.scene.focus('Scene2');
			break;
		default:
			alert("handle default key event, key code(" + keyCode + ")");
			break;
	}
};
