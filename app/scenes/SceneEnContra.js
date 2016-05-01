alert('SceneSceneEnContra.js loaded');
var todo2=[];
var numPag2=0;
function SceneSceneEnContra() {

};

SceneSceneEnContra.prototype.initialize = function () {
	alert("SceneSceneEnContra.initialize()");
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
			for(var i2=0;i2<data.result[0].xml.resultado.votaciones.votacion.length;i2++){					
				if(data.result[0].xml.resultado.votaciones.votacion[i2].voto=="No"){
					todo2.push(data.result[0].xml.resultado.votaciones.votacion[i2].diputado);
					todo2.push(data.result[0].xml.resultado.votaciones.votacion[i2].grupo);
					}
				}
			alert('Contenid de todo2'+todo2);
			alert('Elementos de todo2'+todo2.length);
			//Este codigo agrega filas a una tabla de 10 elementos(porque es lo que cabe en la pantalla)
			$(".tabla2").append('<tr><td scope="col">Apellidos,Nombre</td><td scope="col">Grupo</td></tr>');
				for(var i2=0;i2<((numPag2/10)+1)*20;i2=i2+2){
					$(".tabla2").append('<tr><td scope="col">'+todo2[i2]+'</td><td scope="col">'+todo2[i2+1]+'</td></tr>');
					}
					numPag2=i2/20;
					$(".tabla2").append('<tr><td></td><td scope="col">Pagina'+numPag2+'de'+Math.floor(((todo2.length/2)/10)+1)+'</td></tr>');				
		},
		error: function(){alert('error');}
		});
};

avancePagina2 = function (data) {	
	alert("Avante toda la pagina");
	$(".tabla2").empty();
	$(".tabla2").append('<tr><td scope="col">Apellidos,Nombre</td><td scope="col">Grupo</td></tr>');
	if(numPag2*20>todo2.length)numPag2=0;
	
	for(var i2=numPag2*20;i2<(numPag2+1)*20;i2=i2+2){
		//alert('Valor i: '+i2);
		alert('NUmero pagina:'+numPag2 );
		if(i2==todo2.length)break;
		$(".tabla2").append('<tr><td scope="col">'+todo2[i2]+'</td><td scope="col">'+todo2[i2+1]+'</td></tr>');
		}
	//alert('Valor i : '+i2);
	
		if(i2=todo2.length){numPag2++; }
		else {numPag2=i2/20;}
		$(".tabla2").append('<tr><td></td><td scope="col">Pagina'+numPag2+'de'+Math.floor(((todo2.length/2)/10)+1)+'</td></tr>');
};
		
retrocesoPagina2 = function (data) {
	alert("Patrás toda la pagina");
	$(".tabla2").empty();
	$(".tabla2").append('<tr><td scope="col">Apellidos,Nombre</td><td scope="col">Grupo</td></tr>');
	numPag2=numPag2-2;
	if(numPag2<0)numPag2=(Math.floor(todo2.length/20));
	for(var i2=numPag2*20;i2<(numPag2+1)*20;i2=i2+2){
		alert('Valor i: '+i2);
		alert('NUmero pagina:'+numPag2 );
		if(i2==todo2.length)break;
		$(".tabla2").append('<tr><td scope="col">'+todo2[i2]+'</td><td scope="col">'+todo2[i2+1]+'</td></tr>');
		}
	alert('Valor i : '+i2);
	
		if(i2=todo2.length)numPag2++; 
		else numPag2=i2/20;
		$(".tabla2").append('<tr><td></td><td scope="col">Pagina'+numPag2+'de'+Math.floor(((todo2.length/2)/10)+1)+'</td></tr>');
};


SceneSceneEnContra.prototype.handleShow = function (data) {
	alert("SceneSceneEnContra.handleShow()");
	// this function will be called when the scene manager show this scene
};

SceneSceneEnContra.prototype.handleHide = function () {
	alert("SceneSceneEnContra.handleHide()");
	// this function will be called when the scene manager hide this scene
};

SceneSceneEnContra.prototype.handleFocus = function () {
	alert("SceneSceneEnContra.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneSceneEnContra.prototype.handleBlur = function () {
	alert("SceneSceneEnContra.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

SceneSceneEnContra.prototype.handleKeyDown = function (keyCode) {
	alert("SceneSceneEnContra.handleKeyDown(" + keyCode + ")");
	// todo2 : write an key event handler when this scene get focued
	switch (keyCode) {
		case sf.key.LEFT:
			retrocesoPagina2();
			sf.scene.show('SceneEnContra');
			break;
		case sf.key.RIGHT:
			avancePagina2();
			sf.scene.show('SceneEnContra');
			break;
		case sf.key.UP:
			break;
		case sf.key.DOWN:
			break;
		case sf.key.ENTER:
			break;
		case sf.key.RETURN:
			event.preventDefault();
			sf.scene.hide('SceneEnContra');
			sf.scene.show('Scene2');
			sf.scene.focus('Scene2');
			break;
		default:
			alert("handle default key event, key code(" + keyCode + ")");
			break;
	}
};
