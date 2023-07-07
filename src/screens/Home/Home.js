
import { useState } from "react";

const Home = () => {
const result = useState()

    fetch('/dashboard')
        .then(response => response.json())
        .then(({ data }) => {
            console.log(data);
        })
        .catch(e => {
            console.error(e)
        })



    return <h1>Home</h1>
}

export default Home