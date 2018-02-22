// document.querySelector('html').onclick = function() {
//     alert('Ouch! Stop poking me!');
// }

var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/fat-lessfat.png') {
		myImage.setAttribute ('src', 'images/sport-eat.png');
	} else {
		myImage.setAttribute ('src', 'images/fat-lessfat.png');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Pleace enter your name.');
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'Быть здоровым это круто, ' + myName;
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'Быть здоровым это круто, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}

