# _Pizza Maker_

#### _Allows users to make and order custom pizzas, 1/26/18_

#### By _**Cameron Anderson**_

## Description

_Gives users a list of toppings to add to their pizza, and allows them to choose small medium or large. Pizza cost is determined by size and toppings. Additional pizzas may be added. Each added pizza may be clicked on to display toppings and cost. After adding at least one pizza, users are given the option to place the order for pickup or delivery. If delivery is selected, name, number and address will be requested._

### Specifications

* Pizza description and price will be created and added according to size selected toppings.
  * Example input:
    * Toppings: 'Extra Cheese'
    * Size: Large
  * Example output:
    * 'Large Pizza'
      * 'Large: $15.00'
      * 'Extra Cheese: $1.00'
      * 'Total: $16.00'

* Total price will be updated with each added pizza.
  * Example input:
    * $15.75 Pizza
    * $9.50 Pizza
  * Example output:
    * 'Total: $25.25'
	
* Adding at least one pizza shows buttons for pickup and delivery.
  * Clicking 'pickup' hides everything and shows confirmation message.
  * Clicking 'delivery' hides everything and shows name and address form.
    * Clicking submit on address form hides form and shows confirmation message.


## Setup/Installation Requirements

* _Open pizza-maker folder and open 'index.html' in your favorite web browser._

## Support and contact details

_email: chamburg321@gmail.com_
OR
_open an issue in github_

## Technologies Used

_HTML, CSS, Bootstrap, Javascript and JQuery_

### License

*MIT License*

Copyright (c) 2018 **_Cameron Anderson_**

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.