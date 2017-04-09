	$(document).ready(function () {
		var name = localStorage.getItem("productName");
		var imgSrc = localStorage.getItem("imageSrc")
      	var brand = localStorage.getItem("brand");
      	var price = localStorage.getItem("price");
      	$('.product-name').text(name);
      	$('.product-img img').attr("src",imgSrc);
      	$('.brand').text(brand);
      	$('.price').text(price);	
	});	
