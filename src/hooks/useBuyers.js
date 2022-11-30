import axios from "axios";
import { useEffect, useState } from "react"

const useBuyers = email => {
    const [isBuyers, setIsBuyers] = useState(false);
    const [isBuyersLoading, setIsBuyersLoading] = useState(true);
    useEffect(() => {
        axios.get(`https://e-exchange.vercel.app/users/buyers/${email}`)
        .then((res) => {
            const {data} = res;
            setIsBuyers(data.isBuyer);
            setIsBuyersLoading(false);
        })
    }, [email])

    return[isBuyers, isBuyersLoading]
};

export default useBuyers;