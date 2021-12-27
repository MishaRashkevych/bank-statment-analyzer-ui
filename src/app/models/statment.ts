export class Statment{
   name: string = "";
   street: string = "";
   area: string = "";
   city: string = "";
   state: string = "";
   document: string = "";
   details: string = "";
   TransactionList: Transaction[] = []
}

export class Transaction {
   date: string = "";
   mode: string = "";
   particulars: string = "";
   deposits: string = "";
   withdrawals: string = "";
   balance: string = "";
 }