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
        teams:
          [{
            trainer: "Ash Ketchum",
            gender: "Male",
            pokemon: [
              {
                name: "Pikachu",
                gender: "Male",
                type: "Electric",
                moves: ["thundershock", "thunderbolt", "quick attack", "agility"]
              }
            ]
          }
          ]
      },
      {
        season: 1,
        episode: 3,
        title: "Episode 3 Title",
        summary: "This is a summary 2",
        date: "May 1997",
        teams:
          [{
            trainer: "Ash Ketchum",
            gender: "Male",
            pokemon: [
              {
                name: "Pikachu",
                gender: "Male",
                type: "Electric",
                moves: ["thundershock", "thunderbolt", "quick attack", "agility"]
              },
              {
                name: "Caterpie",
                gender: "Male",
                type: "Bug",
                moves: ["tackle", "string shot", "bug bite"]
              }
            ]
          },
          {
            trainer: "Misty Waterflower",
            gender: "Female",
            pokemon: [
              {
                name: "Staryu",
                gender: "N/A",
                type: "Water",
                moves: ["water gun", "rapid spin", "swift", "recover"]
              },
              {
                name: "Goldeen",
                gender: "Female",
                type: "Water",
                moves: ["tackle", "horn attack", "splash"]
              }
            ]
          }
          ]
      },
      {
        season: 2,
        episode: 4,
        title: "Episode 4 Title",
        summary: "This is a summary",
        date: "April 1997",
        teams: [{
          trainer: "Ash Ketchum",
          gender: "Male",
          pokemon: [
            {
              name: "Pikachu",
              gender: "Male",
              type: "Electric",
              moves: ["thundershock", "thunderbolt", "quick attack", "agility"]
            },
            {
              name: "Caterpie",
              gender: "Male",
              type: "Bug",
              moves: ["tackle", "string shot", "bug bite"]
            }
          ]
        },
        {
          trainer: "Misty Waterflower",
          gender: "Female",
          pokemon: [
            {
              name: "Staryu",
              gender: "N/A",
              type: "Water",
              moves: ["water gun", "rapid spin", "swift", "recover"]
            },
            {
              name: "Goldeen",
              gender: "Female",
              type: "Water",
              moves: ["tackle", "horn attack", "splash"]
            }
          ]
        }
        ]
      },
      {
        season: 2,
        episode: 5,
        title: "Episode 5 Title",
        summary: "This is a summary. \n Totally a summary",
        date: "April 1997",
        teams: [{
          trainer: "Ash Ketchum",
          gender: "Male",
          pokemon: [
            {
              name: "Pikachu",
              gender: "Male",
              type: "Electric",
              moves: ["thundershock", "thunderbolt", "quick attack", "agility"]
            },
            {
              name: "Caterpie",
              gender: "Male",
              type: "Bug",
              moves: ["tackle", "string shot", "bug bite"]
            }
          ]
        },
        {
          trainer: "Misty Waterflower",
          gender: "Female",
          pokemon: [
            {
              name: "Staryu",
              gender: "N/A",
              type: "Water",
              moves: ["water gun", "rapid spin", "swift", "recover"]
            },
            {
              name: "Goldeen",
              gender: "Female",
              type: "Water",
              moves: ["tackle", "horn attack", "splash"]
            }
          ]
        }
        ]
      },
    ]
  );
  return (
    <div className="App">
      {/* <TopNav /> */}
      <SideNav list={list} setSelection={setSelection} />
      <MainBody list={list[selection]} setList={setList} />
    </div>
  );

}
