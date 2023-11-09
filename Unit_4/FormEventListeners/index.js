// TODO: Global Variables  --DONE
const form = document.querySelector('form');
const table = document.querySelector('tbody');
let animals = []; //MOCK DATABASE

// console.log(form.name); // this is how a specific value in the HTML doc is targeted
// console.log(Object.values(form)); //displays all the values of the labels in form
// console.log(form[0]);


// TODO: Event Listener  --DONE
form.addEventListener('submit', e => {
    e.preventDefault() //stops the default action of the form object, which is to refresh the page
    //console.log('HIT')

    const animal = {
        species: form.species.value,
        name: form.name.value,
        sex: form.sex.value
    }
    //console.log(animal);
    animals.push(animal);

form.reset(); //clears out the entry fields
form[0].focus();// targets the first input within the form when it is "new"
//* alternative way of coding above: form.species.focus()

displayTable();
})
// TODO: Display to a table (function)

function displayTable() {
   // console.log('DT:', animals)
    while(table.firstChild) {
        table.removeChild(table.firstChild);
    }
    animals.forEach((animal, i) => {
        //console.log('loop', i, animal)
        //* Create
        let tr = document.createElement('tr')  //Wil be the parent element for any kind of 'td' (table data) (tr  = table row)
        let id = document.createElement('td')
        let name = document.createElement('td')
        let sex = document.createElement('td')
        let species = document.createElement('td')
        //* Assign
        id.textContent = i + 1; // assigns a number to the entry, but starts at 1 rather than 0
        name.textContent = animal.name
        sex.textContent = animal.sex
        species.textContent = animal.species

        //* Append/Set
        tr.appendChild(id)
        tr.appendChild(name)
        tr.appendChild(sex)
        tr.appendChild(species)
        table.appendChild(tr)
    })
}
