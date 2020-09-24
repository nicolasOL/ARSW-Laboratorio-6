var Url = 'http://localhost:8080/cinemas/';
apiclient = (function () {
    var f=[]
    return {
        getFunctionsByCinema: function (name, callback) {
                $.get(Url+name,function(data){
                    f=data;
                });
                return callback(f[name])
        },
		getFunctionsByCinemaAndDate: function (name, date, callback) {
			var g=[];
			console.log(name);
			console.log(date);
                $.get(Url+name+'/'+date,function(data)
					
                    g.push(data);
					
                });
				console.log(g);
                return callback(g[0])
        }
		
		
    };
})();