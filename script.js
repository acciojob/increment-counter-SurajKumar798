//your JS code here. If required.
const counter = document.getElementById('counter');
const btn = document.getElementById('incrementBtn');
incrementBtn.addEventListener('click', function(){
	const currentValue = parseInt(counter.textContent);
	alert(currentValue);
	counter.textContent = currentValue + 1;
})