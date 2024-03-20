import React, { useEffect, useState } from "react";
import './Apicreatapp.css'

function Apicreatapp() {
    const [data, setData] = useState([]);
    const [e, setE] = useState(null);
    const [size,setsize] =useState(0);

    useEffect(() => {
        let urllink;
        switch (e) {
            case 'Prime':
                urllink = 'http://20.244.56.144/numbers/primes';
                break;
            case 'Fibonacci':
                urllink = 'http://20.244.56.144/numbers/fibo';
                break;
            case 'Random':
                urllink = 'http://20.244.56.144/numbers/rand';
                break;
            case 'Even':
                urllink = 'http://20.244.56.144/numbers/even';
                break;
            default:
                break;
        }

        fetch(urllink)
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error('Error fetching data:', error));
    }, [e]);

    function handleClick(str) {
        setE(str);
    };

    return (
        <div className="main">
            <div className="box">
                <h1 className="head">Calculator</h1>
                <div className="list">
                    <ul>
                        <button onClick={() => handleClick("Prime")}>Primes</button>
                        <button onClick={() => handleClick("Random")}>Random</button>
                        <button onClick={() => handleClick("Even")}>Even</button>
                        <button onClick={() => handleClick("Fibonacci")}>Fibonacci</button>
                    </ul>
                </div>
            </div>
            <div className="numbers">
                <pre className="numbers">{JSON.stringify(data)}</pre>
            </div>
            <div>
                
            </div>
        </div>
    );
}

export default Apicreatapp;