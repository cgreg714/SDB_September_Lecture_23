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

console.log(found);