import React, { useState, useEffect } from 'react';

export default function SideNav(props) {
    let {list, setSelection} = props


    const readout = list.map((data, i) => {
        // let newData = data.summary.split("\n ")
                    // console.log(newData)
        return (

            <div key={data.title} onClick={()=> setSelection(i)}>
                <br />
                <h2 className="episodeTitle">S{data.season} EP{data.episode}: {data.title}</h2> <br />
                <h4 className="episodeDate">Approximate Date: {data.date}</h4>
                <hr/>
            </div>
        )
    })
    return (
        <div className="sideNavBar">
            {readout}
        </div>
    )
}