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
