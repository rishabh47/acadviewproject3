	$(document).ready(function () {

		var name = localStorage.getItem("productName");
		var imgSrc = localStorage.getItem("imageSrc")
      	var brand = localStorage.getItem("brand");
      	var price = localStorage.getItem("price");
            var desc = localStorage.getItem("description");
            var qty = localStorage.getItem("quantity");
            var size = localStorage.getItem("size");
            var sold = localStorage.getItem("sold-by");
      	$('.product-name').text(name);
      	$('.product-img img').attr("src",imgSrc);
      	$('.brand').text(brand);
      	$('.price').text(price);
            $('.description').text(desc);
            $('.quantity').text(qty);
            $('.size').text(size);
            $('.sold').text(sold);	
	
});

