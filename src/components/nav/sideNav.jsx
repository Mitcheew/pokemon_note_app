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
            episode: 3,
            title: "Episode 3 Title",
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
    ];


    const readout = list.map((data) => {
        return (

            <div>
                <br />
                {data.title} - {data.summary}
            </div>
        )
    })
    return (
        <div>
            {readout}
        </div>
    )
}