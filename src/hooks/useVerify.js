import axios from "axios";
import { useEffect, useState } from "react"

const useVerify = email => {
    const [isVerify, setIsVerify] = useState('');
    const [isVerifyLoading, setIsVerifyLoading] = useState(true);
    useEffect(() => {
        axios.get(`http://localhost:5000/users/verify/${email}`)
        .then((res) => {
            const {data} = res;
            console.log(data);
            setIsVerify(data.isVerify);
            setIsVerifyLoading(false);
        })
    }, [email])

    return[isVerify, isVerifyLoading]
};

export default useVerify;