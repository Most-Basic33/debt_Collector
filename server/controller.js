const debts = require('../debts.json')
const date1 = new Date()
const date=date1.toISOString
module.exports = {
    getDebtors: (req, res) =>{
        res.status(200).send(debts)
    },
    searchID: (req, res) =>{
        let debtorsID = debts.find((e)=>e.id === +req.params.id)
        console.log(debtorsID)
        res.status(200).send(debtorsID)
    },
    addDebtor: (req, res) =>{
        let newDebtor={
        id: debts[debts.length -1].id + 1,
        name: req.body.name,
        phone: req.body.phone,
        reason: req.body.reason,
        amount: req.body.amount,
        date: date
        }
        debts.push(newDebtor)
        res.status(200).send(debts)
    },
    deleteDebtor: (req,res) =>{
        let index = debts.findIndex(e=> e.id === +req.params.id)
        if (index !== -1){
            debts.splice(index,1)
        }
        res.status(200).send(debts)
    },
    deleteAllDebtors: (req,res) =>{
        let empty = {
            id:0,
            name:'',
            phone:'',
            reason:'',
            amount:0,
            date:date
        }
        for(key in debts){
        // console.log(debts[key])
            debts[key] = {}
        }
        debts.push(empty)
        res.status(200).send(debts)
    },
    updateAmount: (req,res)=>{
        
       
       console.log(req.params.id)
        
      
        let index = debts.find(e=> e.id === +req.params.id)
       index['amount']=req.body.amount;
        console.log(index)    
        res.status(200).send(debts)
    }
}