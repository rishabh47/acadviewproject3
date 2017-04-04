$(document).ready(function(){
	$.ajax({
	url:"http://acadprojects.com/py/fabricKart/sort/items",
	type:'GET',
	data: {
	"sort_by": "relevance",
	"page": 0
	},
	success: function(response){
	console.log(response);
	var data=response["data"];
	data.forEach(function(product,index){
	var productName=product["item_name"];
	var image=product["image"];
	var brand=product["brand"];
	var price=product["price"];

	var productNameTag= $('<div class="productName "></div>').html(productName);
	var imageTag= $('<img width="150px" height= "150px">').attr("src",image);
	var brandTag= $('<div class="brand"></div>').html(brand);
	var priceTag= $('<div class="price"></div>').html(price);
	var productContainer= $('<div class="product-container col-md-3 col-md-offset-1 "></div>').append(imageTag,productNameTag,brandTag,priceTag);
	$('.container').append(productContainer);

	});
	}
	});
});