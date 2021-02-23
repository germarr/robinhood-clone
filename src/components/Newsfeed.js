import React from 'react'
import "./Newsfeed.css"
import Linegraph from "./Linegraph"

function Newsfeed() {
    return (
        <div className="newsfeed">
            <div className="newsfeed__container">
                <div className="newsfeed__charSection">
                    <div className="newsfeed__portfolio">
                        <h1>$114,656</h1>
                        <p>$44.63 (+0.04%) Today</p>
                    </div>
                    <div className="newsfeed__chart">
                        <Linegraph/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsfeed
