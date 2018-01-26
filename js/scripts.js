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

	Pizza.prototype.getBasePrice = function() {
		switch(this.size) {
			case "Small":
				return 8;
			case "Medium":
				return 12
			case "Large":
				return 15
		}
	}
	
	Pizza.prototype.getTotal = function() {
		var price = this.getBasePrice();
		this.toppings.forEach(function(t){
			price += t.price;
		});
		return price;
	}
}

function formatDollars(number) {
	return "$" + number.toFixed(2);
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

function addPizza(toppings) {
	
	var pizza = new Pizza();
	pizza.size = $("#size").val();
	$("input:checkbox[name=topping]:checked").each(function(){
		var idx = parseInt($(this).val());
		pizza.addTopping(toppings[idx]);
	});
	$("#cart").prepend("<li class='order-item'>" + pizza.size + " Pizza</li>")
	$("#cart").fadeIn();
	var item = $(".order-item").first();
	
	item.append("<div class='well item-info'></div>");
	var info = item.children(".well");
	var line = "<li>" + pizza.size + " " + formatDollars(pizza.getBasePrice()) + "</li>";
	info.append(line);
	pizza.toppings.forEach(function(t) {
		var line = "<li>" + t.name + " " + formatDollars(t.price) + "</li>";
		info.append(line);
	});
	info.append("<li class='total'>Total: " + formatDollars(pizza.getTotal()) + "</li>");
	info.hide();
	
	item.click(function() {
		info.fadeToggle();
	});
	
	return pizza;
}

function showConfirmation() {
	$(".well").hide();
	$("#confirmation").fadeIn();
}



$(document).ready(function() {
	var pizzaOrder = Array(0);
	var toppings = getToppings();
	showToppings(toppings);
	
	$("#order-form").submit(function(event) {
		event.preventDefault()
		pizzaOrder.push(addPizza(toppings));
		var total = 0;
		pizzaOrder.forEach(function(p) {
			total += p.getTotal();
		});
		$("#price-total").text(formatDollars(total));
	});
	
	$("#pickup").click(function() {
		showConfirmation();
	});
	
	$("#delivery").click(function() {
		$(".well").hide();
		$("#delivery-info").fadeIn();
	});
	
	$("#address-btn").click(function() {
		showConfirmation();
	});
});
