import React, {useContext, useState} from 'react';
import { AppContext } from '../context/AppContext';
import '../App.css'

const CurrencySelector = () => {

    const {dispatch, currency} = useContext(AppContext);
    const [currecyName, setCurrencyName] = useState('Dollar');


    const handleCurrency = (event) => {
        setCurrencyName(event.target.name);



        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value
        });

    };





    return (
        <div className="dropdown">
            <button
                className=" btn-currency col-12"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
            >
                Currency ({currency} {currecyName}) <span style={{fontSize:'0.7rem', marginLeft:'0.5rem'}}>▼</span>
            </button>
            <div className="container dropdown-menu" aria-labelledby="dropdownMenuButton">
                <button className="dropdown-item dropdown-btn " value="$" name="Dollar" onClick={(event) =>handleCurrency(event)}>
                $ Dollar 
                </button>
                <button className="dropdown-item dropdown-btn" value="£" name="Pound"onClick={(event) =>handleCurrency(event)}>
                    £ Pound
                </button>
                <button className="dropdown-item dropdown-btn" value="€" name="Euro" onClick={(event) =>handleCurrency(event)}>
                    € Euro
                </button>
                <button className="dropdown-item dropdown-btn" value="₹" name="Ruppee" onClick={(event) =>handleCurrency(event)}>
                    ₹ Ruppee
                </button>

               
            </div>
        </div>
    );
    
};

export default CurrencySelector;
