const express=require('express');
const expenseController=require('../controller/expense');
const router=express.Router()

router.post('/user/add-expense', expenseController.addExpense);

router.get('/user/get-expense', expenseController.getExpense);

router.delete('/user/delete-expense/:id', expenseController.deleteExpense);

module.exports=router;

