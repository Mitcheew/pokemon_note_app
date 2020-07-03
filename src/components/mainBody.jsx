import React, { useState, useEffect } from 'react';

export default function MainBody(props) {
    let { list, setList } = props;
    let [ editMode, setEditMode ] = useState(false);
    return (
        <div className="mainBody">
            {
                list === undefined
                    ?
                    <h1>Select an item on the left to see more detailed information</h1>
                    :
                    !editMode
                    ?
                    <div>
                        <br />
                        <h2 className="episodeTitle">S{list.season} EP{list.episode}: {list.title}</h2> <br />
                        <h4 className="episodeDate">Approximate Date: {list.date}</h4>
                        <p>Summary: {list.summary}</p>
                        <div>
                            <h2>Teams</h2>
                            {
                                list.teams.map((x, i) => {
                                    return (
                                        <div key={i + x.trainer}>
                                            <h1>{x.trainer} ({x.gender})</h1>
                                            Pokemon:
                                {
                                                x.pokemon.map((p, i) => {
                                                    return (
                                                        <div key={i + p.name}>
                                                            <h2>Name: {p.name} ({p.gender})</h2>
                                                            <h3>Type: {p.type}</h3>
                                                            <h4>Moves: {
                                                                p.moves.map((m, i) => i+1 < p.moves.length ? `${m}, ` : `${m}`)
                                                            }</h4>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    )
                                })

                            }
                        </div>
                        <button onClick={() => setEditMode(true)}>Edit</button>
                    </div>
                    :
                    <div>
                        edit mode on
                        <button onClick={() => setEditMode(false)}>Edit</button>
                    </div>
            }
        </div>
    )
}
