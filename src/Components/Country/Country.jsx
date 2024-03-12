import { useState } from 'react';
import './Country.css';

const Country = ({country,markVisitedHandler,flagHandler}) => {
  console.log(country);
  const {name,flags,population,area,cca3} =country;
  const [visited,setVisited] = useState(false);
  const handleButton =()=>{
     setVisited(!visited);
  }
  return (
    <div className={visited?'visited':'country'}>
      <h4>Name: {name?.common}</h4>
      <img src={flags?.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>Code: {cca3}</p>
      <br />
      <button onClick={()=>{markVisitedHandler(country);flagHandler(country.flags.png)}}>Mark as visited</button>
      <br />
      <br />
      <button onClick={handleButton} style={{background:visited?'orange':'black',color:visited?'black':'white'}} >{visited? 'Visited' : 'GO'}</button>
      {visited&&'I have visited this country'}
      {visited||'I want to go this country'}
      </div>
      
  );
};

export default Country;