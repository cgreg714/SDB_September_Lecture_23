

//! Global Variables
const baseURL = "https://fakestoreapi.com/products/category/";
const eURL = "https://fakestoreapi.com/products/category/electronics";
const jURL ="https://fakestoreapi.com/products/category/jewelery";
const wURL = "https://fakestoreapi.com/products/category/womensclothing";
const mURL = "https://fakestoreapi.com/products/category/mens_clothing";
//const storedItems = []; //empty array for stored items to be held inside  <-- possibly unneeded
const electronics = document.querySelector('#electronics');
const jewelry = document.querySelector('#jewelry');
const womensClothing = document.querySelector('#womensClothing');
const mensClothing = document.querySelector('#mensClothing');


//! Event Listeners
electronics.addEventListener("click", e => {
    e.preventDefault();
  
    fetch(eURL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        //const eItem = Object.values(data);  //converts results to an array
        //let eItem = data
        //console.log(eItem[0])
        data.forEach(eItem => { // Iterate over each item in the data array
        
          let obj = {
            title: eItem.title,
            price: eItem.price,
            category: eItem.category,
            description: eItem.description,
            image: eItem.image
          };
          console.log(obj);
        });

      })
      .catch((error) => console.error(error));
});

  jewelry.addEventListener("click", e => {
    e.preventDefault();
  
    fetch(jURL) //homie don't know how to spell jewelry
      .then((res) => res.json())
      .then((data) => {
        //console.log(data)
        //console.log(jItem)
        data.forEach(jItem => {

        let obj = {
          title: jItem.title,
          price: jItem.price,
          category: jItem.category,
          description: jItem.description,
          image: jItem.image
        };
        console.log(obj)
      });
    })
      .catch((error) => console.error(error));
  });  

  womensClothing.addEventListener("click", e => {
    e.preventDefault();
  
    fetch(wURL) //what is the f-ing subdirectory for this?
      .then((res) => res.json())
      .then((data) => {
      console.log(data)
      data.forEach(wItem => {

        let obj = {
          title: wItem.title,
          price: wItem.price,
          category: wItem.category,
          description: wItem.description,
          image: wItem.image
        };
        console.log(wItem)
        console.log(obj)
      })
    })
      .catch((error) => console.error(error));
  });

  mensClothing.addEventListener("click", e => {
    e.preventDefault();
  
    fetch(mURL) //same here...wtf?
      .then((res) => res.json())
      .then((data) => {
      //console.log(data)
      data.forEach(mItem => {

        let obj = {
          title: mItem.title,
          price: mItem.price,
          category: mItem.category,
          description: mItem.description,
          image: mItem.image
        };
        console.log(obj)
        //displayRandomCard(obj);
      })
    })
      .catch((error) => console.error(error));
  });



  window.onload = function() {
    fakeStore('https://fakestoreapi.com/products?sort=asc');  //add &limit=(# of items) if you need to limit the number loaded.
    };

    const fakeStore = async (endpoint) => {
      fetch(endpoint)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
  }

  console.log(fakeStore);

