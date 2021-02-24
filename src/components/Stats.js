import axios from 'axios';
import React, {useEffect, useState} from 'react'
import "./Stats.css"
import Rowofstats from "./Rowofstats"
import { db } from "./firebase"

const TOKEN = "c0qikiv48v6tskkp0dug";
const baseURL = 'https://finnhub.io/api/v1/quote'

function Stats() {
    const [stockData, setsStockData] = useState([])
    const [myStocks, setmyStocks] = useState([])

    const getMyStocks = () =>{
        db
        .collection("mystocks")
        .onSnapshot(snapshot =>{
           let promises = [];
           let tempData = [];
           snapshot.docs.map((doc) => {
               console.log(doc.data());
               promises.push(getStocksData(doc.data().ticker)
               .then(res =>{
                   tempData.push({
                       id: doc.id,
                       data:doc.data(),
                       info:res.data
                   })
               })
           )})
           Promise.all(promises).then(()=>{
                console.log(tempData);
                setmyStocks(tempData);
           })
        })
    }

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
        getMyStocks();
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
                        {myStocks.map((x) => 
                        <Rowofstats
                            key={x.data.ticker}
                            name={x.data.ticker}
                            openPrice={x.info.o}
                            shares = {x.data.shares}
                            price={x.info.c}
                        />)}
                     
                    </div>
                </div>
                <div className="stats__header stats__lists">
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
