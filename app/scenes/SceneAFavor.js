alert('SceneSceneAFavor.js loaded');
var numPag=0;
function SceneSceneAFavor() {

};

SceneSceneAFavor.prototype.initialize = function () {
	alert("SceneSceneAFavor.initialize()");
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
				
				$(".tabla").append('<tr><td scope="col">Apellidos,Nombre</td><td scope="col">Grupo</td></tr>');
				for(var i=0;i<((numPag/10)+1)*10;i++){
				$(".tabla").append('<tr><td scope="col">'+(data.result[0].xml.resultado.votaciones.votacion[i].diputado)+
							'</td><td scope="col">'+(data.result[0].xml.resultado.votaciones.votacion[i].grupo)+'</td></tr>');
				}
				numPag=i/10;
				$(".tabla").append('<tr><td></td><td scope="col">Pagina'+numPag+'de'+(Math.floor(data.result[0].xml.resultado.totales.afavor/10)+1)+'</td></tr>');
				
			},
			error: function(){
				alert('error');
			}
		});

};

avancePagina = function (data) {
	alert("Avante toda la pagina");
	
		
	$(".tabla").empty();
	$.ajax({
		type: "GET",
		crossDomain: true,
		async: true,
		dataType: "json",
		url: API+"/votaciones",
		success: function(data){
				alert('success');
				$("#titulo").html(data.result[0].xml.resultado.informacion.textoexpediente+' '+data.result[0].xml.resultado.informacion.titulosubgrupo);
				
				$(".tabla").append('<tr><td scope="col">Apellidos,Nombre</td><td scope="col">Grupo</td></tr>');
				for(var i=numPag*10;i<(numPag+1)*10;i++){
					alert('valor de i:'+i);
					alert('Valor NUMPAG:'+numPag);
					$(".tabla").append('<tr><td scope="col">'+(data.result[0].xml.resultado.votaciones.votacion[i].diputado)+
							'</td><td scope="col">'+(data.result[0].xml.resultado.votaciones.votacion[i].grupo)+'</td></tr>');
				}
				alert('Valor NUMPAG:'+numPag);
				numPag=i/10;
				$(".tabla").append('<tr><td></td><td scope="col">Pagina'+numPag+'de'+(Math.floor(data.result[0].xml.resultado.totales.afavor/10)+1)+'</td></tr>');
				
			},
			error: function(){
				alert('error');
			}
		});
	};

	retrocesoPagina = function (data) {
		alert("Patrás toda la pagina");
		
			
		$(".tabla").empty();
		$.ajax({
			type: "GET",
			crossDomain: true,
			async: true,
			dataType: "json",
			url: API+"/votaciones",
			success: function(data){
					alert('success');
					$("#titulo").html(data.result[0].xml.resultado.informacion.textoexpediente+' '+data.result[0].xml.resultado.informacion.titulosubgrupo);
					
					$(".tabla").append('<tr><td scope="col">Apellidos,Nombre</td><td scope="col">Grupo</td></tr>');
					for(var i=numPag*10;i<(numPag+1)*10;i++){
						alert('valor de i:'+i);
						alert('Valor NUMPAG:'+numPag);
						$(".tabla").append('<tr><td scope="col">'+(data.result[0].xml.resultado.votaciones.votacion[i].diputado)+
								'</td><td scope="col">'+(data.result[0].xml.resultado.votaciones.votacion[i].grupo)+'</td></tr>');
					}
					alert('Valor NUMPAG:'+numPag);
					numPag=i/10;
					$(".tabla").append('<tr><td></td><td scope="col">Pagina'+numPag+'de'+(Math.floor(data.result[0].xml.resultado.totales.afavor/10)+1)+'</td></tr>');
					
				},
				error: function(){
					alert('error');
				}
			});
		};
	
	
	

SceneSceneAFavor.prototype.handleShow = function (data) {
	alert("SceneSceneAFavor.handleShow()");
	// this function will be called when the scene manager show this scene
};

SceneSceneAFavor.prototype.handleHide = function () {
	alert("SceneSceneAFavor.handleHide()");
	// this function will be called when the scene manager hide this scene
};

SceneSceneAFavor.prototype.handleFocus = function () {
	alert("SceneSceneAFavor.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneSceneAFavor.prototype.handleBlur = function () {
	alert("SceneSceneAFavor.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

SceneSceneAFavor.prototype.handleKeyDown = function (keyCode) {
	alert("SceneSceneAFavor.handleKeyDown(" + keyCode + ")");
	// TODO : write an key event handler when this scene get focued
	switch (keyCode) {
		case sf.key.LEFT:
			retrocesoPagina();
			sf.scene.show('Scene0');
			break;
		case sf.key.RIGHT:
			avancePagina();
			sf.scene.show('Scene0');
			
			break;
		case sf.key.UP:
			break;
		case sf.key.DOWN:
			break;
		case sf.key.ENTER:
			break;
		case sf.key.RETURN:
			event.preventDefault();
			sf.scene.hide('SceneAFavor');
			sf.scene.show('Scene0');
			sf.scene.focus('Scene0');
			break;
		default:
			alert("handle default key event, key code(" + keyCode + ")");
			break;
	}
};
