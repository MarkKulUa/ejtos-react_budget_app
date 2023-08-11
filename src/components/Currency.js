import React, {useContext, useState} from 'react';
import {AppContext} from '../context/AppContext';
import {Dropdown} from 'react-bootstrap';

const Currency = () => {

    //Currency list
    const currencyList = [
        {name: "Dollar", symbol: "$"},
        {name: "Pound", symbol: "£"},
        {name: "Euro", symbol: "€"},
        {name: "Ruppee", symbol: "₹"}
    ];

    const {dispatch} = useContext(AppContext);

    const [currency, setCurrency] = useState(currencyList[1]);

    const changeCurrency = (currency) => {
        setCurrency(currency);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency.symbol
        });
    };

    return (
        <div className='d-inline-flex align-items-center justify-content-between'>

            <Dropdown>

                <Dropdown.Toggle variant="success" className="text-white">
                    Currency ({currency.symbol} {currency.name})
                </Dropdown.Toggle>

                <Dropdown.Menu className="border border-success bg-success text-black">
                    {currencyList.map((currency, key) => (
                        <Dropdown.Item onClick={() => changeCurrency(currency)} key={key}>
                            {currency.symbol} {currency.name}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>

            </Dropdown>

        </div>
    );
};

export default Currency;