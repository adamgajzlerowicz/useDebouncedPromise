import React from 'react';
import {useDebouncedPromise} from "./utils";


const mockPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve()
    }, 2000)
})

export const App = () => {
    const debouncedAction = useDebouncedPromise('hello', () => alert('all done'))

    return (
        <button onClick={() => debouncedAction(mockPromise)}>do stuff</button>
    );
}

