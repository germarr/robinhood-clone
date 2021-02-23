import axios from 'axios';
import React, {useEffect, useState} from 'react'
import "./Stats.css"
import Rowofstats from "./Rowofstats"

const TOKEN = "c0qikiv48v6tskkp0dug";
const baseURL = 'https://finnhub.io/api/v1/quote'

function Stats() {
    const [stockData, setsStockData] = useState([])

    const getStocksData = (stock) =>{
        return axios
            .get(`${baseURL}?symbol=${stock}&token=${TOKEN}`)
            .catch((error)=>{
                console.error("Error", error.message)
            })
    };

    useEffect(()=>{
        let tempStocksData = []
        const stockList =["AAPL","MSFT","TSLA","FB","BABA","UBER","DIS","SBUX"]
        let promises = [];
        stockList.map((stock)=>{
            promises.push(
                getStocksData(stock)
                .then((res)=>{
                    tempStocksData.push({
                        name:stock,
                        ...res.data
                    });
                })
            )
        });

        Promise.all(promises).then(()=>{
            setsStockData(tempStocksData);
            console.log(tempStocksData);
        })

    },[])

    return (
        <div className="stats">
            <div className="stats__container">
                <div className="stats__header">
                    <p>Stocks</p>
                </div>
                <div className="stats__content">
                    <div className="stats__rows">  
                    </div>
                </div>
                <div className="stats__header">
                    <p>Lists</p>
                </div>
                <div className="stats__content">
                    <div className="stats__rows">
                        {stockData.map((x) => 
                        <Rowofstats
                            key={x.name}
                            name={x.name}
                            openPrice={x.o}
                            price={x.c}
                        />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats
