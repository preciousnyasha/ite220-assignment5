var shop = {
	customerName: "Precious",
	totalPrice: 0,
	products : [
	 "Brownie",
	 "Blackout cake",
	 "Charlotte",
	 "Caterpillar cake",
	 "Depression cake"

	 ],
	 prices :[15, 20, 30, 80, 100],

	 displayCustomerName: function () {
	 	var customerElement = document.getElementById("customer-name");
	 	customerElement.innerHTML = this.customerName;
	 },
	 displayProductList: function(){
	 	var productsText = "";
	 	var productsElement = document.getElementById("product-list");

	 	for(var i =0; i<5; i++){
	 		productsText += "<li class='list-group-item'>" + this.products[i] 
			+"<span class='badge'>$"+ this.prices[i]+ "</span></li>";
	 	}
	 	productsElement.innerHTML = productsText;
	 },
	 calculateTotlePrice: function(){
	 	var sum = 0;
	 	var discount = 0;

	 	for(var i=0; i<5; i++){
			sum += this.prices[i];
		}

		return discount = sum * 0.75;

	 },
	 displaytotalPriceit: function(){	

		var totalText = document.getElementById("price");

		totalText.innerHTML = "$"+ this.calculateTotlePrice() + " <span class='badge progress-bar-danger'>25% off</span>";
	 }
}
shop.displayCustomerName();
shop.displayProductList();
// shop.calculatrTotlePrice();
shop.displaytotalPriceit();

// var customername = "Precious"
// var price = 10;
// var quantity = 3;
// var totalPrice = price * quanttity;
// document.getElementById("customer-name").innerHTML = "Precious";
// document.getElementById("price").innerHTML = "$"+ totalPrice;
/*var products = [
 "Brownie",
 "Blackout cake",
 "Charlotte",
 "Caterpillar cake",
 "Depression cake"

];
var prices = [15,20,30,80,100];

var productsText = "";
var productsElement = document.getElementById("product-list");

for(var i=0; i<5; i++){
	productsText += "<li class='list-group-item'>" + products[i] 
	+"<span class='badge'>$"+ prices[i]+ "</span></li>";

	console.log(i)
	console.log("Product " + i + ": " + productsText)

}
//productsText += productsText+ "<li class='list-group-item'>" + products[0] +"<span class='badge'>$"+ price[0]+ "</span></li>";

productsElement.innerHTML = productsText;

var sum = 0;
var totalPrice = document.getElementById("price");

for(var i=0; i<5; i++){
	sum += prices[i];
}

var discount = sum * 0.75;

totalPrice.innerHTML = "$"+ discount + " <span class='badge progress-bar-danger'>25% off</span>";
// ---------------------------------------------------------------------

var d = new Date(); //get date 1-31
var h = d.getHours(); //gat 0-23
var r = document.getElementById("Greeting");

if(h>0 && h<12){
	r.innerHTML = "Good morning";

}else if(h>=12 && h<18){
	r.innerHTML = "Good afternoon";

}else{
	r.innerHTML = "Good evening";

}*/