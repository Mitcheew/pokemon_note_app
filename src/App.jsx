import React, { useState, useEffect } from 'react';
import './App.css';
import TopNav from './components/nav/topNav'
import SideNav from './components/nav/sideNav';
import MainBody from './components/mainBody';

export default function App() {
  let [selection, setSelection] = useState();
  let [list, setList] = useState(
    [
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
    ]
  );
  return (
    <div className="App">
      {/* <TopNav /> */}
      <SideNav list={list} setSelection={setSelection} />
      <MainBody list={list[selection]} setList={setList}/>
    </div>
  );

}
