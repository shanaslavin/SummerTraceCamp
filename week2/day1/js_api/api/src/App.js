import React, {useState, useEffect} from 'react';
import './App.css';
import {getPlanets} from './swapiWorker';
import { render } from "react-dom";
import { VictoryChart, VictoryScatter } from "victory";

function App() {

  const [planets, setPlanets] = useState([])
  // const [orbitalPeriod, setOrbitalPeriod] = useState([])
  // const [rotationPeriod, setRotationPeriod] = useState([])
  const [graphData, setGraphData] = useState([])

  const parseGraphData = (planet) => {
    if(planet.orbital_period === 'unknown' || planet.rotation_period === "unknown"){
      return {x: 0, y: 0}
    }else {
      return {x: Number(planet.orbital_period), y: Number(planet.rotation_period)}
    }
  }

  useEffect(() => {
    var rawPlanets = []

    for (var page = 1; page <= 7; page++) {
      getPlanets(page).then((response) => {
        rawPlanets = rawPlanets.concat(response.data.results)
        setPlanets(rawPlanets)
      })
    }
  }, [])



  useEffect(() => {
    console.log("raw: ", planets.map(parseGraphData))
    setGraphData(planets.map(parseGraphData))
  }, [planets])
  

  return (
    <div className="App">
      {planets.map(planet => {
        if (Number(planet.rotation_period) === 24) {
          return (
            <li key={planet.url} style={{color: 'red'}}>
              This planet has the orbital rotation of 24 {planet.name}
            </li>
          )
        } else {
          return (
            <li key={planet.url}>
              {planet.name}
            </li>
          )
        }
      })}

      {graphData &&
        <VictoryChart
          domain = {[0, 1000]}
        >
      
          <VictoryScatter
            style={{fill: 'blue'}}
            size={2}
            data={graphData}
          />
        </VictoryChart>
      }
      
    </div>
  );
}

export default App;
