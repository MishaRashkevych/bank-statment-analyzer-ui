import { Statment } from '../models/statment';
import { Injectable } from '@angular/core';
import TestJson from '../../assets/test.json'
import { SumWithData } from '../models/sum-with-date'

@Injectable({
  providedIn: 'root'
})
export class ExtractDataService {

  constructor() { }

  //data: Statment = TestJson
  data: Statment = JSON.parse(localStorage.getItem('response')!)

 getPersonalData(){
   return this.data
 }
  
  getDepositWithDate():SumWithData[] {
    let data : SumWithData[] = []
    this.data.TransactionList.forEach((e)=>{
      if (Number(e.deposits) !== 0) {
        const dwd:SumWithData = {
          sum: Number(e.deposits),
          date: e.date
        }
        data.push(dwd)
      }
    })
    return data
  }

  getWithdrawWithDate():SumWithData[] {
    let data : SumWithData[] = []
    this.data.TransactionList.forEach((e)=>{
      if (Number(e.withdrawals) !== 0) {
        const dwd:SumWithData = {
          sum: Number(e.withdrawals),
          date: e.date
        }
        data.push(dwd)
      }
    })
    return data
  }

  getDepositsDates(){
    let source = this.getWithdrawWithDate()
    let dates : string[] = []
    for (let index = 0; index < source.length; index++) {
      const element = source[index];
      if(element.date !== dates[dates.length-1])
      dates.push(element.date)
    }
    return dates
  }

  getWithdrawsDates(){
    let source = this.getWithdrawWithDate()
    let dates : string[] = []
    for (let index = 0; index < source.length; index++) {
      const element = source[index];
      if(element.date !== dates[dates.length-1])
      dates.push(element.date)
    }
    return dates
  }
  
  getDepositSums(){
    let source = this.getDepositWithDate()
    let sums : number[] = []
    for (let index = 0; index < source.length; index++) {
      const element = source[index];
      if( index > 0 && element.date !== source[index-1].date)
        sums.push(element.sum)
        else if(index > 0 && element.date == source[index-1].date) sums[sums.length-1] = sums[sums.length-1] + element.sum
        else if(index == 0) sums.push(element.sum)
      }
    return sums
  }

  getWithdrawsSums(){
    let source = this.getWithdrawWithDate()
    let sums : number[] = []
    for (let index = 0; index < source.length; index++) {
      const element = source[index];
      if( index > 0 && element.date !== source[index-1].date)
        sums.push(element.sum)
        else if(index > 0 && element.date == source[index-1].date) sums[sums.length-1] = sums[sums.length-1] + element.sum
        else if(index == 0) sums.push(element.sum)
      }
    return sums
  }

  getTransactionParticulars(){
    let filteredTransactionList = this.data.TransactionList.filter(t => t.particulars !== '')
    let result : any = {}
    for(var i = 0; i < filteredTransactionList.length; i++) {
        let particular =  filteredTransactionList[i].particulars.trim();
        result[particular] = (result[particular] != undefined ? result[particular] + 1 : 1)
    }
    return result
  }

  // getTransactionAmount(){
  //   let currentAmount : any = Object.values(this.getTransactionParticulars())
  //   let totalAmount = this.data.TransactionList.length
  //   for(let i = 0; i < currentAmount.length; i++){
  //     currentAmount[i] * 100 / totalAmount
  //   }
  //   return currentAmount
  // }

  getWithdrawalSumsOnTypes(){
    let filteredTransactionList = this.data.TransactionList.filter(t => t.particulars !== '')
    let result : any = {}
    for(var i = 0; i < filteredTransactionList.length; i++) {
      let particular =  filteredTransactionList[i].particulars.trim().split('/')[0]
      result[particular] = (result[particular] != undefined ? result[particular] + Number(filteredTransactionList[i].withdrawals) : Number(filteredTransactionList[i].withdrawals))
    }
    return result
  }

  getStartDayBalance(){
    let sums : number[] = []
    let source = this.data.TransactionList
    for (let index = 0; index < source.length; index++) {
      const element = source[index];
      if(index == 0) sums.push(Number(element.balance))
      else if(element.date !== source[index-1].date) sums.push(Number(element.balance))
    }
    return sums
  }

  getEndDayBalance(){
    let sums : number[] = []
    let source = this.data.TransactionList
    for (let index = 0; index < source.length; index++) {
      const element = source[index];
      if(index<source.length-1 && element.date !== source[index+1].date && Number(element.balance) !== NaN) sums.push(Number(element.balance))
    }
    return sums
  }

  getDates(){
    let dates : string[] = []
    let source = this.data.TransactionList
    for (let index = 0; index < source.length; index++) {
      const element = source[index];
      if(index == 0) dates.push(element.date)
      if(element.date !== dates[dates.length -1] && element.date !== "") dates.push(element.date)
    }
    return dates
  }

  getTransactionAmount(){
    let currentAmount : any = Object.values(this.getTransactionParticulars())
    let totalAmount = this.data.TransactionList.length
    for(let i = 0; i < currentAmount.length; i++){
      currentAmount[i] * 100 / totalAmount
    }
    return currentAmount
  }
}