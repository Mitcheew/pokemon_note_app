import React, { useState, useEffect } from 'react';

export default function MainBody(props) {
    let {list, setList} = props;
    return (
        <div className="mainBody">
            {
                list === undefined
                ? 
                <h1>Select an item on the left to see more detailed information</h1>
                :
                <div>
                <br />
                <h2 className="episodeTitle">S{list.season} EP{list.episode}: {list.title}</h2> <br />
                <h4 className="episodeDate">Approximate Date: {list.date}</h4>
                <p>Summary: {list.summary}</p>
                <hr/>
            </div>
            }
        </div>
    )
}