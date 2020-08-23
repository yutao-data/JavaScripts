function prepareGallery(){
	if(!document.getElementsByTagname) return false;
	if(!document.getElementById)return false;
	if(!document.getElementById("imagegallery")) return false;
	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");
	for( var i=0; i<links.length;i++){
		links[i].onclick = function(){
			return !showPic(this);
			links[i].onkeypress = links[i].onclick;
		}
	}
}

function addLoadEvent(func){
	var oldonload = window.onload;
	if (typeof window.onload !='function'){
		window.onload = func;
	} else {
		window.onload = function(){
			oldonload();
			func();
		}
	}
}

function showPic(whichpic){
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src",source);
	var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
	var description = document.getElementById("description");
	return true;
}





/* 
function countBodyChildren(){
    var body_element = document.getElementsByTagName("body")[0];
    console.log(document.getElementsByName("body"))
    alert(body_element.childNodes.length);
    alert(body_element.nodeType);
}
window.onload = countBodyChildren;
*/




function insertAfter(newElement,targetElement){
	var parent = targetElement.parentNode;
	if (parent.lastChild == targetElement) {
		parent.appendChild(newElement);
	}else{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}


function preparePlaceholder(){
	var placeholder = document.createElement("img");
	placeholder.setAttribute("id","placeholder");
	placeholder.setAttribute("src","images/placeholder.jpg");
	placeholder.setAttribute("alt","my image gallery");
	var description = document.createElement("p");
	description.setAttribute("id","description");
	var desctext = document.createTextNode("Choose an image");
	description.appendChild(desctext);
	var gallery = document.getElementById("imagegallery");
	insertAfter(placeholder,gallery);
	insertAfter(description,placeholder);
}

addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);