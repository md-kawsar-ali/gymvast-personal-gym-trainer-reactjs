import { useState, useEffect } from 'react';

const useServices = () => {
    const [result, setResult] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/md-kawsar-ali/gymvast-data/main/program.json')
            .then(res => res.json())
            .then(data => setResult(data))
            .catch(err => console.log(err))
    }, []);

    return [result];
}

export default useServices;