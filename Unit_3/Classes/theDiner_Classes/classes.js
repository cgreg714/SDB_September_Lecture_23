/* 
    - Employees
        - Manager
            -create tables
        - Host
            -set tables
        - Server
            -serve tables

        Employee Number

    - Table
*/

const employeeNumbers = [];

class Employee {

    static setEmployee(role,name,payRate){
        // Create a random employee number
        const setEmployeeNumber = Math.floor(Math.random()*(100-1) + 1);

        let numberToUse;

        if(employeeNumbers.includes(setEmployeeNumber))
        {
                let tempNumber = setEmployeeNumber + "a";
                employeeNumbers.push(tempNumber);
                numberToUse = tempNumber;
        } else {
            employeeNumbers.push(setEmployeeNumber);
            numberToUse = setEmployeeNumber;
        }

        // Set Hire Date
        let today = new Date(); //utilizes a built-in class in JS to pull today's date

        // Set Role
        const usedClass = role; // designates the class to target.

        return new usedClass(name, numberToUse, today, payRate);
    }

    constructor(name, empNumber, date, payRate) {
        this.name = name;
        this.employee_Number = empNumber;
        this.dateHired = date;
        this.payRate = Number(payRate.toFixed(2));
    }
}

class Manager extends Employee {
    constructor(name, employee_number, dateHired, payRate)
    {
            super(name, employee_number,dateHired,payRate);
            this.role = 'Manager';
    }
    createTable(number,seats){
        let table = new Table(number, seats);
        return table;
    }

   
}

class Server extends Employee {
    constructor(name, employee_number, dateHired, payRate)
    {
            super(name, employee_number,dateHired,payRate);
            this.role = 'Server';
    }
    
    serveTable(table) {
        table.updateStatus()
    }
}
class Host extends Employee {
    constructor(name, employee_number, dateHired, payRate)
    {
            super(name, employee_number,dateHired,payRate);
            this.role = 'Host';
    }

    setTable(table) {
        table.updateSeating('eating...');
    }
}



//const employee = new Employee('Joe', 1, new Date(), 18);
const manager = Employee.setEmployee(Manager,'Jane', 18);
const server = Employee.setEmployee(Server,'Bob', 18);
const host = Employee.setEmployee(Host,'Jack', 18);

console.log(manager,server,host);

class Table {
    constructor(tableNumber, seatNumber){
        this.tableNumber = tableNumber;
        this.seatNumber = seatNumber;
        this.seated = false;
        this.status = 'empty';
    }
    
    updateSeating() {
        if(this.seated) {
            this.seated = false;
            this.status = "empty"
        } else {
            this.seated = true;
            this.status = "waiting..."
        }
    }

    updateStatus(status) {
        if(status !== undefined) {
            this.status = status;
        } else {
            this.status = "waiting...";
        }
    }
}

const table10 = manager.createTable(10, 2);
host.setTable(table10)
console.log(table10);
server.serveTable(table10);
//table.updateSeating();
//console.log(table);
//table.updateSeating();
//console.log(table)
// table.updateStatus('eating...');
console.log(table10);
