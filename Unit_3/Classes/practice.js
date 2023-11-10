const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
  ];
  
  const result = inventory.find(({quantity}) => quantity == 2 );
  
  console.log(result); 
/*
  const salesTax = [
    {state: 'Alabama', tax: .04},
    {state: 'Alaska', tax: .00} ]

    const filteredTax = salesTax.filter(salesTax)  
        console.log('Parameter:', state) 
        let result = fruit !== 'mango';
        //console.log('Inside Filter:', result);
        return result;
    });
    
    console.log(filteredFruit);

*/



    const salesTax = [
        {state: 'Alabama', tax: .04},
        {state: 'Alaska', tax: .00} ]

const found = salesTax.find(({state}) => state == 'Alabama');

console.log(found.tax);

var result = storedArray.filter( audio => audio.category === 'cat 2' )

var storedArray = [{
	"title": "test title 1",
	"date_added": "2018-09-26",
	"url": "someurl.com",
	"filename": "file 1",
	"category": "cat 1"
}, {
	"title": "test title 2",
	"date_added": "2018-10-25",
	"url": "someurl.com",
	"filename": "file 2",
	"category": "cat 2"
},{
	"title": "test title 3",
	"date_added": "2018-10-25",
	"url": "someurl.com",
	"filename": "file 3",
	"category": "cat 2"
}];

var result = storedArray.filter( audio => audio.category === 'cat 2' );

console.log(result);

let stateTax = salesTax.filter(stateTax => )salesTax.state === this.state)

let stateTax = salesTax.filter(({state}) => state === state)



const fruits = ["apple", "banana", "grapes", "mango", "orange"];

/**
 * Filter array items based on search criteria (query)
 */
function filterItems(arr, query) {
  return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']

saleProfit(margin){
    let purchasePrice = item.purchasePrice;
    let marketPrice = item.marketPrice;
    let margin = (purchasePrice - marketPrice)
    margin.push(Store.profit)
}

salePrice(x) {
    let sellPrice = markUp + tax

    let markUp = (purchasePrice * .30).toFixed(2);
    let tax = (markUp * this.salesTax).toFixed(2);
    return sellPrice.toFixed(2)
} 

/* 
   salePrice(x) {
            let y = markUp + tax
        
            let markUp = (purchasePrice * .30).toFixed(2);
            let tax = (markUp * this.salesTax).toFixed(2);
            return this.marketPrice
        } 
*/