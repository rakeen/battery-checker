initQuote();
initBattery();


function initQuote(){
	var quoteUrl1 = 'http://quotes.stormconsultancy.co.uk/random.json';  
	var quoteUrl2 = './quote.json';

	var req1 = fetch(quoteUrl1);
	var req2 = fetch(quoteUrl2);

	Promise.race([req1,req2]).
			then(function(res){
				res.json().then(function(data){
					var q;
					if(data.local==="yes")	q=randLocal(data.quotes);
					else q=data.quote;
					document.querySelector('.quote').textContent = q;
				});
			}).
			catch(function(err){
				console.error('Error:\t'+err);
			});


	function randLocal(d){
		var len = d.length;
		var rand = parseInt( Math.random()*100 );
		rand = rand%len;
		return d[rand];
	}
}


function initBattery(){
	
	if(typeof navigator.getBattery === "undefined"){
		document.querySelector('#dinosaur').style.display = 'block';
		console.error('you\'re a dinosaur');
	}
	else{
		var battery = navigator.getBattery();  
		battery.then(function(res){
			console.log(res);
			window.battery = res;
			window.indicator = document.querySelector('#indicator');

			res.addEventListener('chargingchange',updateBatteryStatus);
			res.addEventListener('levelchange',updateBatteryStatus);
			updateBatteryStatus();
		});
	}

}


function updateBatteryStatus(){

	if(battery.level*100 === 100) indicator.style.width = '97%'; /* or else it overflows */
	else indicator.style.width = battery.level * 100 + '%';


	var lvl = battery.level*100 + ' %';
	indicator.className = battery.charging ? 'charging' : 'notCharging';

	document.querySelector('.indicator-info').textContent = battery.charging ? 'Charging '+lvl : 'Not Charging '+lvl;		
	document.querySelector('.discharge').textContent = battery.dischargingTime==="Infinity" ? "Discharging Time:\t Infinity" : "Discharging Time:\t "+battery.dischargingTime/60;
}