import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
    const { dispatch, budget, expenses } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    
    const setBudget = (props) => {
        if (props < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending");
            return;
        }
        if (props > 20000) {
            alert("You cannot increase the budget value more than £20000");
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: props
        });
    };

    return (
        <div className="alert alert-secondary">
            <span>
                Budget: £
                <input
                    required='required'
                    type='number'
                    step='10'
                    value={budget}
                    style={{size: 10}}
                    onChange={(event) => setBudget(event.target.value) }>
                </input>
            </span>
        </div>
    );
};

export default Budget;
