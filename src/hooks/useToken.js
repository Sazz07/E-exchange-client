import { useEffect, useState } from "react";

const useToken = email => {
    const [token, setToken] = useState('');

    useEffect(() => {
        if (email) {
            fetch(`https://e-exchange.vercel.app/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.accessToken) {
                        localStorage.setItem('resaleToken', data.accessToken);
                        setToken(data.accessToken);
                    }
                })
        }
    }, [email]);

    return [token];
}

export default useToken;