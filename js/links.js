let goBackButton = document.getElementById('goBack');
goBackButton.addEventListener('click', goBack);
console.log(goBack);

function goBack(event) {
	window.history.back();
	
}