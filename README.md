## useDebouncedPromise

This hook allows to create an action which can be triggered with promises. Once they all resolve, the callback will trigger.

Example: 

```
import React from 'react';
import { useDebouncedPromise } from "./utils";


const mockPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve()
    }, 2000)
})

export const App = () => {
    // make action
    const debouncedAction = useDebouncedPromise('hello', () => alert('all done'))

    // call action as many times as you want. When last promise finishes, the callback will execute
    return (
        <button onClick={() => debouncedAction(mockPromise)}>do stuff</button>
    );
}
```

source of [useDebouncedPromise](https://github.com/adamgajzlerowicz/useDebouncedPromise/blob/master/src/utils.tsx)
