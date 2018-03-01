# bamazon

A Node.js & MySQL digital storefront. This is a command line Node app that mimics a beloved online retailer.

I created a BamazonCustomer.js that receives orders from customers via the command line and interfaces with mySQL to deplete stock from the store's inventory.  

 INSTRUCTIONS:
 
 1.  Create a MySQL Database called bamazon.
 
 <img width="208" alt="1stimage" src="https://user-images.githubusercontent.com/30795207/36822609-e234fcf6-1cc6-11e8-81e0-fc02df9daf49.png">
 
 2.  Then create a table inside of that database called products.
 
 <img width="218" alt="2nd image" src="https://user-images.githubusercontent.com/30795207/36822799-f7db94f6-1cc7-11e8-9e95-192feb61ba9d.png">
 
 3.  The products table should have each of the following columns:
     * item_id (unique id for each product)
     * product_name (Name of the product)
     * department_name
     * price (cost to customer)
     * stock_quantity (how much of the product is available in the store)

<img width="616" alt="3rd image" src="https://user-images.githubusercontent.com/30795207/36822883-6cba0bf4-1cc8-11e8-968d-f28d9f314cc4.png">

 4.  Populate this database with around 10 different products (i.e. Insert "mock" data rows into this database and table).
 
 <img width="477" alt="4th image" src="https://user-images.githubusercontent.com/30795207/36822957-bf753576-1cc8-11e8-8ecf-38ec4b1267e8.png">
 
 5.  Then create a Node application called bamazonCustomer.js. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.
 
 6.	The app should then prompt users with two messages:
    * The first should ask them the ID of the product they would like to buy;  
    * The second message should ask how many units of the product they would like to buy.

 7.	Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.
 
 <img width="636" alt="5th image" src="https://user-images.githubusercontent.com/30795207/36823084-580f0f50-1cc9-11e8-9c87-4897b4ba3c33.png">
 
    * If not, the app should log a phrase like "insufficient quantity" and then prevent the order from going through.

<img width="766" alt="6th image" src="https://user-images.githubusercontent.com/30795207/36823200-e0dcb788-1cc9-11e8-85c9-261ed19a7bfd.png">

 8.  However, if your store does have enough of the product, you should fulfill the customer's order.
    * This means updating the SQL database to reflect the remaining quantity.
    * Once the update goes through, show the customer the total cost of their purchase.

 <img width="636" alt="5th image" src="https://user-images.githubusercontent.com/30795207/36823084-580f0f50-1cc9-11e8-9c87-4897b4ba3c33.png">
 
 UPDATING MYSQL - DATABASE
 
 STARTING AMOUNT
 
 <img width="464" alt="8th image" src="https://user-images.githubusercontent.com/30795207/36823283-6512cbb4-1cca-11e8-9f45-8e2cc7ca1f8a.png"> 
 
 TOTAL AMOUNT AFTER DEDUCTING 50
 
 
 
 

 
 
 
 
