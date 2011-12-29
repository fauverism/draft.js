function Page() {
	var data;
}
Page.prototype.update = function (data){
	    // simulates AJAX request
       var template = document.querySelector('#template').innerHTML;
       var result = document.querySelector('.result');
 		console.log(data);
   var attachTemplateToData = function(template, data) {
        var i = 0,
            fragment = '';
        console.log(data);
        function replace(obj) {
            var t, key, reg;
 
            for (key in obj) {
                reg = new RegExp('{{' + key + '}}', 'ig');
                t = (t || template).replace(reg, obj[key]);
            }
 
            return t;
        }
 
            fragment += replace(data);
 
        return fragment;
    };
 
    result.innerHTML = attachTemplateToData(template, data);
}

Page.prototype.load = function(file) {
    var self = this
    loadFile(file, function(data){
       self.data = JSON.parse(data);
       console.log(self.data);
       Page.prototype.update(self.data);
    });  
}


function loadFile (sURL, callback) {  
	var res;
	var  oXHR = new XMLHttpRequest();  
	  oXHR.onreadystatechange = function() {  
    	if (oXHR.readyState === 4) {  
    		res = oXHR.responseText; 
	        callback(res)
    	}  
	};  
    
    oXHR.open("GET", sURL, true);  
	oXHR.send(null); 
}  
