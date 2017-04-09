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

				var productNameTag = $('<div class="product-name "></div>').html(productName);
				var imageTag = $('<img class ="imgg"width="150px" height= "200px">').attr("src",image);
				var brandTag = $('<div class="brand"></div>').html(brand);
				var priceTag = $('<div class="price"></div>').html(price);
				var cart = $('<img class="small-cart" height ="20px" width="20px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Shopping_cart_icon.svg/2000px-Shopping_cart_icon.svg.png">')
				var productContainer = $('<div class="product-container col-md-3 col-md-offset-1 "></div>').append(imageTag,productNameTag,brandTag,priceTag,cart);
				$('.product-container-parent').append(productContainer);

				$(cart).click(function(){
					var pn = $($(this).parent().find(".product-name")).text();
					var p = $($(this).parent().find(".price")).text();
					var td1 = $('<td></td>').text(pn);
					var td2 = $('<td></td>').html("<input type='number' value='1'>");
					var td3 = $('<td></td>').text(p);
					var td4 = $('<td></td>').text(p);
					var tableRow = $('<tr></tr>').append(td1, td2, td3, td4);
					$('.table-heading').after(tableRow);
				});
				     $(productContainer).click(function(){
				      	var name = $($(this).find('.product-name')).html();
				      	var imgSrc = $($(this).find('.imgg')).attr("src");
				      	var brand = $($(this).find('.brand')).html();
				      	var price = $($(this).find('.price')).html();
				      	localStorage.setItem("productName", name);
				      	localStorage.setItem("imageSrc", imgSrc);
				      	localStorage.setItem("brand", brand);
				      	localStorage.setItem("price", price);
				      	window.location.href = "product.html";
      				});
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

$(document).ready(function(){
	getProductList(0);
	$('.pagination li').click(function () {
		var pgno = parseInt($(this).text());
		getProductList(pgno-1);
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
 