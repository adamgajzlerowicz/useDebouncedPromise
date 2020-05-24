import React, {useCallback, useState} from 'react';

const useDebouncedPromise = (onResolve: () => void) => {
    const [promiseCount, setPromiseCount] = useState<number | void>(undefined)

    return useCallback((promise: Promise<any>) => {
        const meh = typeof promiseCount === 'undefined' ? 1 : promiseCount + 1
        setPromiseCount(meh)
        console.log(meh);
        console.log(promiseCount);

        promise.then(() => {
            console.log(promiseCount);
            if (promiseCount === 1) {
                onResolve()
                setPromiseCount(undefined)
            }
        })
    }, [onResolve, promiseCount])
}


const mockPromise = new Promise(
    (resolve => setTimeout(() => {
        resolve()
    }, 1000)))

export const App = () => {
    const onResolve = () => console.log('all resolved')

    const debouncedAction = useDebouncedPromise(onResolve)


    return (
        <button onClick={() => debouncedAction(mockPromise)}>do stuff</button>
    );
}

