
function showTime() {
	document.getElementById('currentTime') = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);