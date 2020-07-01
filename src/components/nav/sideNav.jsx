import React, { useState, useEffect } from 'react';

export default function SideNav() {
    let list = [
        {
            season: 1,
            episode: 1,
            title: "Pokemon I Choose You!",
            summary: "This is a summary",
            date: "April 1997",
            teams: {
                ash: {
                    pokemon: {
                        pikachu: {
                            gender: "Male",
                            type: "Electric",
                            moves: ["thundershock", "thunderbolt", "quick attack", "agility"]
                        }
                    }
                }
            }
        },
        {
            season: 1,
            episode: 3,
            title: "Episode 3 Title",
            summary: "This is a summary 2",
            date: "May 1997",
            teams: {
                ash: {
                    pokemon: {
                        pikachu: {
                            gender: "Male",
                            type: "Electric",
                            moves: ["thundershock", "thunderbolt", "quick attack", "agility"]
                        }
                    }
                }
            }
        },
        {
            season: 2,
            episode: 4,
            title: "Episode 4 Title",
            summary: "This is a summary",
            date: "April 1997",
            teams: {
                ash: {
                    pokemon: {
                        pikachu: {
                            gender: "Male",
                            type: "Electric",
                            moves: ["thundershock", "thunderbolt", "quick attack", "agility"]
                        }
                    }
                }
            }
        },
        {
            season: 2,
            episode: 5,
            title: "Episode 5 Title",
            summary: "This is a summary. \n Totally a summary",
            date: "April 1997",
            teams: {
                ash: {
                    pokemon: {
                        pikachu: {
                            gender: "Male",
                            type: "Electric",
                            moves: ["thundershock", "thunderbolt", "quick attack", "agility"]
                        }
                    }
                }
            }
        },
    ];


    const readout = list.map((data) => {
        // let newData = data.summary.split("\n ")
                    // console.log(newData)
        return (

            <div key={data.title}>
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