function Topping(name, price) {
	this.name = name;
	this.price = price;
}

function Pizza() {
	this.toppings = Array(0);
	this.size = "md";
	
	Pizza.prototype.addTopping = function(topping) {
		this.toppings.push(topping);
	}

	Pizza.prototype.getPrice = function() {
		var price = 0;
		switch(this.size) {
			case "Small":
				price += 8;
				break;
			case "Medium":
				price += 12;
				break;
			case "Large":
				price += 15;

		}
		
		this.toppings.forEach(function(t){
			price += t.price;
		});
		
		return "$" + price.toFixed(2);
	}
}

function getToppings() {
	var toppings = Array(0);
	
	toppings.push(new Topping("Extra cheese", 1));
	toppings.push(new Topping("Pepperoni", 0.5));
	toppings.push(new Topping("Mushrooms", 0.5));
	toppings.push(new Topping("Onions", 0.5));
	toppings.push(new Topping("Sausage", 1));
	toppings.push(new Topping("Bacon", 1));
	toppings.push(new Topping("Black olives", 0.25));
	toppings.push(new Topping("Green peppers", 0.5));
	toppings.push(new Topping("Pineapple", 0.25));
	toppings.push(new Topping("Spinach", 0.25));
	toppings.push(new Topping("Anchovies", 1));
	
	return toppings;
}

function showToppings(toppings) {
	var list = $("#topping-list");
	toppings.forEach(function(t, i) {
		var box = "<input type='checkbox' name='topping' id='t" + i + "' value='" + i + "'>"
		var label = "<label for='t" + i + "'>" + box + t.name + "</label><br>";
		var div = "<div class='col-md-3'>" + label + "</div>";
		list.append(div);
	});
}




$(document).ready(function() {
	var toppings = getToppings();
	showToppings(toppings);
	
	$("#form").submit(function(event) {
		event.preventDefault()
		
		var pizza = new Pizza();
		pizza.size = $("#size").val();
		$("input:checkbox[name=topping]:checked").each(function(){
			var idx = parseInt($(this).val());
			pizza.addTopping(toppings[idx]);
		});
		$("#cart").append("<li class='order-item'>" + pizza.size + " Pizza</li>")
		$("#cart").fadeIn();
		
		$("order-item").last().click(function() {
			
		});
	});
});
