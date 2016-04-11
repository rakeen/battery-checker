var quoteUrl1 = 'http://quotes.stormconsultancy.co.uk/random.json';  
var quoteUrl2 = './quote.json';

var req1 = fetch(quoteUrl1);
var req2 = fetch(quoteUrl2);

var battery = navigator.getBattery();  

battery.then(function(res){
	console.log(res);
});

Promise.race([req1,req2]).
		then(function(res){
			console.log(res);
		}).
		catch(function(err){
			console.error('Error:\t'+err);
		});