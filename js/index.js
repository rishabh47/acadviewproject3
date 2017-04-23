function fillProduct(response) {
		$('.product-container-parent').empty();
			console.log(response);
			var data = response["data"];
			data.forEach(function(product,index)
			{
				var productName = product["item_name"];
				var image = product["image"];
				var brand = product["brand"];
				var price = product["price"];
				var desc = product["description"];
				var qty = product["quantity"];
				var size = product["size"];
				var sold = product["sold_by"];


				var productNameTag = $('<div class="product-name "></div>').html(productName);
				var imageTag = $('<img class ="imgg"width="150px" height= "200px">').attr("src",image);
				var brandTag = $('<div class="brand"></div>').html(brand);
				var priceTag = $('<div class="price"></div>').html(price);
				var descTag = $('<div class="description hidden"></div>').html(desc);
				var qtyTag = $('<div class="quantity hidden"></div>').html(qty);
				var sizeTag = $('<div class="size hidden"></div>').html(size);
				var soldTag = $('<div class="sold-by hidden"></div>').html(sold);
				var cart = $('<img class="small-cart" height ="20px" width="20px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Shopping_cart_icon.svg/2000px-Shopping_cart_icon.svg.png">');
				var productContainer = $('<div class="product-container col-md-3 col-md-offset-1 "></div>').append(imageTag,productNameTag,brandTag,priceTag,descTag,qtyTag,sizeTag,soldTag,cart);
				$('.product-container-parent').append(productContainer);

				$(cart).click(function(){
					var pn = $($(this).parent().find(".product-name")).text();
					var p = $($(this).parent().find(".price")).text();
					var td1 = $('<td></td>').text(pn);
					var td2 = $('<td></td>').html("<input class='qtyy' type='text' value='1'>");
					var td3 = $('<td></td>').text(p);
					var total;
					$('.qtyy').keyup(function(){
 
  					var qty = $('.qtyy').val();
  					console.log(qty);
					p = ($($(this).parent().find(".price")).text())*qty;
					});

					var td4 = $('<td></td>').text(p);
					var tableRow = $('<tr></tr>').append(td1, td2, td3, td4);
					$('.table-heading').after(tableRow);
 				});
				
				   $(imageTag).click(function(){
				      	var name = $($(this).parent().find('.product-name')).html();
				      	var imgSrc = $($(this).parent().find('.imgg')).attr("src");
				      	var brand = $($(this).parent().find('.brand')).html();
				      	var price = $($(this).parent().find('.price')).html();
				      	var desc = $($(this).parent().find('.description')).html();
				      	var qty = $($(this).parent().find('.quantity')).html();
				      	var size = $($(this).parent().find('.size')).html();
				      	var sold = $($(this).parent().find('.sold-by')).html();
				      	localStorage.setItem("productName", name);
				      	localStorage.setItem("imageSrc", imgSrc);
				      	localStorage.setItem("brand", brand);
				      	localStorage.setItem("price", price);
				      	localStorage.setItem("description", desc);
				      	localStorage.setItem("quantity", qty);
				      	localStorage.setItem("size", size);
				      	localStorage.setItem("sold-by", sold);
				      	window.location.href = "product.html";
      				} );
			});
		}
function getProductList(pgno) {
	$.ajax({ 
		url:"http://acadprojects.com/py/fabricKart/sort/items",
		type:'GET',
		data: {
			"sort_by": "relevance",
			"page": pgno
		},
		success: function(response){
			fillProduct(response);
		}
	});

}
$('.logo-myntra').click(function(response){
	getProductList(pgno);
});

$('.search-button').click(function (argument){
	getProductList(pgno);
});

$(document).ready(function(){
	getProductList(0);

	$('.search-button').click(function (argument) {
		var searchQuery = $('.search-box').val();
		$.ajax({
			url: "http://acadprojects.com/py/fabricKart/filter/items",
			type: "POST",
			beforeSend: function (arg) {
				arg.setRequestHeader("content-type", "application/json");
			},
			data: JSON.stringify({
				"page":0,
				"filters":[
				{
					"name":"brand",
					"value":[searchQuery]
				}
				]
		}),
		success: function (argume) {
			fillProduct(argume);
		}
		});
	});
	$('.men').click(function (argument) {
		$.ajax({
			url: "http://acadprojects.com/py/fabricKart/filter/items",
			type: "POST",
			beforeSend: function (arg) {
				arg.setRequestHeader("content-type", "application/json");
			},
			data: JSON.stringify({
				"page":0,
				"filters":[
				{
					"name":"gender",
					"value":"male"
				}
				]
		}),
		success: function (argume) {
			fillProduct(argume);
		}
		});
	});
	$('.women').click(function (argument) {
		$.ajax({
			url: "http://acadprojects.com/py/fabricKart/filter/items",
			type: "POST",
			beforeSend: function (arg) {
				arg.setRequestHeader("content-type", "application/json");
			},
			data: JSON.stringify({
				"page":0,
				"filters":[
				{
					"name":"gender",
					"value":"female"
				}
				]
		}),
		success: function (argume) {
			fillProduct(argume);
		}
		});
	});
	$('.Kid').click(function (argument) {
		$.ajax({
			url: "http://acadprojects.com/py/fabricKart/filter/items",
			type: "POST",
			beforeSend: function (arg) {
				arg.setRequestHeader("content-type", "application/json");
			},
			data: JSON.stringify({
				"page":0,
				"filters":[
				{
					"name":"gender",
					"value":"kid"
				}
				]
		}),
		success: function (argume) {
			fillProduct(argume);
		}
		});
	});
	$('.search-button').click(function (argument) {
		var searchQuery = $('.search-box').val();
		$.ajax({
			url: "http://acadprojects.com/py/fabricKart/filter/items",
			type: "POST",
			beforeSend: function (arg) {
				arg.setRequestHeader("content-type", "application/json");
			},
			data: JSON.stringify({
				"page":0,
				"filters":[
				{
					"name":"item_category",
					"value":[searchQuery]
				}
				]
		}),
		success: function (argume) {
			fillProduct(argume);
		}
		});
	});
	$('.search-button').click(function (argument) {
		var searchQuery = $('.search-box').val();
		$.ajax({
			url: "http://acadprojects.com/py/fabricKart/filter/items",
			type: "POST",
			beforeSend: function (arg) {
				arg.setRequestHeader("content-type", "application/json");
			},
			data: JSON.stringify({
				"page":0,
				"filters":[
				{
					"name":"item_name",
					"value":[searchQuery]
				}
				]
		}),
		success: function (argume) {
			fillProduct(argume);
		}
		});
	});
		$('.pagination li').click(function () {
		var pgno = parseInt($(this).text());
		getProductList(pgno-1);
	});

});
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
 function initMap() {
        var uluru = {lat:26.774634, lng:75.8767171};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
// $('.selll-button').click(function (argument) {
// 	$.ajax({
// 		url: "http://acadprojects.com/py/fabricKart/sell",
// 		type: "POST",
// 		beforeSend: function (arg) {
// 				arg.setRequestHeader("content-type", "application/json");
// 			},
// 			data: JSON.stringify({
// 				"item_name":
// 				 "brand":
// 				 "gender":
// 				 "size":
// 				 "quantity":
// 				 "item_category":
// 				 "price":
// 				 "image":
// 				 "description":
// 				 "sold_by":
// 	})	
// })