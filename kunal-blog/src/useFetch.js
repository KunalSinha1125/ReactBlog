import {useEffect, useState} from 'react';

const useFetch = (url, data, setData, isLoading, setIsLoading, error, setError) => {
    useEffect(() => {
        const abortCont = new AbortController();
        setTimeout(() => {
            fetch(url, {signal: abortCont.signal})
                .then(res => {
                    console.log(res)
                    if (!res.ok) {
                        throw Error('could not fetch the data for that resource')
                    }
                    return res.json()
                })
                .then(data => {
                    setData(data)
                    setIsLoading(false);
                    setError(null);
                })
                .catch(err => {
                    if (err.name === "AbortError") {
                        console.log("fetch aborted")
                    } else {
                        setIsLoading(false);
                        setError(err.message);
                    }
                });
        }, 100)
        return () => abortCont.abort();
    }, [url]);
    return {data, isLoading, error}
};
export default useFetch;