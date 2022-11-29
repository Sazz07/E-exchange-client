import axios from "axios";
import { useEffect, useState } from "react"

const useBuyers = email => {
    const [isBuyers, setIsBuyers] = useState(false);
    const [isBuyersLoading, setIsBuyersLoading] = useState(true);
    useEffect(() => {
        axios.get(`http://localhost:5000/users/buyers/${email}`)
        .then((res) => {
            const {data} = res;
            console.log(data);
            setIsBuyers(data.isBuyer);
            setIsBuyersLoading(false);
        })
    }, [email])

    return[isBuyers, isBuyersLoading]
};

export default useBuyers;