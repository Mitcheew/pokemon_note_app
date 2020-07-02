import React, { useState, useEffect } from 'react';

export default function MainBody(props) {
    let { list, setList } = props;
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
                        <div>
                            <h2>Teams</h2>
                            {
                                list.teams.map((x, i) => {
                                    return (
                                        <div key={i + x.trainer}>
                                            <h1>{x.trainer}</h1>
                                            Pokemon:
                                {
                                                x.pokemon.map((p, i) => {
                                                    return (
                                                        <div key={i + p.name}>
                                                            <h2>Name: {p.name}</h2>
                                                            <h3>Type: {p.type}</h3>
                                                            <h4>Moves: {
                                                                p.moves.map((m, i) => `${m}, `)
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
                        <hr />
                    </div>
            }
        </div>
    )
}
