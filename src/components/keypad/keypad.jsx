import React, { useState } from "react";
import style from "./keypad.module.css";
import { useScreen } from "../../context/screen.context";

function Keypad() {
    const { value, setValue } = useScreen();
    const [expression, setExpression] = useState(""); // Store the whole expression

    const clear = () => {
        setValue('0');
        setExpression('');
    };

    const handleButton = (e) => {
        const val = e.target.innerText;
        if (value === '0' && val !== '.') {
            setValue(val);
            setExpression(val);
        } else {
            setValue(value + val);
            setExpression(expression + val);
        }
    };

    const operationClick = (e) => {
        const val = e.target.innerText;
        
        // Handle percentage
        if (val === '%') {
            const currentValue = parseFloat(value);
            const result = currentValue / 100;
            setValue(result.toString());
            setExpression(result.toString());
            return;
        }

        // Handle +/- (sign change)
        if (val === '+/-') {
            const currentValue = parseFloat(value);
            const result = currentValue * -1;
            setValue(result.toString());
            setExpression(result.toString());
            return;
        }

        // Handle standard operators
        if (expression && !isNaN(expression.slice(-1))) { // Ensure that expression doesn't end with an operator
            setExpression(expression + val);
            setValue(val);
        }
    };

    const equalClick = () => {
        try {
            let result = eval(expression.replace('X', '*').replace('÷', '/'));
            setValue(result.toString());
            setExpression(result.toString());
        } catch (error) {
            console.error("Failed to evaluate expression", error);
            setValue("Error");
        }
    };

    return (
        <div className={style.container}>
            <div className={style.row}>
                <button onClick={clear}>C</button>
                <button onClick={operationClick}>+/-</button>
                <button onClick={operationClick}>%</button>
                <button onClick={operationClick}>÷</button>
            </div>
            <div className={style.row}>
                <button onClick={handleButton}>7</button>
                <button onClick={handleButton}>8</button>
                <button onClick={handleButton}>9</button>
                <button onClick={operationClick}>X</button>
            </div>
            <div className={style.row}>
                <button onClick={handleButton}>4</button>
                <button onClick={handleButton}>5</button>
                <button onClick={handleButton}>6</button>
                <button onClick={operationClick}>-</button>
            </div>
            <div className={style.row}>
                <button onClick={handleButton}>1</button>
                <button onClick={handleButton}>2</button>
                <button onClick={handleButton}>3</button>
                <button onClick={operationClick}>+</button>
            </div>
            <div className={style.row}>
                <button className={style.zero} onClick={handleButton}>0</button>
                <button onClick={handleButton}>.</button>
                <button onClick={equalClick}>=</button>
            </div>
        </div>
    );
}

export default Keypad;
