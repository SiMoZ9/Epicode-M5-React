import {useState, useEffect} from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, SetLoading] = useState(false)
    const [error, setError] = useState(null)

    const getData = async () => {

        try {
            SetLoading(true)
            const res = await fetch(url);
            const data = await res.json();
            setData(data)
            SetLoading(false)
        } catch (e) {
            setError(e)
        }
    }

    useEffect(() => {
        getData()
    }, [url])

    return { data, loading, error}
}

export default useFetch
