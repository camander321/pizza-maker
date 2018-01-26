function Topping(name, price) {
	this.name = name;
	this.price = price;
}

function Pizza() {
	this.toppings = Array(0);
	
	Pizza.prototype.addTopping = function(topping) {
		this.toppings.push(topping);
	}
	
	Pizza.prototype.getPrice = function() {
		var price = 0;
		this.toppings.forEach(function(t){
			price += t.price;
		});
		
		return "$" + price.toFixed(2);
	}
}

function getToppings() {
	console.log("not implemented");
}

function showToppings(toppings) {
	console.log("not implemented");
}


$(document).ready(function() {
	showToppings(getToppings())
	var pizza = new Pizza();
	pizza.addTopping(new Topping("cheese", 1));
	pizza.addTopping(new Topping("anchovis", 2));
	
	console.log(pizza.getPrice());
	
});
