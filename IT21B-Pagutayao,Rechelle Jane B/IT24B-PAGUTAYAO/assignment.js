class BankAccount {
    constructor(accountHolder, balance) {
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`${this.accountHolder} has deposited $${amount}. Current balance: $${this.balance}`);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log(`Insufficient funds! ${this.accountHolder} cannot withdraw $${amount}.`);
        } else {
            this.balance -= amount;
            console.log(`${this.accountHolder} has withdrawn $${amount}. Remaining balance: $${this.balance}`);
        }
    }

    displayBalance() {
        console.log(`Account Holder: ${this.accountHolder}, Balance: $${this.balance}`);
    }
}

let account1 = new BankAccount('John Doe', 1000);
let account2 = new BankAccount('Jane Smith', 500);

account1.displayBalance();   
account1.deposit(500);       
account1.withdraw(2000);     
account1.withdraw(300);      

account2.displayBalance();   
account2.deposit(200);       
