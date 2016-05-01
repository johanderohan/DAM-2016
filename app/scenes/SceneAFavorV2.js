alert('SceneSceneAFavorV2.js loaded');

var numPag1=0;

var todo=[];
function SceneSceneAFavorV2() {

};

SceneSceneAFavorV2.prototype.initialize = function () {
	alert("SceneSceneAFavorV2.initialize()");
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
			alert('Contenido de data[i]: '+data);	
				alert('success');
				//Este codigo
				$("#SceneSceneAFavorV2 #titulo").html("Ultima votacion: Votos a favor");
				for(var i1=0;i1<data.result[0].xml.resultado.votaciones.votacion.length;i1++){					
					if(data.result[0].xml.resultado.votaciones.votacion[i1].voto=="Sí"){
						todo.push(data.result[0].xml.resultado.votaciones.votacion[i1].diputado);
						todo.push(data.result[0].xml.resultado.votaciones.votacion[i1].grupo);
						//alert('Contenido de todo:'+todo);
						}
				}
				
				
				$(".tabla1").append('<tr><td scope="col">Apellidos,Nombre</td><td scope="col">Grupo</td></tr>');
				for(var i1=0;i1<((numPag1/10)+1)*20;i1=i1+2){
					$(".tabla1").append('<tr><td scope="col">'+todo[i1]+'</td><td scope="col">'+todo[i1+1]+'</td></tr>');
					}
				numPag1=i1/20;
				$(".tabla1").append('<tr><td></td><td scope="col">Pagina'+numPag1+'de'+Math.floor(((todo.length/2)/10)+1)+'</td></tr>');				
			},
			error: function(){
				alert('error');
			}
		});
			
			

};

avancePagina1 = function (data) {	
	alert("Avante toda la pagina");
	$(".tabla1").empty();
	$(".tabla1").append('<tr><td scope="col">Apellidos,Nombre</td><td scope="col">Grupo</td></tr>');
	if(numPag1*20>=todo.length)numPag1=0;
	
	for(var i1=numPag1*20;i1<(numPag1+1)*20;i1=i1+2){
		alert('Valor i: '+i1);
		alert('NUmero pagina:'+numPag1 );
		if(i1==todo.length)break;
		$(".tabla1").append('<tr><td scope="col">'+todo[i1]+'</td><td scope="col">'+todo[i1+1]+'</td></tr>');
		}
	alert('Valor i1 : '+i1);
	
		if(i1=todo.length){numPag1++; }
		else {numPag1=i1/20;}
		$(".tabla1").append('<tr><td></td><td scope="col">Pagina'+numPag1+'de'+Math.floor(((todo.length/2)/10)+1)+'</td></tr>');
};

		
		
retrocesoPagina1 = function (data) {
	alert("Patrás toda la pagina");
	$(".tabla1").empty();
	$(".tabla1").append('<tr><td scope="col">Apellidos,Nombre</td><td scope="col">Grupo</td></tr>');
	numPag1=numPag1-2;
	if(numPag1<0)numPag1=(Math.floor(todo.length/20));
	for(var i1=numPag1*20;i1<(numPag1+1)*20;i1=i1+2){
		alert('Valor i: '+i1);
		alert('NUmero pagina:'+numPag1 );
		if(i1==todo.length)break;
		$(".tabla1").append('<tr><td scope="col">'+todo[i1]+'</td><td scope="col">'+todo[i1+1]+'</td></tr>');
		}
	//alert('Valor i : '+i);
		if(i1=todo.length){numPag1++;} 
		else {numPag1=i1/20;}
		$(".tabla1").append('<tr><td></td><td scope="col">Pagina'+numPag1+'de'+Math.floor(((todo.length/2)/10)+1)+'</td></tr>');
};
		
	
SceneSceneAFavorV2.prototype.handleShow = function (data) {
	alert("SceneSceneAFavorV2.handleShow()");
	// this function will be called when the scene manager show this scene
};

SceneSceneAFavorV2.prototype.handleHide = function () {
	alert("SceneSceneAFavorV2.handleHide()");
	// this function will be called when the scene manager hide this scene
};

SceneSceneAFavorV2.prototype.handleFocus = function () {
	alert("SceneSceneAFavorV2.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneSceneAFavorV2.prototype.handleBlur = function () {
	alert("SceneSceneAFavorV2.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

SceneSceneAFavorV2.prototype.handleKeyDown = function (keyCode) {
	alert("SceneSceneAFavorV2.handleKeyDown(" + keyCode + ")");
	// TODO : write an key event handler when this scene get focued
	switch (keyCode) {
		case sf.key.LEFT:
			retrocesoPagina1();
			sf.scene.show('SceneAFavorV2');
			break;
		case sf.key.RIGHT:
			avancePagina1();
			sf.scene.show('SceneAFavorV2');
			
			break;
		case sf.key.UP:
			break;
		case sf.key.DOWN:
			break;
		case sf.key.ENTER:
			break;
		case sf.key.RETURN:
			event.preventDefault();
			sf.scene.hide('SceneAFavorV2');
			sf.scene.show('Scene2');
			sf.scene.focus('Scene2');
			break;
		default:
			alert("handle default key event, key code(" + keyCode + ")");
			break;
	}
};
