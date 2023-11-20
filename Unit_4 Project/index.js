

//! Global Variables
const baseURL = "https://fakestoreapi.com/products/category/jewelery";

//const storedItems = []; //empty array for stored items to be held inside  <-- possibly unneeded
const electronics = document.querySelector('.nav-link');
/*
const jewelry = document.querySelector();
const womensClothing = document.querySelector();
const mensClothing = document.querySelector();
*/


//! Event Listeners
electronics.addEventListener("click", e => {
    e.preventDefault();
  
    fetch('https://fakestoreapi.com/products/category/electronics')
      .then((res) => res.json())
      .then((data) => {
        //console.log(data.electronics[0])
        let eItem = data.electronics;

        let obj = {
          title: eItem.title,
          price: eItem.price,
          category: eItem.category,
          description: eItem.description,
          image: eItem.image
        };
        console.log(obj)
        //displayRandomCard(obj);
      })
      .catch((error) => console.error(error));
  });


  window.onload = function() {
    fakeStore('https://fakestoreapi.com/products?sort=asc');  //add &limit=(# of items) if you need to limit the number loaded.
    };

    async function fakeStore(endpoint) {
      fetch(endpoint)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
  }

  //console.log(fakeStore);*/

