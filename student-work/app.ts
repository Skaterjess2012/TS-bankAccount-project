//enums
import {AccountType} from "../common/enums/AccountType";
import {TransactionOrigin} from "../common/enums/TransactionOrigin";

//interfaces
import {Account} from "../common/interfaces/Account";
import {Transaction} from "../common/interfaces/Transaction";

export class accountClass implements Account {
    constructor(balance: number, currentDate: Date){
        this.balance = balance;
        this.currentDate = currentDate;
    }

    currentDate: Date;
    balance: number;
    accountHistory: Transaction[];
    accountHolderBirthDate?: Date;
    accountInterest: number;
    withdrawMoney(amount: number, description: string, transactionOrigin: TransactionOrigin): Transaction {
        //throw new Error("Method not implemented.");
        //create a withdrawal object and subtract from the balance if amount is less then balance
        let errorMessage: string = 'Sorry there is not enough in balance for this transaction';
        let withdrawal:Transaction = {
            success: false,
            amount: -amount,
            resultBalance: this.balance,
            description: description,
            transactionDate: this.currentDate,
            errorMessage: ""
        };
        if (amount <= this.balance) {
            this.balance -= amount;
            withdrawal.resultBalance = this.balance;
            withdrawal.success = true;
        } else {
            withdrawal.errorMessage = errorMessage;
        }
        return withdrawal;
    }
    depositMoney(amount: number, description: string): Transaction {
        let deposit: Transaction = {
            success: true,
            amount: amount,
            resultBalance: this.balance += amount,
            description: description,
            transactionDate: this.currentDate,
            errorMessage: ""
        }
        this.accountHistory.push(deposit);
        return deposit;
    }
    advanceDate(numberOfDays: number) {
        // this.currentDate.setDate(this.currentDate.getDate() + numberOfDays);
        for (let i = 1; i <= numberOfDays; i++) {
            this.currentDate.setDate(this.currentDate.getDate() + 1);
            this.calculateInt(this.accountInterest);
        }
    }
    calculateInt (yearlyRate: number) {
        let monthlyRate = yearlyRate / 12;
        if (this.currentDate.getDate() === 1){
            let interest = Math.round(100 * (this.balance * monthlyRate)) / 100;
            this.depositMoney(interest, 'Monthly Interest');
        }
    }
}
function log(item: any){
    console.log('////////////////////////////////////////////');
    console.log();
    console.log(item.toString());
    console.log();
    console.log('////////////////////////////////////////////');
}