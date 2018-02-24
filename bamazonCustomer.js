//Challenge #1 of the Homework - MySQL

//Require NPM modules

var mysql = require("mysql");
var inquirer = require("inquirer");

//create the connection information for the sql database
var connection = mysql.createConnection({
	host:  'localhost',
	port: 3306,

	//Your username
	user: 'root', 

	//Your password
	password: 'brandon$98', 
	database: 'bamazon_DB'
});

//This function will validate the customer's input to make sure that the customer is entering only positive numbers

function validatetheInput(value) {

	//The Number.isInteger() method determines whether the passed value is an integer.
	//The parseFloat() function parses an argument and returns a floating point number.

	var integer  = Number.isInteger(parseFloat(value));

	//The Math.sign() function returns the sign of a number, indicating whether the number is positive, negative or zero.
	var sign = Math.sign(value);

	if(integer && (sign === 1)) {
		return true;
	} else {
		return 'Please enter a whole number greater than zero.';
	}
}


//PromptCustPurchase prompts the customer for the item/quanity he or she wants to order
function promptCustPurchase() {
	inquirer.prompt([

		//first user input

	{
		type: 'input',
		name: 'item_id',
		message: 'Please enter the Item ID number you would like to purchase.',
		validate: validatetheInput, 
		//Filter receives the customer input and returns the filtered value to be used inside the program
		filter: Number
	},
		//second user input

	{
		type: 'input', 
		name: 'quantity', 
		message: 'Enter quantity.',
		validate: validatetheInput,
		filter: Number
	}

	]).then(function(input) {

		//stores the customer inputs for the item id and the quantity

		var item = input.item_id;
		var quantity = input.quantity;

		//Query the database to get the information for the customer.

		var queryString = 'SELECT * FROM products WHERE ?';

		connection.query(queryString, {item_id: item}, function(err, data) {
			if (err) throw err;


				//If customer selects an invalid item id, the data array will not be populated

				if(data.length === 0) {
					console.log('ERROR: Invalid Item ID. Please select a valid Item ID.');
					displayInventory();
				} else {
				var productData = data[0];
				
				//checking to see if there is quantity for that item in stock
				if (quantity <= productData.stock_quantity) {
					console.log('Congratulations, the product you requested is in stock! Placing your order now!');

					//updating the query string
					var updateQueryString = 'UPDATE products SET stock_quantity = ' + (productData.stock_quantity - quantity) + ' WHERE item_id = ' + item;
					var customerTotalCalc = quantity * productData.price;
					var customerTotal = customerTotalCalc.toFixed(2);
					//console.log(customerTotal);

					//update the inventory
					connection.query(updateQueryString, function(err, data) {
						if (err) throw err;
						//console.log('Your order has been placed! Your total is $ ' + productData.price * quantity);
						console.log('Your order has been placed! Your total is $ ' + customerTotal);
						console.log('Thank you for shopping with us!');
						console.log("\n----------------------------------------------------------------------------------------------------------\n");
						connection.end();
					})
				} else {
					console.log('Sorry, there is not enough product in stock for this item; your order can not be placed at this time.');
					console.log('Please modify your order.');
					console.log("\n--------------------------------------------------------------------------------------------------------------\n");

					displaytheInventory();
				}
			}
		})
	})

}



//Display the current inventory from the database and output to the console

function displaytheInventory() {
	
 	queryString = 'SELECT * FROM products';

 	connection.query(queryString, function(err, data) {
    if (err) throw err;

    console.log('Inventory in Stock:');
    console.log('--------------------------------------------------------------------------------------------------------------------------------\n');

    var invent = '';
    for (var i = 0; i < data.length; i++) {
    	invent = '';
    	invent += 'Item ID: ' +data[i].item_id + ' // ';
    	invent += 'Product Name: ' + data[i].product_name + ' // ';
    	invent += 'Department: ' + data[i].department_name + ' // ';
    	invent += 'Price: $' + data[i].price + '\n';
    	
    	console.log(invent);
    }

    console.log("---------------------------------------------------------------------------------------------------------------------------------\n");

    //Prompt the customer for item/quantity they would like to purchase
    promptCustPurchase();
    
})
}
//runBamazon will execute the main application logic
function runBamazon() {
	displaytheInventory();
}
runBamazon();