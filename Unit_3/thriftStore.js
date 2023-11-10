const salesTax = [
    {state: 'Alabama', tax: .04},
    {state: 'Alaska', tax: .00},
    {state: 'Arizona', tax: .056},
    {state: 'Arkansas', tax: .065},
    {state: 'California', tax: .0725},
    {state: 'Colorado', tax: .029},
    {state: 'Connecticut', tax: .0635},
    {state: 'Delaware', tax: .00},
    {state: 'DC', tax: .06},
    {state: 'Florida', tax: .06},
    {state: 'Georgia', tax: .04},
    {state: 'Hawaii', tax: .04166},
    {state: 'Idaho', tax: .06},
    {state: 'Illinois', tax: .0625},
    {state: 'Indiana', tax: .07},
    {state: 'Iowa', tax: .06},
    {state: 'Kansas', tax: .065},
    {state: 'Kentucky', tax: .06},
    {state: 'Louisiana', tax: .0445},
    {state: 'Maine', tax: .055},
    {state: 'Maryland', tax: .06},
    {state: 'Massachusetts', tax: .0625},
    {state: 'Michigan', tax: .06},
    {state: 'Minnesota', tax: .06875},
    {state: 'Mississippi', tax: .07},
    {state: 'Missouri', tax: .04225},
    {state: 'Montana', tax: .00},
    {state: 'Nebraska', tax: .055},
    {state: 'Nevada', tax: .0685},
    {state: 'New Hampshire', tax: .00},
    {state: 'New Jersey', tax: .06625},
    {state: 'New Mexico', tax: .05125},
    {state: 'New York', tax: .04},
    {state: 'North Carolina', tax: .0475},
    {state: 'North Dakota', tax: .05},
    {state: 'Ohio', tax: .0575},
    {state: 'Oklahoma', tax: .045},
    {state: 'Oregon', tax: .00},
    {state: 'Pennsylvania', tax: .06},
    {state: 'Rhode Island', tax: .07},
    {state: 'South Carolina', tax: .06},
    {state: 'South Dakota', tax: .06},
    {state: 'Tennessee', tax: .07},
    {state: 'Texas', tax: .0625},
    {state: 'Utah', tax: .061},
    {state: 'Vermont', tax: .06},
    {state: 'Virginia', tax: .053},
    {state: 'Washington', tax: .065},
    {state: 'West Virginia', tax: .06},
    {state: 'Wisconsin', tax: .05},
    {state: 'Wyoming', tax: .04},
]; //salesTax is an object

//! Classes
class Store { // creates Store class with required values
    constructor (name, city, state, salesTax, inventory, balance, expense, profit, tax_paid) {
        this.name = name
        this.city = city
        this.state = state
        this.salesTax = salesTax  
        this.inventory = []
        this.balance = 200
        this.expense = 0
        this.profit = 0
        this.taxPaid = 0
    }
    static createNewStore(name, city, state, inventory, balance, expense, profit, tax_paid) { //creates a gap for information by removing salesTax from the parameters
        let stateTax = salesTax.find(salesTax => salesTax.state === state)  // salesTax.find iterates through the array within the salesTax const, comparing the values for salesTax.state to the state value provided by createNewStore,and returns the matching value when it finds it.
        return new Store (name, city, state, stateTax.tax, inventory, balance, expense, profit, tax_paid) // returns a new store WITH the sales tax info, then fires that information back to line 55
    }
    addToInventory(itemToAdd){ 
        if (itemToAdd.purchasePrice <= this.balance){ //checks the purchase price against the stores balance
            let newItem = (this.inventory.find (searchItem => searchItem.upc === itemToAdd.upc)) //compares the new items' UPC to the UPCs of existing items
            
            if (newItem === undefined) this.inventory.push(itemToAdd) //if the new item does not have the same UPC as existing stock it is added as a new item
            else (newItem.quantity += itemToAdd.quantity) //if the new item matches a current entry, then update the quantity
            

        let qtyPrice = itemToAdd.quantity * itemToAdd.purchasePrice  // computes overall purchase price and subtracts it from store's balance
            this.balance -=  qtyPrice
            this.expense += qtyPrice
            let markup = .30;
            itemToAdd.marketPrice = (itemToAdd.purchasePrice + (itemToAdd.purchasePrice * markup)) // computes the price at which items are sold at and pushes that amount to the marketPrice
            itemToAdd.marketPrice = parseFloat(itemToAdd.marketPrice.toFixed(2)) //displays the marketPrice to the second decimal place
        }  
        else 
        console.log (`You have insufficient funds to purchase ${itemToAdd.item}`) // else statement fires if there are not enough funds in the stores' balance to bring in the items
        } 
    
    sellItem(itemToRemove, itemQuantity) {
        let saleItem = this.inventory.find(itemToFind => itemToRemove.upc === itemToFind.upc) //checks inventory
        if (saleItem === undefined){console.log (`We are out of stock on ${itemToRemove.item}`) 
        return} //fires if the item does not exist in the store's inventory
        else if (itemQuantity > itemToRemove.quantity) {console.log(`We have an insufficient amount of ${itemToRemove.item} to sell.`)
        return} // fires if the requested quantity is more than the stock on hand
        else {
        this.profit += (saleItem.marketPrice - saleItem.purchasePrice - (saleItem.marketPrice * this.salesTax)) * itemToRemove.quantity
        this.profit = parseFloat(this.profit.toFixed(2))// displays the profit to the second decimal place
        this.taxPaid += (saleItem.marketPrice * this.salesTax) * itemToRemove.quantity // determines the amount of tax paid on the sale and pushes that amount to the store's taxPaid value
        this.taxPaid = parseFloat(this.taxPaid.toFixed(2))// displays the tax amount to the second decimal places
        this.balance += (saleItem.marketPrice) * itemToRemove.quantity // pushes the total amount of cash made by the sale to the store's balance value
        saleItem.quantity -= (itemQuantity) // adjusts stock quantity
        this.profit += ((saleItem.marketPrice * itemQuantity) - (saleItem.purchasePrice * itemQuantity)) //pushes the profit amount to the this.profit value
        }
    }
 }
 
   class Item { //creates Item class with required values
        constructor ( upc, item, type, purchasePrice, qty=1, marketPrice) {
            
            this.upc = upc
            this.item = item
            this.type = type
            this.purchasePrice = purchasePrice
            this.quantity = qty
            this.marketPrice = 0
        }
    }




//! CREATE STORES 
// Generate 3 different stores, each in a different state.
 
let store_MA = Store.createNewStore('Springfield413', 'Springfield', 'Massachusetts',[], 0, 0, 0, 0)

let store_CT = Store.createNewStore('Enfield860', 'Enfield', 'Connecticut', [], 0, 0, 0, 0 )

let store_VT = Store.createNewStore('Brattleboro802', 'Brattleboro', 'Vermont',[], 0, 0, 0, 0)


//! Inventory

let item1 = new Item (593457600384,'Stuffed Alligator','Toy',8.00, 7, ) // item1, item2, and item3 all have the same UPC, but are different items
let item2 = new Item (593457600384,'Stuffed Narwhal','Toy',8.00, 7, ) // who doesn't love a Narwhal ?
let item3 = new Item (593457600384,'Stuffed Elder God','Toy', 8.00, 7, )  // every child needs a tentacled horror beyond human comprehension
let item4 = new Item (293224171253, 'Cursed Toaster Oven', 'Appliance', 2.00, 1,) // these things are a fire hazard at baseline
let item5 = new Item (293224171253, 'Brass Cylinder of Sinister Black Goo', 'Home Decor', 5.12, 1,) // "There could be a limit as to what he can do as a volume of liquid."
let item6 = new Item (503979025428, 'Broken Laptop', 'Electronics', 24.00, 1,)  // the perfect gift for an ex-real estate agent turned secret agent/filmmaker in your life
let item7 = new Item (503979025428, 'Bread Machine', 'Appliance', 12.00, 6,) // there are always at least six of these at a thrift store
let item8 = new Item (815192370160, 'Allegedly Haunted Doll', 'Toy', 100.00, 1,) // every doll found in a secondhand store is creepy and likely haunted
let item9 = new Item (744882423781, 'Pocket Calculator', 'Electronics', .75, 1,) // because calculator
let item10 = new Item (593457600384,'Golden Alligator','Toy', 500.00, 7, ) // litmus test item....no store is wealthy enough to purchase its gilded jaws
//! Stocking

//* First Store 


store_MA.addToInventory(item1) // uses the .addToInventory method to update the respective store's stock
store_MA.addToInventory(item2)
store_MA.addToInventory(item3)

//console.log(store_MA);
//* Second Store

store_CT.addToInventory(item2)
store_CT.addToInventory(item4)
store_CT.addToInventory(item6)
store_CT.addToInventory(item10) //! this will trigger the console.log on ln 88 due to insufficient funds
//console.log(store_CT)

//* Third Store

store_VT.addToInventory(item5)
store_VT.addToInventory(item8)
store_VT.addToInventory(item9)

//console.log(store_VT);


//! Selling

//* First Store

store_MA.sellItem(item1, 1)
store_MA.sellItem(item3, 1)



//* Second Store

store_CT.sellItem(item2, 1)
store_CT.sellItem(item4, 2) //! triggers the console.log on ln 95 due to insufficient stock



//* Third Store
store_VT.sellItem(item8, 1)
store_VT.sellItem(item9, 1)
store_VT.sellItem(item10, 1) //! triggers the console.log on ln 93 due to no stock



//! Testing
console.log(store_MA)
console.log(store_CT)
console.log(store_VT)
/* 
    Simply console log each store to check the completed details.
*/

 