var secsHand = document.querySelector('.secs-hand'),
	minsHand = document.querySelector('.mins-hand'),
	hourHand = document.querySelector('.hour-hand'),
	clockDigit = document.querySelector('.clock-digit'),
	digit = [12,3,6,9],
	digitTop = [0,95,180,95],
	digitLeft = [95,180,95,0],
	create = '';


function setDate() {
	var now = new Date();
	
	var secs = now.getSeconds();
	var secsDegrees = ((secs / 60) * 360) + 90;
	secsHand.style.transform = 'rotate('+ secsDegrees +'deg)';
	
	var mins = now.getMinutes();
	var minsDegrees = ((mins / 60) * 360) + ((secs/60)*6) + 90;
	minsHand.style.transform = 'rotate('+ minsDegrees +'deg)';
	
	var hour = now.getHours();
	var hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
	hourHand.style.transform = 'rotate('+ hourDegrees +'deg)';
}

setInterval(setDate, 1000);

setDate();

for(i = 0; i < 4; i++) {
	create += '<b class="digit-div" style="top:'+ digitTop[i] +'px; left:'+ digitLeft[i] +'px">'+ digit[i] + '</b>'
}
clockDigit.innerHTML += create;