///////////////////////////////////////////////
var product = [
	{
		name: "Giày Yeezy V2 full trắng",
		price: 399000,
		image: "p1.png"
	}, 
	{
		name: "Giày Sneaker just do it",
		price: 615000,
		image: "p2.png"
	}, 
	{
		name: "Giày Air MAX 97 đen full",
		price: 455000,
		image: "p3.png"
	}, 
	{
		name: "Boots cổ cài cúc, da PU",
		price: 495000,
		image: "p4.png"
	}, 
	{
		name: "Giày Sneaker trắng filass",
		price: 268000,
		image: "p5.png"
	}, 
	{
		name: "Giày cao gót quai ngang LT",
		price: 99000,
		image: "p6.png"
	}, 
	{
		name: "Giày gót quai trong 7p ",
		price: 119000,
		image: "p7.png"
	}, 
	{
		name: "Cao gót Đinh Tán",
		price: 99000,
		image: "p8.png"
	}, 
	{
		name: "Giày gót vuông mũi nhọn",
		price: 100000,
		image: "p9.png"
	},
	{
		name: "Sandal Nữ Mẫu Mới",
		price: 179000,
		image: "p10.png"
	}, 
	{
		name: "Sandal 3 quai dán nam nữ",
		price: 140000,
		image: "p11.png"
	}, 
	{
		name: "sandal nữ đế gấu quai chéo",
		price: 110000,
		image: "p12.png"
	}
];
var shoes = [
	{
		name: "Giày Yeezy V2 full trắng",
		price: 399000,
		image: "p1.png"
	}, 
	{
		name: "Giày Sneaker just do it",
		price: 615000,
		image: "p2.png"
	}, 
	{
		name: "Giày Air MAX 97 đen full",
		price: 455000,
		image: "p3.png"
	},
	{
		name: "Giày Sneaker trắng filass",
		price: 268000,
		image: "p5.png"
	}
]
var high_heel = [
	{
		name: "Boots cổ cài cúc, da PU",
		price: 495000,
		image: "p4.png"
	},
	{
		name: "Giày cao gót quai ngang LT",
		price: 99000,
		image: "p6.png"
	}, 
	{
		name: "Giày gót quai trong 7p ",
		price: 119000,
		image: "p7.png"
	}, 
	{
		name: "Cao gót Đinh Tán",
		price: 99000,
		image: "p8.png"
	}, 
	{
		name: "Giày gót vuông mũi nhọn",
		price: 100000,
		image: "p9.png"
	}
]
var sandal = [
	{
		name: "Sandal Nữ Mẫu Mới",
		price: 179000,
		image: "p10.png"
	}, 
	{
		name: "Sandal 3 quai dán nam nữ",
		price: 140000,
		image: "p11.png"
	}, 
	{
		name: "sandal nữ đế gấu quai chéo",
		price: 110000,
		image: "p12.png"
	}
]
function shoe(){
	document.getElementById("products").innerHTML = "";
	for(var i = 0; i<shoes.length;i++){
	var products = document.getElementById("products");

	var line = document.createElement("div");
	var cen = document.createElement("center");

 	var imgObj = document.createElement("img");
    imgObj.src = shoes[i].image;

    var nameObj = document.createElement("p");
    nameObj.innerText = shoes[i].name;

    var priceObj = document.createElement("p");
    priceObj.innerText = shoes[i].price + " VND";

    var btnAdd = document.createElement("button");
    btnAdd.innerText = "add to cart";
    line.className = "col-1";

	btnAdd.onclick = function(arg){
		return function(){
		 	var iname = shoes[arg].name;
		    var itontai = -1;
		 	for(var k = 0; k<carts.length;k++){
	     		if(carts[k].name == iname){
	     			itontai = k;
	     		}
		     }
	     	if(itontai != -1){
	     		carts[itontai].quantity += 1;
	     	}else{
		         cart.push(
		         	{
		         		name: shoes[arg].name,
		 	        	price: shoes[arg].price,
			        	image: shoes[arg].image,
			        	quantity: 1
		         	}
	        	);
	     	}
		 	document.getElementById("carts").innerHTML = "";
		 }
	}(i);
	cen.appendChild(imgObj);
	cen.appendChild(nameObj);
	cen.appendChild(priceObj);
	cen.appendChild(btnAdd);
	line.appendChild(cen);
	products.appendChild(line);
	}
}
function high(){
	document.getElementById("products").innerHTML = "";
	for(var i = 0; i<high_heel.length;i++){
	var products = document.getElementById("products");

	var line = document.createElement("div");
	var cen = document.createElement("center");

 	var imgObj = document.createElement("img");
    imgObj.src = high_heel[i].image;

    var nameObj = document.createElement("p");
    nameObj.innerText = high_heel[i].name;

    var priceObj = document.createElement("p");
    priceObj.innerText = high_heel[i].price + " VND";

    var btnAdd = document.createElement("button");
    btnAdd.innerText = "add to cart";
    line.className = "col-1";

	btnAdd.onclick = function(arg){
		return function(){
		 	var iname = high_heel[arg].name;
		    var itontai = -1;
		 	for(var k = 0; k<carts.length;k++){
	     		if(carts[k].name == iname){
	     			itontai = k;
	     		}
		     }
	     	if(itontai != -1){
	     		carts[itontai].quantity += 1;
	     	}else{
		         cart.push(
		         	{
		         		name: high_heel[arg].name,
		 	        	price: high_heel[arg].price,
			        	image: high_heel[arg].image,
			        	quantity: 1
		         	}
	        	);
	     	}
		 	document.getElementById("carts").innerHTML = "";
		 }
	}(i);
	cen.appendChild(imgObj);
	cen.appendChild(nameObj);
	cen.appendChild(priceObj);
	cen.appendChild(btnAdd);
	line.appendChild(cen);
	products.appendChild(line);
	}
}
function sandals(){
	document.getElementById("products").innerHTML = "";
	for(var i = 0; i<sandal.length;i++){
	var products = document.getElementById("products");

	var line = document.createElement("div");
	var cen = document.createElement("center");

 	var imgObj = document.createElement("img");
    imgObj.src = sandal[i].image;

    var nameObj = document.createElement("p");
    nameObj.innerText = sandal[i].name;

    var priceObj = document.createElement("p");
    priceObj.innerText = sandal[i].price + " VND";

    var btnAdd = document.createElement("button");
    btnAdd.innerText = "add to cart";
    line.className = "col-1";

	btnAdd.onclick = function(arg){
		return function(){
		 	var iname = sandal[arg].name;
		    var itontai = -1;
		 	for(var k = 0; k<carts.length;k++){
	     		if(carts[k].name == iname){
	     			itontai = k;
	     		}
		     }
	     	if(itontai != -1){
	     		carts[itontai].quantity += 1;
	     	}else{
		         cart.push(
		         	{
		         		name: sandal[arg].name,
		 	        	price: sandal[arg].price,
			        	image: sandal[arg].image,
			        	quantity: 1
		         	}
	        	);
	     	}
		 	document.getElementById("carts").innerHTML = "";
		 }
	}(i);
	cen.appendChild(imgObj);
	cen.appendChild(nameObj);
	cen.appendChild(priceObj);
	cen.appendChild(btnAdd);
	line.appendChild(cen);
	products.appendChild(line);
	}
}
var cart = [];
for(var i = 0; i<product.length;i++){
	var products = document.getElementById("products");

	var line = document.createElement("div");
	var cen = document.createElement("center");

 	var imgObj = document.createElement("img");
    imgObj.src = product[i].image;

    var nameObj = document.createElement("p");
    nameObj.innerText = product[i].name;

    var priceObj = document.createElement("p");
    priceObj.innerText = product[i].price + " VND";

    var btnAdd = document.createElement("button");
    btnAdd.innerText = "add to cart";
    line.className = "col-1";

	btnAdd.onclick = function(arg){
		return function(){
		 	var iname = product[arg].name;
		    var itontai = -1;
		 	for(var k = 0; k<carts.length;k++){
	     		if(carts[k].name == iname){
	     			itontai = k;
	     		}
		     }
	     	if(itontai != -1){
	     		carts[itontai].quantity += 1;
	     	}else{
		         cart.push(
		         	{
		         		name: product[arg].name,
		 	        	price: product[arg].price,
			        	image: product[arg].image,
			        	quantity: 1
		         	}
	        	);
	     	}
		 	document.getElementById("carts").innerHTML = "";
		 }
	}(i);

cen.appendChild(imgObj);
cen.appendChild(nameObj);
cen.appendChild(priceObj);
cen.appendChild(btnAdd);
line.appendChild(cen);
products.appendChild(line);
}

function displayCart(){
	document.getElementById("carts").innerHTML = "";
	for(var i = 0; i < cart.length; i++){
		// var cart = document.getElementById("cart");
		var name2 = document.createElement("p");
		var price2 = document.createElement("p");
		var image2 = document.createElement("img");
		var quantity2 = document.createElement("p");
		var butDel = document.createElement("button");
		var butOrd = document.createElement("button");
		var line = document.createElement("div");

		name2.innerText = cart[i].name;
		price2.innerText = cart[i].price + " VND";
		image2.src = cart[i].image;
		quantity2.innerText = "Quantity: "+cart[i].quantity;
		butDel.innerText = "Delete";
		butOrd.innerText = "Order";

		butDel.className = "butDel";
		line.className = "col-2";

		butDel.onclick=function(ar){
			return function(){
				cart.splice(ar,1);
				displayCart();
		 	}
		}(i);

		butOrd.onclick=function(ar){
			return function(){
				
		 	}
		}(i);

		carts.appendChild(line);
		line.appendChild(image2);
		line.appendChild(name2);
		line.appendChild(price2);
		line.appendChild(quantity2);
		line.appendChild(butDel);
		line.appendChild(butOrd);
	}
	document.getElementById("products").style.display = "none";
	document.getElementById("carts").style.display = "block";
}
console.log(cart);
function displayProduct(){
	document.getElementById("products").style.display = "grid";
	document.getElementById("carts").style.display = "none";
}
function research(){
	var search = document.getElementById('search').value;
	for(var i = 0; i < product.length; i++){
		if(search == product[i].name){
			document.getElementById("products").innerHTML = "";
			console.log(product[i]);

			var div = document.createElement("div");
            var imgObj = document.createElement("img");
            imgObj.src = product[i].image;

            var nameObj = document.createElement("p");
            nameObj.innerText = product[i].name;

            var priceObj = document.createElement("p");
            priceObj.innerText = product[i].price;

            var btnAdd = document.createElement("button");
            btnAdd.innerText = "add to cart";

            btnAdd.onclick = function(item) {
                return function() {
                    cart.push(product[item]);
                    console.log(cart);
                    order();
                }
            }(i);
            div.append(imgObj);
            div.append(nameObj);
            div.append(priceObj);
            div.append(btnAdd);
            products.appendChild(div);
			break;
		}
		// else{
		// 	alert("Sản phẩm không tồn tại");
		// }
	}
}

