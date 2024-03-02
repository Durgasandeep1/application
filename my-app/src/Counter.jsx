import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const [incvalue, setincvalue] = useState(null);
    const [decvalue, setdecvalue] = useState(null);
    console.log(count)
    const mouseOverInc = () => {
        setincvalue(setInterval(() => {
            setCount(setCount => setCount + 1);
        }, 120));
    };

    const mouseOutInc = () => {
        clearInterval(incvalue);
    };

    const mouseOverDec = () => {
        setdecvalue(setInterval(() => {
            if (count > 0) {
                setCount(setCount => (setCount == 0 ? setCount = 0 : setCount - 1));

            }
        }, 50));
    };

    const mouseOutDec = () => {
        clearInterval(decvalue);
    };
    
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button className='btn btn-primary mt-5' onMouseOver={mouseOverInc} onMouseOut={mouseOutInc}>INC</button>
            <button className='btn btn-success' onMouseOver={mouseOverDec} onMouseOut={mouseOutDec}>DEC</button>
        </div>
    );
}

export default Counter;
