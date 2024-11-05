import { Expense } from "../types";
import { Request, Response } from "express";

export function createExpenseServer(req: Request, res: Response, expenses: Expense[]) {
    const { id, cost, description } = req.body;

    if (!description || !id || !cost) {
        return res.status(400).send({ error: "Missing required fields" });
    }

    const newExpense: Expense = {
        id: id,
        description,
        cost,
    };

    expenses.push(newExpense);
    res.status(201).send(newExpense);
}

export function deleteExpense(req: Request, res: Response, expenses: Expense[]) {
    // deleteExpense function
    const {id} = req.params;
    if (!id) {
        return res.status(400).send({ error: "Missing required fields" });
    }
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    if (updatedExpenses.length < expenses.length) {
        expenses.length = 0;
        expenses.push(...updatedExpenses);
    }
    else {
        res.status(404).send("Delete fail");
    }
    res.status(200).send("Delete success");
}

export function getExpenses(req: Request, res: Response, expenses: Expense[]) {
    res.status(200).send({ "data": expenses });
}