import {useEffect, useState} from "react";

export const useFetch = (url: string) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [inProgress, setInProgress] = useState(false)

    useEffect(() => {
        (async () => {
            try {
                setInProgress(true)
                const res = await fetch(url)
                const result = await res.json()
                if (res.ok) {
                    setData(result)
                    setError(null)
                } else {
                    throw result
                }
            } catch (err) {
                setError(err)
            } finally {
                setInProgress(false)
            }
        })()
    }, [])

    return {data, error, inProgress}
}
