var Url = 'http://localhost:8080/cinemas/';
api = (function () {
    var f=[]
	var g=[]
    return {
        getFunctionsByCinema: function (name, callback) {
                $.get(Url+name,function(data){
                    f=data;
                });
                return callback(f[name])
        },
		getFunctionsByCinemaAndDate: function (name, date, callback) {
			
			//console.log(name);
			//console.log(date);
			
			$.getJSON(Url + name +"/"+ date, function (data) {
				callback(data);
			});
        }
		
		
    };
})();