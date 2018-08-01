import { accountClass } from "./app";

export class savings extends accountClass {
    accountInterest = 0.02;
    accountHistory = [];
    widthdrawlCount = 0;
    withdrawMoney(amount, description, transactionOrigin) {
        //throw new Error("Method not implemented.");
        //create a withdrawal object and subtract from the balance if amount is less then balance
        let errorMessage = 'Sorry there is not enough in balance for this transaction';
        let withdrawal = {
            success: false,
            amount: -amount,
            resultBalance: this.balance,
            description: description,
            transactionDate: this.currentDate,
            errorMessage: ""
        };
        if (amount <= this.balance) {
            // log(`WithdrawCount: ${this.widthdrawlCount}`);
            this.balance -= amount;
            withdrawal.resultBalance = this.balance;
            withdrawal.success = true;
            this.widthdrawlCount++;
        }
        else {
            withdrawal.errorMessage = errorMessage;
        }
        return withdrawal;
    }
}
function log(item: any){
    console.log('////////////////////////////////////////////');
    console.log();
    console.log(item.toString());
    console.log();
    console.log('////////////////////////////////////////////');
}