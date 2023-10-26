/*
Part 1 
    - Create a class that is meant to create a vehicle.
        - Should have these keys:
            - make, model, no_wheels, color
        - Should have two methods
            - The first method will print (console log):
                "The [color] [make] [model] turns on its engine" DONE
            - The second method will print (console log):
                "The [color] [make] [model] turns off its engine" DONE 
    - Create a vehicle using the class and "turn on" and "turn off" the vehicle.
    - Print (console log) the complete object created.
*/

class vehicle {
    constructor (make, model, no_wheels, color) {
        this.make = make
        this.model = model
        this.no_wheels = no_wheels
        this.color = color
    }

}
let newCar = new vehicle ('Ford', 'Fiesta','', 'Red')

console.log(vehicle)
console.log(`The ${vehicle.color} ${vehicle.make} ${vehicle.model} turns on its engine. `)
console.log(`The ${vehicle.color} ${vehicle.make} ${vehicle.model} turns off its engine. `)