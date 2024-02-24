const userBank = {
    name: "Guido Bernal",
    balance: 0,
    history: [],
    deposit: function (value) {
        this.balance += value;
        this.history.push({
            type: 'Deposit',
            value: value,
        })
        console.log(`Deposit assigned to the customer: ${this.name}`);
    },
    withDraw: function (value) {
        if (value > this.balance) {
            console.log(`Insufficient funds for withdrawal ${this.name}`);
            return;
        } else {
            this.balance -= value;
            this.history.push({
                type: 'Withdraw',
                value: value,
            })
            console.log(`Withdrawal made by the customer: ${this.name}`);
        }
    },
    printHistory: function () {
        console.log(`Acount Bancary - ${this.name}`);
        console.log(`Balance: ${this.balance}`);
        console.log(this.history);
    },
}

userBank.deposit(10000);
userBank.withDraw(50000);
userBank.withDraw(5000);
userBank.printHistory();