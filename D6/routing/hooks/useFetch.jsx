import {useState} from "react";

const useFetch = () => {
    const [data, setData] = useState(null);
    const [loading, isLoading] = useState(false)
    const [error, setError] = useState(null)

}