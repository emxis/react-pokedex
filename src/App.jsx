import axios from 'axios'
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [id, setId] = useState('');

  const myInp = (e)=>{
    setId(e.target.value);
  }
  const mySub = async (e)=>{
    e.preventDefault();
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    try {
      const respons = await axios.get(url)
      setPokemon(respons.data)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <>
    <div className='w-100 bg-dark d-flex justify-content-center align-items-center text-center vh-100'>
    <div>
      <h1 className='text-light text-center display-4 fw-bold mb-4'>Pokedex App</h1>
    <form onSubmit={mySub} action='' className='d-flex'>
      <input type="text" className='form-control p-2' onChange={myInp} placeholder='Enter A Number For Pokemon' value={id}/>
      <button className='btn btn-outline-light mx-2' type='submit'>Get</button>
    </form>
    {
      pokemon &&(
        <div className='text-light mt-4 '>
          <h2>Your Choice</h2>
          <h3>{pokemon.name}</h3>
          <p>{pokemon.types[0].type.name}</p>
          <div>
        <h4>Stats:</h4>
        <ul>
          {
            pokemon.stats.map((stat, i)=>(
              <li key={i}>
              {stat.stat.name}: {stat.base_stat}

              </li>
            ))
          }
        </ul>
      </div>
          <img src={pokemon.sprites.front_default}/>
        </div>
      )
    }
    </div>
    </div>
    </>
  )
}

export default App