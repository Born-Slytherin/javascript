// let a = 10;
// let b = 2;

// if (a == b ){
//     console.log(" a == b");
// }else if (a < b) {
//     console.log(" a less than b");
// }else {
//     console.log("a greater than b");
// }

// let c = 5;

// if ( a < b && a < c) {
//     console.log("a is smallest");
// }else if ( b < c) {
//     console.log("b is smallest");
// }else {
//     console.log("c is smallest");
// }

// Switch
// let k = prompt("Enter the day number:");    
// k = Number(k); 
// switch (k) {
//     case 1 : console.log ("Sunday");
//              break;
//     case 2 : console.log ("Monday");
//              break;
//     case 3 : console.log ("Tuesday");
//              break;
//     case 4 : console.log ("Wednesday");
//              break;
//     case 5 : console.log ("Thursday");
//              break;
//     case 6 : console.log ("Friday");
//              break;
//     case 7 : console.log ("Saturday");
//              break;
//     default : console.log ("Invalid");
// }

// For loop
// for(let i=1 ; i<=10 ; i++){
//     console.log(i);
// }

// While loop
// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// Do while
//  let i = 1;
//  do {
//     console.log(i);
//     i++;
//  }while(i<=10);

let balance = 1000;
let choice = 0;
let transaction_history = ["starting from "+ balance];

let d = new Date();
let day = d.getDate();
let month = d.getMonth() + 1;
let year =d.getFullYear();

let date = day+"/"+month+"/"+year;

let hour = d.getHours();
let min = d.getMinutes();
let sec = d.getSeconds();

let time = hour+'-'+min+'-'+sec;

do {
    choice = prompt("--Welcome to ATM-- \n 1.Deposit \n 2.Withdraw \n 3.Balance \n 0.Exit \n Enter your choice:")
    choice = Number(choice)

    switch(choice) {
        case 1 : Deposit()
                 break;
        case 2 : Withdraw()
                 break;
        case 3 : Balance(balance)
                 break;
        case 0 : console.log("Exiting...")
                 break;
        default: console.log("Invalid Choice..Try again.")
    }

    if(choice == 0){
        break;
    }

} while(choice != 0)

function Deposit() {
    let amount = prompt("Enter the amount to deposit:")
    amount = Number(amount)
    transaction_history.push('added '+amount+' at '+date+' in '+time)
    balance = balance + amount;
    console.log("Amount added to balance!")
    Balance(balance)
    console.log(transaction_history);
}

function Withdraw() {
    let amount = prompt("Enter the amount to withdraw:")
    amount = Number(amount)
    transaction_history.push(`subtracted ${amount} at ${date}`)
    balance = balance -  amount;
    console.log("Amount withdrawn!")
    Balance(balance)
    console.log(transaction_history);
}

function Balance(balance) {
    console.log("New Balance = ", balance);
}