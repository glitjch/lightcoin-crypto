// let balance = 500.00;

// Account Management functions
class Account {

  constructor(username) {
    this.username = username;
    this.balance = 500;
    this.transactions = [];
  }
}

// Transactional functions

class Transaction {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    this.account.balance += this.value;
  }

}

class Deposit extends Transaction {

  get value() {
    return this.amount;
  }

};

class Withdrawal extends Transaction {

  get value() {
    return -this.amount ;
  }

};


// DRIVER CODE BELOW
const myAccount = new Account('snow-patrol')
console.log(myAccount);

t1 = new Withdrawal(50.25, myAccount);
t1.commit();
console.log('Transaction 1:', t1);

t2 = new Withdrawal(9.99, myAccount);
t2.commit();
console.log('Transaction 2:', t2);

t3 = new Deposit(120.00, myAccount);
t3.commit();
console.log('Transaction 3:', t3);

console.log('Balance:', myAccount.balance);
