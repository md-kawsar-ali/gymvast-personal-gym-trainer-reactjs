import { useState, useEffect } from 'react';

const useServices = () => {
    const [result, setResult] = useState([]);
    const [dataLoading, setDataLoading] = useState(true);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/md-kawsar-ali/gymvast-data/main/program.json')
            .then(res => res.json())
            .then(data => {
                setResult(data);
                setDataLoading(false);
            })
            .catch(err => console.log(err))
    }, []);

    return [result, dataLoading];
}

export default useServices;