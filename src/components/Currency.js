import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const getCurrencyText = (props) => {
        if (props === '$') {
            return 'Currency ($ Dollar)';
        } else if (props === '£') {
            return 'Currency (£ Pound)';
        } else if (props === '€') {
            return 'Currency (€ Euro)';
        } else if (props === '₹') {
            return 'Currency (₹ Ruppee)';
        }
        return "";
    };

    const { dispatch, currency } = useContext(AppContext);
    const [currencyText, setCurrencyText] = useState(getCurrencyText(currency));

    const setCurrency = (props) => {
        setCurrencyText(getCurrencyText(props));
        dispatch({
            type: 'CHG_CURRENCY',
            payload: props
        });
    };

    return (
        <div className='alert alert-secondary' style={{size: 10}}>
            <select className='custom-select' id='inputGroupSelect01' onChange={(event) => setCurrency(event.target.value)}>
                <option defaultValue='' hidden>{currencyText}</option>
                <option value='$' name='dollar'>$ Dollar</option>
                <option value='£' name='pound'>£ Pound</option>
                <option value='€' name='euro'>€ Euro</option>
                <option value='₹' name='rupee'>₹ Ruppee</option>
            </select>
        </div>
    );
}

export default Currency;
