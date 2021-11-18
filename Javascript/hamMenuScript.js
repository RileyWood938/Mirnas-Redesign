var hamButton = document.getElementById('hamburger')
var popup = document.getElementById('popup')

hamButton.onclick = function(){

if (popup.style.display == "none") {
	popup.style.display = "block";
}else{
	popup.style.display = "none";
}

}