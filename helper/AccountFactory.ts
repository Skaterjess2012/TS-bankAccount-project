import {Account} from "../common/interfaces/Account";

import {checking} from "../student-work/checking";
import {retirement} from "../student-work/retirement";
import {savings} from "../student-work/savings";

export class AccountFactory {

    static getCheckingAccountObject(currentDate: Date): Account {
        let checkingAccount = new checking(1000, currentDate);//1000, currentDate, 'checking'
        return checkingAccount;
    }

    static getSavingsAccountObject(currentDate: Date): Account {
        let savingsAccount = new savings(10000, currentDate);
        return savingsAccount;
    }

    static getRetirementAccountObject(currentDate: Date, accountHolderBirthDate: Date): Account {
        let retirementAccount = new retirement(100000, currentDate);
        return retirementAccount;
    }

}