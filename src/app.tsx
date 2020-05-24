import React from 'react';
import {useDebouncedPromise} from "./utils";


const mockPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve()
    }, 2000)
})

export const App = () => {
    const onResolve = () => {
        alert('all done')
    }

    const debouncedAction = useDebouncedPromise('hello', onResolve)

    return (
        <button onClick={() => debouncedAction(mockPromise)}>do stuff</button>
    );
}

