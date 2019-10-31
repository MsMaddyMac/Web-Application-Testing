import React, { useState } from 'react';
import Button from './Button';

const displayStyles = {
    color: '#dd5b50'
}

const Display = () => {
// Establishes state for balls and strikes using useState hooks
const [balls, setBalls] = useState(0);
const [strikes, setStrikes] = useState(0);
    return (
        <>
            <div>
                <h2 className="display" style={displayStyles}>Balls: {balls}</h2>
                <h2 className="display" style={displayStyles}>Strikes: {strikes}</h2>
            </div>
            <div>
                <Button onClick={() => (balls === 4) ? setBalls(0) : setBalls(balls + 1)} label={'Ball'} />
                <Button onClick={()=> (strikes > 2) ? setStrikes(0) : setStrikes(strikes + 1)} label={'Strike'} />
                <Button label={'Foul'}/>
                <Button onClick={() => (setBalls(0) || setStrikes(0))} label={'Hit'}/>
            </div>
        </>
    )
}

export default Display

