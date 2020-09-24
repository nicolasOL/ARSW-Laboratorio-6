var app = (function () {
	var _cineSeleccionado;
	
	var _fechaSeleccionada;
	
	var _listaFunciones = [];
	
	var apiu = "js/apiclient.js";
	
	var cambiarNombreCinema = function (){
		_cineSeleccionado = nuevoNombre;
	};
	
	var cambiarFecha = function (){
		_fechaSeleccionada = nuevaFecha;
	};
	
	var _peliculaSeleccionada;
	
	/*
	function getFunctionsByCinema(){
		_cineSeleccionado = $("#input").val();
		listaFunciones;
		apimock.getFunctionsByCinema(_cineSeleccionado, function(funcion){
			listaFunciones = funcion.functions;
		});
		for(int i=0; i<listaFunciones.length; i++){
			movieName = listaFunciones[i].movie.name;
            gender = listaFunciones[i].movie.genre;
            hour = listaFunciones[i].date.substring(11, 16);
			disponibilidad = isDisponible(listaFunciones[i].seats);
			var row = '<tr><td>' + movieName + '</td><td>' + gender + '</td><td>' + hour + '</td><td>' + disponibilidad +'</tr>';
			$("#table").append(row);
		}
		
		
		
	}
	*/
	
	function getFunctionsByCinemaAndDate() {
          _cineSeleccionado = $("#input").val();
          _fechaSeleccionada = $("#date").val();
          apiclient.getFunctionsByCinemaAndDate(_cineSeleccionado, _fechaSeleccionada, convertElementsToObject);
          
		  
      }
	
	function dibujarSala(functions){
		
		var mapFunctions = functions.map(
          function (f) {
              f.movie.name;
              f.movie.genre;
              f.date.substring(11, 16);
			  f.seats;
			 
          });
		var funcion =  functions.filter(funct => funct.movie.name == _peliculaSeleccionada);
		var asientos = funcion[0].seats;
		console.log(asientos);
		var c = document.getElementById("myCanvas");
		var ctx = c.getContext("2d");
		console.log(asientos);
		ctx.fillStyle = "#8D792C";
		ctx.fillRect(30, 10, 450, 30);
		
		var column = 10;	
		for(var i = 0; i < asientos.length; i++){
			var row = 10;
			var add = 0;
			for(var j = 0; j < asientos[i].length; j++){
				if (j==2 ||  j==10){
					add+=20;
				}
				else{
					add+=0;
				}
				if(asientos[i][j] == true){
					ctx.fillStyle = "#0043B2";
					ctx.fillRect(row+5+add, column+100, 30, 30);
				}else{
					ctx.fillStyle = "#FF0000";
					ctx.fillRect(row+5+add, column+100, 30, 30);
				}
				row = row+40;
			}
			column = column+40;
		}
		
		$("#sillas").text(conteoSillasLibres(asientos));
	}
	
	
	
	
	function conteoSillasLibres(functions){
		var cont = 0;
		for(var i = 0; i < functions.length; i++){
			for(var j = 0; j < functions[i].length; j++){
				if(functions[i][j] == true){
					cont++;
				}
			}
		}
		return cont;
	}
	
	function asignarPelicula (functions){
		_peliculaSeleccionada = functions;
		$("#movieSeleccionado").text(_peliculaSeleccionada);
	}
	
	function redibujarSala () {
		apiclient.getFunctionsByCinemaAndDate(_cineSeleccionado, _fechaSeleccionada, dibujarSala);
	}
	
	function convertElementsToObject(functions) {
		$("table").find("tr:gt(0)").remove();
		$("#cinemaSeleccionado").text(_cineSeleccionado);
		
        
        var mapFunctions = functions.map(
          function (f) {
              f.movie.name;
              f.movie.genre;
              f.date.substring(11, 16);
			  f.seats;
				
          });
		  
		  for(var i=0; i<functions.length; i++){
			movieName = functions[i].movie.name;
			console.log(movieName);
            gender = functions[i].movie.genre;
            hour = functions[i].date.substring(11, 16);
			disponibilidad = isDisponible(functions[i].seats);
			var row = '<tr><td>' + movieName + '</td><td>' + gender + '</td><td>' + hour + '</td><td>' + true +'</td><td>'+"<button type='button' class='btn btn-primary'onclick='app.asignarPelicula( \""+  movieName + "\"); app.redibujarSala();' > "+'</td><td>'+'</tr>';
			$("#table").append(row);
		}
		  

      }
	  
	function isDisponible(alist){
		var n = false;
		for(i = 0; i < alist.length; i++){
			n = n || alist[i].includes(true);
		}		
		return n;
	}		
	
	
	function updateTable(mapFunctions) {

          $("#cinemaSeleccionado").text(_cineSeleccionado);
          mapFunctions.map(function (film) {
              var row = '<tr><td>' + film.movieName + '</td><td>' + film.gender + '</td><td>' + film.hour + '</td><td>' + boton +'</tr>';
              $("#table").append(row);
          })
		  
		 
      }
	  
	
	return {
		cambiarNombreCinema: cambiarNombreCinema,
		cambiarFecha: cambiarFecha,
		getFunctionsByCinemaAndDate: getFunctionsByCinemaAndDate,
		asignarPelicula: asignarPelicula,
		redibujarSala: redibujarSala
	};
})();