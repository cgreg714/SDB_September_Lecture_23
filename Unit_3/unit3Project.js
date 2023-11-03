//? This array is not to be changed.
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

class Store {
    constructor (name, city, state, stateTax, inventory, balance, expense, profit, tax_paid) {
        this.name = name
        this.city = city
        this.state = state
        this.sales_tax = stateTax
        this.inventory = []
        this.balance = 200
        this.expense = 0
        this.profit = 0
        this.tax_paid = 0
    }

// static factory method will go in store class 

static addUpchargeForProfit(purchasePrice) { //combine with addItem method?
    let marketPrice = purchasePrice + (purchasePrice * .30).toFixed(2);
    return new Item (marketPrice);
}

addTax(x) { //how the f do i call upon the state tax percentage in the salesTax const? 
    let percentage = .625;
    let priceAtCost = this.purchasePrice;
    this.sales_tax = (purchasePrice + (purchasePrice * percentage)).toFixed(2);
}
    addItem(stock){ //will this even do anything?
        this.inventory.push(stock);
    }

    sellItems(item, qty) { //will THIS even do anything? wtf...
        item.quantity -= qty;
        this.profit += Number((item.marketPrice * qty).toFixed(2));
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

let item1 = new Item (593457600384,'Stuffed Alligator','Toy',8.00, 7, 10.40)
let item2 = new Item (593457600384,'Stuffed Narwhal','Toy',8.00, 7, 10.40)
let item3 = new Item (593457600384,'Stuffed Elder God','Toy', 8.00, 7, 10.40)
let item4 = new Item (293224171253, 'Cursed Toaster Oven', 'Appliance', 2.00, 1, 2.60)
let item5 = new Item (293224171253, 'Brass Cylinder of Sinister Black Goo', 'Home Decor', 5.12, 1, 6.66)
let item6 = new Item (503979025428, 'Broken Laptop', 'Electronics', 24.00, 1, 31.20)
let item7 = new Item (503979025428, 'Bread Machine', 'Appliance', 12.00, 2, 15.60)
let item8 = new Item (815192370160, 'Allegedly Haunted Doll', 'Toy', 100.00, 1, 130.00)
console.log(item1);
console.log(item2);
console.log(item3);
console.log(item4);
console.log(item5);
console.log(item6);
console.log(item7);
console.log(item8);

//
let store_MA = new Store ('Springfield413', 'Springfield', 'MA', .625, [], 0, 0, 0, 0)
const store_MA_inv = [
    
]
 const store_MA_bank = [
    {balance: 200, expense: 0, profit: 0, taxPaid: 0 }
 ]
console.log();

//
const store_CT = [
    {} //factory method here for sales tax amount
]

const store_CT_inv = [
    //put your items here
]
const store_CT_bank = [
    {balance: 200, expenses: 0, profit: 0, taxPaid: 0 }
 ]

//
const store_VT = [
    {}//factory method here for sales tax amount
]

const store_VT_inv = [
    //put your items here
]
 const store_VT_bank = [
    {balance: 200, expenses: 0, profit: 0, taxPaid: 0 }
 ]










/* 
  IGNORE  BELOW
*/

static addUpchargeForProfit(wholesale) {
    let price = wholesale + (wholesale * .30).toFixed(2);
    return new Expense(wholesale, price);
}

    constructor(w,s) {
        this.purchased_price = w;
        this.sell_at = s;
        this.sales_tax;
    }

    addTax(x) {
        let percentage = x;
        let priceAtCost = this.sell_at;

        this.sales_tax = (pricaAtCost + (priceAtCost * percentage)).toFixed(2);



   /* 
    static addUpchargeForProfit(wholesale) {
            let upcharge = wholesale + (wholesale * .30);
            return new Expense(wholesale, upcharge);
        }
    
        constructor(w,s) {
            this.purchased_price = w;
            this.sell_at = s;
            this.sales_tax;
        }
    
        addTax(x) {
            let percentage = x;
            let saleCost = this.sell_at;
    
            this.sales_tax = (saleCost + (saleCost * percentage)).toFixed(2);
        }//factory method here for sales tax amount
]

const store_MA_inv = [
    //put your items here
]
 const store_MA_bank = [
    {balance: 200, expenses: 0, profit: 0, taxPaid: 0 }
 ]


*/

 const store_CT = [
    {name:'Enfield860', location:'Enfield, Connecticut', }//factory method here for sales tax amount
]

const store_CT_inv = [
    //put your items here
]
 const store_CT_bank = [
    {balance: 200, expenses: 0, profit: 0, taxPaid: 0 }
 ]





 const store_VT = [
    {name:'Brat802', location:'Brattleboro, Vermont', }//factory method here for sales tax amount
]

const store_VT_inv = [
    //put your items here
]
 const store_VT_bank = [
    {balance: 200, expenses: 0, profit: 0, taxPaid: 0 }
 ]