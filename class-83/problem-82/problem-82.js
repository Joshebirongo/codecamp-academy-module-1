// Author: Muliri Shebirongo Jonathan <Joshebirongo>
class BankAccount {
  // Constructor
  constructor(ownerName, accountNumber, balance, accountType) {
    this.ownerName = ownerName;
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.accountType = accountType;
  }
  deposit(amount) {
    this.balance += amount;
    return `$${amount} USD deposited successfuly.`;
  }
  withdraw(amount) {
    if (amount > this.balance) {
      return "Insufficient funds. Withdrawal denied.";
    } else {
      this.balance -= amount;
      return `$${amount} USD withdrawn successfuly.`;
    }
  }
  showAccountInfo() {
    return `
    *******************************
            ACCOUNT DATA
    *******************************
    Owner:               ${this.ownerName}
    ACCOUNT Number:      ${this.accountNumber}
    Account Balance:    $${this.balance} USD
    Acount Type:         ${this.accountType}
    `;
  }
}
const account1 = new BankAccount("Alice Johnson", 102938, 1000, "Saving");
console.log("=================================");
console.log(account1.deposit(500));
console.log("=================================");
let account1Data = account1.showAccountInfo();
console.log(account1Data);
console.log("=================================");
console.log(account1.withdraw(2000));
console.log("=================================");
console.log(account1.withdraw(1000));
console.log("=================================");
account1Data = account1.showAccountInfo();
console.log(account1Data);
console.log("=================================");
