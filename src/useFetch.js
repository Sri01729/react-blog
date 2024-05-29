import { useState,useEffect } from "react";


const useFetch = (url) => {

    const [data, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [message, setMessage] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if (!res.ok) {
                        throw Error('could not frtch the data from the resource');

                    }
                    return res.json();
                })
                .then(data => {
                    setIsPending(false);
                    setMessage(null);
                    setBlogs(data);
                })
                .catch(err => {
                    console.log(err.message);
                    setIsPending(null);
                    setMessage('Unable to fetch the data from the resource');
                })
        }, 1000);
    }, [url]);




    return { data, isPending, message };
}

export default useFetch;