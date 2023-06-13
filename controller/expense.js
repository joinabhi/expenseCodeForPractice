const Expense=require('../model/expense');

exports.addExpense = async(req, res, next)=>{
    const amount = req.body.amount;
    const description = req.body.description;
    const category = req.body.category;
    const data = await Expense.create({
        amount:amount,
        description:description,
        category:category
    });
    res.status(201).json({expenseDetails:data})
}

exports.getExpense = async(req, res, next)=>{
    const expenses=await Expense.findAll();
    res.status(200).json({allExpenses:expenses})
}

exports.deleteExpense = async(req, res, next)=>{
    const expenseId=req.params.id;
    try{
        await Expense.destroy({where:{id:expenseId}})
        res.status(200).json({message:'expense deleted successfully'})
    }
    catch(error){
        res.status(500).json({error:error})
    }
}