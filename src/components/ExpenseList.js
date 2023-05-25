import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);

    return (
        <table className="table">
            <thead className="thead-light">
                <tr>
                    <th scope="col">Department</th>
                    <th scope="col">Allocated Budget</th>
                    <th scope="col">Increase by 10</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {expenses.map((expense) => (
                    <ExpenseItem id={expense.id} name={expense.name} key={expense.id} cost={expense.cost} />
                ))}
            </tbody>
        </table>
    );
};

export default ExpenseList;
