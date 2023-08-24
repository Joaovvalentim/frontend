import { useState, useEffect } from "react";
import { doGetRequest } from "helpers/ApiHelper";
import Block from "components/Block";
import { bitcoinProcessor, currencyProcessor } from "helpers/ProcessorHelper"


const Home = () => {
    const [data, setData] = useState(null)
    useEffect(() => {
        doGetRequest('/dashboard').then(({ data }) => setData(data))
    }, []);
    if (data) {
        return (
            <div>
                <h1><Block data={data.bitcoin} label="Bitcoin" processor={bitcoinProcessor}/></h1>
                <h1><Block data={data.currency} label="Currency" processor={currencyProcessor}/></h1>
            </div>
        )
    }
    return <h1>No data to display</h1>
}

export default Home