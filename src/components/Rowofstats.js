import React from 'react'
import "./Rowofstats.css"
import StockSVG from "./stock.svg"
import { db } from "./firebase"

function Rowofstats(props) {

    const percentage= ((props.price - props.openPrice)/props.openPrice)*100;
    
    const buyStock = ()=>{
        db.collection("mystocks")
        .where("ticker", "==", props.name)
        .get()
        .then((querySnapshot)=>{
            //Update the Record
            if(!querySnapshot.empty){
                querySnapshot.forEach(function(doc){
                    db.collection("mystocks")
                    .doc(doc.id)
                    .update({
                        shares:doc.data().shares += 1
                    })
                    console.log(doc.id, "=>", doc.data())
                }) 
            }else{
                //Add a new record
                db.collection("mystocks")
                .add({
                   ticker:props.name,
                   shares: 1
                })
            }
        })
    }

    return (
        <div className="row" onClick={buyStock}>
            <div className="row__intro">
                <h1>{props.name}</h1>
                <p>{props.shares && (props.shares +" shares")}</p>
            </div>
            <div className="row__chart">
                <img src={StockSVG} height={16} alt=""/>
            </div>
            <div className="row__numbers">
                <p className="row__price">{props.price}</p>
                <p className="row__percentage">{Number(percentage).toFixed(2)}%</p>
            </div>
        </div>
    )
}

export default Rowofstats
