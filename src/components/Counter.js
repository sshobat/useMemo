// useMemo hook

/*

-   useMemo is a hook very similar to useCallback, but instead caching a function, useMemo will cache the return value of a function.
-   You can use useMemo in a very similar way to the memo HOC.
-   useMemo is a hook with an array of dependences, and memo is a HOC that accepts as parameter an optional function that uses props to conditionally update the component.
-   useMemo caches a value returned between renders, while memo caches a whole react component between renders.

*/

// A React Hook that lets you cache the result of a calculation between re-renders.
// Returns a memoized value.


// Difference between useCallback and useMemo

// useCallback caches the provided function instance itself without invoking it whereas use memo invokes the provided function and caches the result.

// Example explanation

// Without the hook every time the state updates the component rerenders, and the isEven function is called again. Even when the incrementTwo() function is called it is slow because it is rerendering the component and isEven is called.
// We need to tell React not to calculate the unnecessary functions, expecially the expencive ones.
// With the use of the hook the React is using the cached value from the previous render if the dependency did not change.

import React, { useState, useMemo } from "react";

const Counter = () => {

    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementOne = () => {
        setCounterOne(counterOne + 1);
    }

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1);
    }

    /* 
    // WITHOUT THE HOOK

    const isEven = () => {
        let i = 0;
        while (i < 2000000000) i++
        return counterOne % 2 === 0;
    } 

    return (
        <div>
            <div>
                <button onClick={incrementOne}>Count One - {counterOne}</button>
                <span>{isEven() ? " EVEN" : " ODD"}</span>
            </div>
            <div>
                <button onClick={incrementTwo}>Count One - {counterTwo}</button>
            </div>
        </div>
    );
    */

    // WITH THE HOOK

    const isEven = useMemo(() => {
        let i = 0;
        while (i < 2000000000) i++
        return counterOne % 2 === 0;
    },[counterOne]);

    return (
        <div>
            <div>
                <button onClick={incrementOne}>Count One - {counterOne}</button>
                <span>{isEven ? " EVEN" : " ODD"}</span>
            </div>
            <div>
                <button onClick={incrementTwo}>Count One - {counterTwo}</button>
            </div>
        </div>
    );
}

export default Counter;
