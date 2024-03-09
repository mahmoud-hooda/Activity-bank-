class BankAccount {
    this.name = name;
    this.age = age;
    this.balance = balance;
    this.address = address;
  }

  accountInfo() {
    console.log(`Client Name: {this.name});
    console.log(`Balance: ${this.balance}`);
  }

  deposit(amount) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.addAmount(amount);
        resolve(`Successfully $${amount}`);
      }, 1000);
    });
  }

  addAmount(amount) {
    this.balance += amount;
  }
}


const addressInfo = {
  city: "Raselbar",
  street: "17",
  building: "55",
 
};

const myAccount = new BankAccount("Mahmoud Ali", 30, 1000, addressInfo);
myAccount.accountInfo();

myAccount.deposit(500)
  .then(message => {
    console.log(message);
    myAccount.accountInfo();
  })
  .catch(error => console.error(error));
