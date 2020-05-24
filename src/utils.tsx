import {useCallback} from 'react';

const nameMap: {[key: string]: number} = {}

export const useDebouncedPromise = (name: string, onResolve: () => void) =>
    useCallback((promise: () => Promise<unknown>) => {
        if (Number.isInteger(nameMap[name])) {
            nameMap[name] = nameMap[name] + 1
        } else {
            nameMap[name] = 1
        }

        promise().finally(() => {
            nameMap[name] = nameMap[name] - 1

            if (nameMap[name] === 0) {
                delete nameMap[name]
                onResolve()
            }
        })
    }, [name, onResolve])

