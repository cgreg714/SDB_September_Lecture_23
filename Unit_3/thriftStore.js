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
];
//! Classes
class Store {
    constructor (name, city, state, salesTax, inventory, balance, expense, profit, tax_paid) {
        this.name = name
        this.city = city
        this.state = state
        this.salesTax = salesTax  // sales tax is an array, use method to filter/find specific iteration 
        this.inventory = []
        this.balance = 200
        this.expense = 0
        this.profit = 0
        this.tax_paid = 0
    }
    static createNewStore(name, city, state, inventory, balance, expense, profit, tax_paid) { //create a gap for information by removing salesTax from the parameters
        let stateTax = salesTax.find(({salesTax}) => salesTax === this.state) //method to locate the state appropriate sales tax
        return new Store (name, city, state, stateTax, inventory, balance, expense, profit, tax_paid) // returns a new store WITH the sales tax info, then fires that information back to line 55
    }
    addToInventory(itemToAdd){
        this.inventory.push(itemToAdd)
    } 

    sellItem(itemToRemove){
        this.inventory.splice(itemToRemove)
    }
}
 
    class Item {
        constructor (upc, item, type, purchasePrice, qty=1, marketPrice) {
            this.upc = upc
            this.item = item
            this.type = type
            this.purchasePrice = purchasePrice.toFixed(2)
            this.quantity = qty
            this.marketPrice = marketPrice.toFixed(2)
        }
        
    }

//


//! CREATE STORES 
// Generate 3 different stores, each in a different state.
 
let store_MA = Store.createNewStore('Springfield413', 'Springfield', 'Massachusetts',[], 0, 0, 0, 0)

let store_CT = new Store ('Enfield860', 'Enfield', 'CT', .635, [], 0, 0, 0, 0 )

let store_VT = new Store ('Brattleboro802', 'Brattleboro', 'VT', .06, [], 0, 0, 0, 0)

console.log(store_MA)
//! Inventory

let item1 = new Item (593457600384,'Stuffed Alligator','Toy',8.00, 7, 10.40)
let item2 = new Item (593457600384,'Stuffed Narwhal','Toy',8.00, 7, 10.40)
let item3 = new Item (593457600384,'Stuffed Elder God','Toy', 8.00, 7, 10.40)
let item4 = new Item (293224171253, 'Cursed Toaster Oven', 'Appliance', 2.00, 1, 2.60)
let item5 = new Item (293224171253, 'Brass Cylinder of Sinister Black Goo', 'Home Decor', 5.12, 1, 6.66)
let item6 = new Item (503979025428, 'Broken Laptop', 'Electronics', 24.00, 1, 31.20)
let item7 = new Item (503979025428, 'Bread Machine', 'Appliance', 12.00, 2, 15.60)
let item8 = new Item (815192370160, 'Allegedly Haunted Doll', 'Toy', 100.00, 1, 130.00)
let item9 = new Item (744882423781, 'Pocket Calculator', 'Electronics', .75, 1, .98)


//! Stocking

//* First Store

store_MA.addToInventory(item1)
store_MA.addToInventory(item3)
store_MA.addToInventory(item5)

//* Second Store

store_CT.addToInventory(item2)
store_CT.addToInventory(item4)
store_CT.addToInventory(item6)

//* Third Store

store_VT.addToInventory(item7)
store_VT.addToInventory(item8)
store_VT.addToInventory(item9)

console.log(store_MA);
console.log(store_CT);
console.log(store_VT);
//! Selling

//* First Store

store_MA.sellItem(item1, 3)

console.log(store_MA);
console.log(store_CT);
console.log(store_VT);

const store_MA_bank = [
    {balance: 200, expense: 0, profit: 0, taxPaid: 0 }
 ]

//* Second Store

const store_CT_bank = [
    {balance: 200, expenses: 0, profit: 0, taxPaid: 0 }
 ]

//* Third Store

const store_VT_bank = [
    {balance: 200, expenses: 0, profit: 0, taxPaid: 0 }
 ]

//! Testing
/* 
    Simply console log each store to check the completed details.
*/

  /*
console.log(item1);
console.log(item2);
console.log(item3);
console.log(item4);
console.log(item5);
console.log(item6);
console.log(item7);
console.log(item8);
console.log(item9);
*/
//at least this mess displays the f-ing items