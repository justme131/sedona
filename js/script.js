function initialize(){
var e={
	zoom:9,center:new google.maps.LatLng(34.7550348,-111.7362262)};
	map=new google.maps.Map(document.getElementById("map-canvas"),e);{
		var o=new google.maps.LatLng(34.8650348,-111.7562262);
		new google.maps.Marker({position:o,map:map});
};
};

var link=document.querySelector(".btn-search"),
	popup=document.querySelector(".modal-content");

link.addEventListener("click",function(e){
	e.preventDefault();
	popup.classList.contains("modal-content-show")?
		popup.classList.remove("modal-content-show"):
			popup.classList.add("modal-content-show");
});

window.addEventListener("keydown",function(e){
	27==e.keyCode&&popup.classList.contains("modal-content-show") && popup.classList.remove("modal-content-show");
});

var map;google.maps.event.addDomListener(window,"load",initialize);