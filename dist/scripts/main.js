function initialize(){geocoder=new google.maps.Geocoder;var o=new google.maps.LatLng(43.2942778,5.3559142),e={zoom:14,center:o,scrollwheel:!1,panControl:!1,zoomControl:!1,scaleControl:!1,navigationControl:!1,mapTypeControl:!1,overviewMapControl:!1,streetViewControl:!1},a=new google.maps.Map(document.getElementById("map"),e),l=new google.maps.LatLng(43.2942778,5.3559142);new google.maps.Marker({position:l,map:a,title:"Marseille"})}$(document).ready(function(){$(window).scroll(function(){$(document).scrollTop()>150?$(".navbar").addClass("shrink"):$(".navbar").removeClass("shrink")})}),$('[data-spy="scroll"]').each(function(){$(this).scrollspy("refresh")}),$("#navbarSpy").on("activate.bs.scrollspy",function(){var o=$(".nav li ul li.active > a").attr("id");3>o?($(".zone").removeClass("color-2"),$(".zone").addClass("color-1"),$(".background-text").removeClass("color-2-text"),$(".background-text").addClass("color-1-text")):($(".zone").removeClass("color-1"),$(".zone").addClass("color-2"),$(".background-text").removeClass("color-1-text"),$(".background-text").addClass("color-2-text"))});var geocoder;google.maps.event.addDomListener(window,"load",initialize);